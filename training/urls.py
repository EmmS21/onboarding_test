from django.urls import path
from .views import train_model

urlpatterns = [
    path('', train_model, name='train_model'),
]
