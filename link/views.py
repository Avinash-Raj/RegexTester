from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView

import datetime


# Create your views here.


class HomeView(TemplateView):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        context = {
            'items': 'Hi Buddy..',
        }

        return self.render_to_response(context)
