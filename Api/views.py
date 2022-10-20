import random
from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.core import serializers
from django.forms.models import model_to_dict


from Gallery.models import Album


# Create your views here.


def HeroPhoto(request):
    AlbumsPhotos = Album.objects.all()
    randomAlbumImg = random.choice(AlbumsPhotos)

    return JsonResponse({"url": randomAlbumImg.img.url})


def AllPhotos(request):
    return JsonResponse({"status": 200})
