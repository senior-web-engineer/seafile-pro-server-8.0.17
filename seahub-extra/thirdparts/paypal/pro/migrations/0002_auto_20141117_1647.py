# -*- coding: utf-8 -*-


from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pro', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paypalnvp',
            name='ipaddress',
            field=models.GenericIPAddressField(null=True, blank=True),
        ),
    ]
