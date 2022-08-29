import json
from django.shortcuts import render
from django.http import JsonResponse
import requests
from django.http import HttpResponseRedirect


# Create your views here.


def HeroMovie(request):
    response = requests.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=92876dd4")
    return JsonResponse(response.json())


def AllMovies(request):
    response = requests.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=92876dd4")
    return JsonResponse(response.json())
