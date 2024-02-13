from django.test import TestCase
from django.urls import reverse
from .models import Pokemon
from .views import get_paginated_pokemon_data, get_pokemon_data_by_id


class PokemonViewsTestCase(TestCase):
    def setUp(self):
        # Create some test data
        self.pokemon1 = Pokemon.objects.create(pokemonId=1, name="Bulbasaur")

    def test_get_paginated_pokemon_data(self):
        # Test paginated data retrieval
        response = self.client.get(reverse('get_paginated_pokemon_data'))
        self.assertEqual(response.status_code, 200)
        self.assertIn('pokemon_data', response.json())
        self.assertIn('num_pages', response.json())

    def test_get_pokemon_data_by_id(self):
        # Test retrieval of specific pokemon data by ID
        response = self.client.get(reverse('get_pokemon_data_by_id', kwargs={'pokemon_id': self.pokemon1.pokemonId}))
        self.assertEqual(response.status_code, 200)
        self.assertIn('pokemon_data', response.json())

    def test_get_pokemon_data_by_invalid_id(self):
        # Test retrieval of non-existent pokemon data
        response = self.client.get(reverse('get_pokemon_data_by_id', kwargs={'pokemon_id': 9999}))
        self.assertEqual(response.status_code, 404)
        self.assertIn('error', response.json())
