from turtle import title
from unicodedata import category
from django.db import models

# Create your models here.


class AlbumCategories(models.Model):
    category = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.category


class Album(models.Model):
    title = models.CharField(max_length=100)
    img = models.ImageField()
    description = models.TextField(
        max_length=200, default="This Is The Default Description")
    category = models.ForeignKey(AlbumCategories, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title
