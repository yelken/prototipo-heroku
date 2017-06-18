# coding: utf-8
from django import forms

from .models import Prototipo

class PrototipoForm(forms.ModelForm):
    
    class Meta:
        model = Prototipo
        fields = ['file',]