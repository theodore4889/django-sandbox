# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-19 18:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activity_log', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='log',
            name='created_at',
            field=models.DateTimeField(),
        ),
    ]