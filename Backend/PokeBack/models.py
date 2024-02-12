from django.db import models

# Create your models here.

class Pokemon(models.Model):
    pokemonId = models.IntegerField(default=0)
    name = models.CharField(max_length=255)
    height = models.IntegerField(default=0)
    weight = models.IntegerField(default=0)
    base_experience = models.IntegerField(default=0)
    # Add more fields as needed

    def __str__(self):
        return self.name

class PokemonType(models.Model):
    pokemon = models.ForeignKey(Pokemon, related_name='types', on_delete=models.CASCADE)
    type_name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.pokemon.pokemonId} - {self.type_name}"

class PokemonAbility(models.Model):
    pokemon = models.ForeignKey(Pokemon, related_name='abilities', on_delete=models.CASCADE)
    ability_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.pokemon.pokemonId} - {self.ability_name}"

class PokemonStat(models.Model):
    pokemon = models.ForeignKey(Pokemon, related_name='stats', on_delete=models.CASCADE)
    stat_name = models.CharField(max_length=50)
    base_stat = models.IntegerField()

    def __str__(self):
        return f"{self.pokemon.pokemonId} - {self.stat_name}: {self.base_stat}"
