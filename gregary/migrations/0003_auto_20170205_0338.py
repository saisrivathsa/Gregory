# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-04 22:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gregary', '0002_auto_20170204_2055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='category',
            field=models.TextField(default=None, max_length=50),
        ),
        migrations.AlterField(
            model_name='event',
            name='end_time',
            field=models.DateTimeField(default=None),
        ),
        migrations.AlterField(
            model_name='event',
            name='enrollment_number',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='event',
            name='phone_number',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_time',
            field=models.DateTimeField(default=None),
        ),
        migrations.AlterField(
            model_name='event',
            name='student',
            field=models.TextField(default=None, max_length=50),
        ),
        migrations.AlterField(
            model_name='event',
            name='sub_category',
            field=models.TextField(default=None, max_length=50),
        ),
    ]