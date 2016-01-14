from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from link.serializers import LinkSerializer
from django.views.generic import TemplateView
from rest_framework import permissions, viewsets
from link.models import Link
import datetime


# Create your views here.


class HomeView(TemplateView):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        context = {
            'items': 'Hi Buddy..',
        }

        return self.render_to_response(context)


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
