# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-12 00:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('caption_maker', '0003_auto_20160309_1430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='author',
            field=models.CharField(max_length=32, null=True),
        ),
    ]