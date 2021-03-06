# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-09 20:30
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('caption_maker', '0002_auto_20160309_1331'),
    ]

    operations = [
        migrations.AddField(
            model_name='captionline',
            name='mark_time',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=6),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='caption',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 3, 9, 20, 30, 5, 237481, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='media',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 3, 9, 20, 30, 13, 945719, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
