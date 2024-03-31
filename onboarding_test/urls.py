from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('training_modules/', include('training_modules.urls')),
    path('training/', include('training.urls')),
]
