from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.decorators import login_required
from .views import PrototipoCreate

urlpatterns = [
    url(r'^prototipo/create/$', PrototipoCreate.as_view(), name='prototipo-create'),
]