import json
import random
from random import randint
from django.shortcuts import render
from django.http import JsonResponse
import requests
from django.http import HttpResponseRedirect


# Create your views here.


def HeroPhoto(request):

    return JsonResponse({"status": 200})


def AllPhotos(request):
    return JsonResponse({"status": 200})
