# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-20 04:29
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('activity_log', '0003_auto_20160219_1206'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='logtimer',
            options={'ordering': ['-action_time']},
        ),
    ]
