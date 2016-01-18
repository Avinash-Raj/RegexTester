# -*- coding: utf-8 -*-



# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from link.serializers import LinkSerializer
from django.views.generic import TemplateView, RedirectView
from django.views.generic.base import ContextMixin
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from link.models import Link
import datetime
from django.views.decorators.csrf import csrf_exempt
from .parser import RegexParser


# Create your views here.
class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class HomeView(TemplateView):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        context = {
            'items': 'Hi Buddy..',
        }

        return self.render_to_response(context)

    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


class TestView(TemplateView, RedirectView):
    template_name = 'test.html'

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super(TestView, self).dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        return kwargs

    def post(self, request, *args, **kwargs):
        query_dict = request.POST
        converted_dict = query_dict.dict()
        regex = converted_dict['regex']
        data = converted_dict['data']
        mod = converted_dict['mod']
        result = RegexParser.parse(regex, data, mod)
        m = type(result)
        data_type = ''
        if m is list:
            data_type = 'list'
        else:
            data_type = 'str'
        context = {
            'items': result,
            'type': data_type
        }
        return self.render_to_response(context)

    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
