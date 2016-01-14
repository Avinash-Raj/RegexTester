from rest_framework import serializers
from django.contrib.auth.models import User

from link.models import Link


class LinkSerializer(serializers.ModelSerializer):
    user = serializers.Field(source='user')

    class Meta:
        model = Link
        fields = ('input_regex', 'regex_modifiers', 'input_data', 'output', 'link')
