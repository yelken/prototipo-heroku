# -*- coding: utf-8 -*-

from django.core.urlresolvers import reverse_lazy
from django.shortcuts import render, redirect
from django.views.generic import RedirectView, View, UpdateView, ListView, DetailView, DeleteView, CreateView
from django.http import JsonResponse
from datetime import datetime, timedelta, date
import json

from .models import Prototipo
from .forms import PrototipoForm
from .utils import readPDF


class PrototipoCreate(View):
    def get(self, request):
        form = PrototipoForm()
        context = {'form': form} 
        return render (request, 'prototipo/create.html', context)

    def post(self, request, *args, **kwargs):
        form = PrototipoForm(request.POST, request.FILES)
        if form.is_valid():
            lista = readPDF(form.cleaned_data.get("file"))
            print (lista)
            #return redirect(reverse_lazy("clientelotebox-list"))
        context = {'form': form}
        return render (request, 'prototipo/create.html', context)