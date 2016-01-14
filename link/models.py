from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Link(models.Model):
    id = models.IntegerField(primary_key=True)
    input_regex = models.CharField(max_length=100)
    regex_modifiers = models.CharField(max_length=3, blank=True)
    input_data = models.TextField(blank=True)
    output = models.TextField(blank=True)
    link = models.CharField(max_length=100)

    def __str__(self):
        return self.id


