from django.urls import path

from Movies import views


urlpatterns = [
    path("", views.index, name="index")
]
