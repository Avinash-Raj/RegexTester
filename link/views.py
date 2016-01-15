# -*- coding: utf-8 -*-



# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from link.serializers import LinkSerializer
from django.views.generic import TemplateView
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from link.models import Link
import datetime
from django.views.decorators.csrf import csrf_exempt


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


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
