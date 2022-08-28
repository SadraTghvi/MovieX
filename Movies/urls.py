from django.urls import path

from Movies import views


urlpatterns = [
    path("getmovies/", views.Movies, name="movies")
]
