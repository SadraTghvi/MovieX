from django.urls import path
from Api.views import *


urlpatterns = [
    path("herophoto/", HeroPhoto, name="hero-photo"),
    path("all-photos/", AllPhotos, name="all-movies")
]
