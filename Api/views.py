import json
import random
from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.core import serializers
from django.forms.models import model_to_dict


from Gallery.models import Album


# Create your views here.


def HeroPhoto(request):
    AlbumsPhotosImgs = []

    for i in Album.objects.all():
        AlbumsPhotosImgs.append(i.img.url)

    return JsonResponse({"urls": AlbumsPhotosImgs}, safe=False)


def LastAlbums(request):

    LastAlbumsArr = []

    for i in Album.objects.all():
        LastAlbumsArr.append({
            "title": i.title,
            "description": i.description,
            "img": i.img.url
        })

    return JsonResponse({
        "lastAlbums": LastAlbumsArr
    })


def AllAlbums(request):
    LastAlbumsArr = []

    for i in Album.objects.all():
        LastAlbumsArr.append(i.img.url)

    return JsonResponse({"albums": LastAlbumsArr})
