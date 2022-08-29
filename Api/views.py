import json
import random
from random import randint
from django.shortcuts import render
from django.http import JsonResponse
import requests
from django.http import HttpResponseRedirect


# Create your views here.


def HeroMovie(request):

    response = requests.get(
        f'https://www.omdbapi.com/?t={randomWordGen()}&apikey=92876dd4')

    while response.status_code != 200:
        response = requests.get(
            f'https://www.omdbapi.com/?t={randomWordGen()}&apikey=92876dd4')

    return JsonResponse(response.json())


def AllMovies(request):
    response = requests.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=92876dd4")
    return JsonResponse(response.json())


def randomWordGen() -> str:
    random_word = random.choice(requests.get(
        "https://www.mit.edu/~ecprice/wordlist.10000").content.splitlines())

    # transform byte to string
    return random_word.decode("utf-8")
