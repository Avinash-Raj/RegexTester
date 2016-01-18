from rest_framework import serializers

from link.models import Link


class LinkSerializer(serializers.ModelSerializer):
    pk = serializers.IntegerField(read_only=True)

    class Meta:
        model = Link
        fields = ('pk', 'input_regex', 'regex_modifiers', 'input_data', 'output', 'link')
