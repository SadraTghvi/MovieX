from django.urls import path
from Api.views import *


urlpatterns = [
    path("heromovie/", HeroMovie, name="hero-movie"),
    path("all-movies/", AllMovies, name="all-movies")
]
