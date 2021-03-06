# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-13 17:34
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('caption_maker', '0004_auto_20160311_1853'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='caption',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='caption',
            name='media',
        ),
        migrations.RemoveField(
            model_name='captionline',
            name='caption',
        ),
        migrations.RemoveField(
            model_name='captionline',
            name='text',
        ),
        migrations.AddField(
            model_name='caption',
            name='caption_line',
            field=models.ForeignKey(default=8, on_delete=django.db.models.deletion.CASCADE, to='caption_maker.CaptionLine'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='caption',
            name='text',
            field=models.CharField(default='hello', max_length=256),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='captionline',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 3, 13, 17, 34, 19, 834983, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='captionline',
            name='media',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='caption_maker.Media'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='captionline',
            name='order',
            field=models.IntegerField(default=1),
        ),
    ]
