import requests
from .models import *

def get_pokemon_info(pokemons):
    return [
        {
            "id": pokemon.pokemonId,
            "name": pokemon.name,
            "height": pokemon.height,
            "weight": pokemon.weight,
            "types": [ptype.type_name for ptype in pokemon.types.all()],
        }
        for pokemon in pokemons
    ]

def get_single_pokemon_info(pokemon):
    return {
        "id": pokemon.pokemonId,
        "name": pokemon.name,
        "height": pokemon.height,
        "weight": pokemon.weight,
        "base_experience": pokemon.base_experience,
        "types": [ptype.type_name for ptype in pokemon.types.all()],
        "stats": [{"name": pstat.stat_name, "base_stat": pstat.base_stat} for pstat in pokemon.stats.all()],
        "abilities": [pability.ability_name for pability in pokemon.abilities.all()],
    }

def PopulateDB():
    if Pokemon.objects.exists():
        print("DB is populated")
        return 0
    else:
        print("Data Being Fetched")
        response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=1302")
        if response.status_code == 200:
            pokemon_data = response.json()
            for pokemon_entry in pokemon_data["results"]:
                pokemon_info_response = requests.get(pokemon_entry["url"])
                pokemon_info = pokemon_info_response.json()
                

                if (Pokemon.objects.filter(pokemonId=pokemon_info["id"]).exists()):
                        continue
                else:
                    # print(pokemon_info["id"])
                    pokemon_instance = Pokemon.objects.create(
                        pokemonId=pokemon_info["id"],
                        name=pokemon_info["name"],
                        height=pokemon_info["height"],
                        weight=pokemon_info["weight"],
                    )
                    if pokemon_info["base_experience"] is None:
                        pokemon_instance.base_experience = 0
                    else:
                        pokemon_instance.base_experience = pokemon_info[
                            "base_experience"
                        ]
                    pokemon_instance.save()

                    for type_data in pokemon_info["types"]:
                        type_name = type_data["type"]["name"]
                        existing_type = PokemonType.objects.filter(
                            pokemon=pokemon_instance, type_name=type_name
                        ).first()
                        if not existing_type:
                            PokemonType.objects.create(
                                pokemon=pokemon_instance, type_name=type_name
                            )

                    for ability_data in pokemon_info["abilities"]:
                        ability_name = ability_data["ability"]["name"]
                        existing_ability = PokemonAbility.objects.filter(
                            pokemon=pokemon_instance, ability_name=ability_name
                        ).first()
                        if not existing_ability:
                            PokemonAbility.objects.create(
                                pokemon=pokemon_instance, ability_name=ability_name
                            )

                    for stat_data in pokemon_info["stats"]:
                        stat_name = stat_data["stat"]["name"]
                        base_stat = stat_data["base_stat"]
                        existing_stat = PokemonStat.objects.filter(
                            pokemon=pokemon_instance, stat_name=stat_name
                        ).first()
                        if existing_stat:
                            existing_stat.base_stat = base_stat
                            existing_stat.save()
                        else:
                            PokemonStat.objects.create(
                                pokemon=pokemon_instance,
                                stat_name=stat_name,
                                base_stat=base_stat,
                            )

    return 1



