# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-08 12:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Prototipo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('matricula', models.CharField(blank=True, max_length=100, null=True)),
                ('nome', models.CharField(blank=True, max_length=100, null=True)),
                ('funcao', models.CharField(blank=True, max_length=100, null=True)),
                ('horario_entrada_saida', models.CharField(blank=True, max_length=100, null=True)),
                ('intervalo_refeicao', models.CharField(blank=True, max_length=100, null=True)),
                ('cnpj', models.CharField(blank=True, max_length=100, null=True)),
                ('mes', models.CharField(blank=True, max_length=100, null=True)),
                ('pis', models.CharField(blank=True, max_length=100, null=True)),
                ('admissao', models.CharField(blank=True, max_length=100, null=True)),
                ('centro_custo', models.CharField(blank=True, max_length=100, null=True)),
                ('escala_trabalho', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'verbose_name_plural': 'Prototipos',
            },
        ),
    ]
