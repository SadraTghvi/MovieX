from django.contrib import admin

# Register your models here.

from Gallery.models import *


admin.site.register(AlbumCategories)
admin.site.register(Album)
