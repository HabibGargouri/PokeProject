from .models import Pokemon
from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from .utility import *
import requests
from django.core.exceptions import ObjectDoesNotExist
from django.core.paginator import Paginator, EmptyPage
from .models import Pokemon


# Create your views here.


def get_paginated_pokemon_data(request):
    page_number = request.GET.get("page", 1)
    items_per_page = request.GET.get("items_per_page", 10)

    pokemons = Pokemon.objects.all().order_by("pokemonId")
    paginator = Paginator(pokemons, items_per_page)

    try:
        paginated_pokemons = paginator.page(page_number)
    except EmptyPage:
        paginated_pokemons = paginator.page(paginator.num_pages)

    pokemon_data = get_pokemon_info(paginated_pokemons)
    return JsonResponse({"pokemon_data": pokemon_data, "num_pages": paginator.num_pages})

def get_pokemon_data_by_id(request, pokemon_id):
    try:
        pokemon = Pokemon.objects.get(pokemonId=pokemon_id)
        pokemon_data = get_single_pokemon_info(pokemon)
        return JsonResponse({"pokemon_data": pokemon_data})
    except Pokemon.DoesNotExist:
        return JsonResponse({"error": "Pokemon not found"}, status=404)




'''######## used for debug purposes

# def get_all_pokemon_data(request):
#     pokemon_data = []
#     pokemons = Pokemon.objects.all()

#     for pokemon in pokemons:
#         pokemon_info = {
#             "id": pokemon.pokemonId,
#             "name": pokemon.name,
#             "height": pokemon.height,
#             "weight": pokemon.weight,
#             "types": [pokemon_type.type_name for pokemon_type in pokemon.types.all()],
#         }

#         pokemon_data.append(pokemon_info)
#     print(pokemon_data.__len__())
#     resp = JsonResponse({"pokemon_data": pokemon_data})
#     return resp
'''
