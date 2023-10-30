# Generated by Django 4.2.5 on 2023-10-26 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_rename_drink_drinks_drink_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='DrinksCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=200)),
            ],
        ),
        migrations.RenameField(
            model_name='drinks',
            old_name='drink_name',
            new_name='drink',
        ),
        migrations.AddField(
            model_name='drinks',
            name='category_id',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, to='myapp.drinkscategory'),
        ),
    ]