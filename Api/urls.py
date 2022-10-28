from django.urls import path
from Api.views import *


urlpatterns = [
    path("herophoto/", HeroPhoto, name="hero-photo"),
    path("last-albums/", LastAlbums, name="last-albums"),
    path("all-albums/", AllAlbums, name="all-albums")
]
