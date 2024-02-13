# PokeProjet

Ce petit projet combine Django en Backend et React en Frontend.

## Environnement de développement

J'ai travaillé avec les versions suivantes :

- Python 3.10.12
- npm 10.2.4

(Si la version installée sur votre machine génère des erreurs, vous pouvez vous référer à ces versions)

## Installation

Pour installer les dépendances :

### Backend :

Naviguez vers `./BackEnd`
Exécutez `pip install -r requirements.txt`

### Frontend :

Naviguez vers `./PokeFront/`
Exécutez `npm install`

## Exécution

Pour exécuter le projet :

### Backend :

Dans `./BackEnd` , lancez `python manage.py runserver`

### Frontend :

Dans `./PokeFront/` , exécutez `npm run dev`

### Détails de l'API

Voici les endpoints disponibles :

### Backend :


`GET` : `pokemons/<int:pokemon_id>` : pour obtenir les données d'un Pokémon par son identifiant.
`GET` : `pokemons` : pour obtenir les données paginées des Pokémon.

### Frontend :

`GET` : `/` : pour obtenir les pokémons 
`GET` : `/:id` : pour obtenir les détails d'un pokémon


## Blocages et Solutions

### Côté Backend

Le développement du Backend a été plus rapide que celui du Frontend, surtout en ce qui concerne la résolution des erreurs. J'ai consulté la documentation et examiné quelques projets pour comprendre le fonctionnement de Django. Cependant, j'ai une expérience passée avec React, datant d'il y a environ trois ans.

pour une raison que j'ignore 
le `test_get_pokemon_data_by_id` renvoie
`ERROR: PokeBack.models.Pokemon.MultipleObjectsReturned`

Je me suis heurté à des problèmes de CORS, notamment en réalisant que les endpoints /pokemons/ et /pokemons étaient différents, ce qui m'a pris un certain temps pour résoudre.

### Côté Frontend
J'ai bien évidemment suivi un cours de React pour m'inspirer. Vers la fin, je n'ai pas réussi à "cacher" les résultats de /pokemons. C'est là que j'ai découvert React-Query, une bibliothèque très puissante.

J'ai également rencontré des problèmes avec le Frontend en général.

### ToDo
Implémenter un filtre pour les types de Pokémon, à la fois côté Frontend et Backend.
Frontend
Remplacer ReactPaginate car il présente des bugs dans certains scénarios.
Trouver une solution pour "dé-cacher" le résultat de /id dans le Frontend. Avec une mauvaise connexion, les propriétés de l'ancien Pokémon restent affichées en naviguant entre les identifiants.
Améliorer le design.
