from django import template

register = template.Library()

@register.filter
def isinst(value, class_str):
    return isinstance(value, class_str)
