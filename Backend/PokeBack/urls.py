from django.urls import path
from .utility import *

from . import views

urlpatterns = [
    path('pokemons/<int:pokemon_id>',views.get_pokemon_data_by_id, name="get_pokemon_data_by_id"),
    path('pokemons',views.get_paginated_pokemon_data, name="get_paginated_pokemon_data"),
]

## code here runs once on startup
PopulateDB()