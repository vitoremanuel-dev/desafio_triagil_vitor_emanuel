
# 💻Desafio Triágil - Pokeapi.co
Resolução do desafio de desenvolvimento API a partir do pokeapi.co para a vaga de estágio na equipe Triágil.


### POST /api/teams
- Permite aos usuários enviar uma solicitação para montar um time de Pokémon;
- Os parâmetros esperados no corpo da solicitação são user (nome do usuário) e team (lista de nomes de Pokémon).

Exemplo:
```
{
  "user": "sleao",
  "team": [
    "blastoise",
    "pikachu",
    "charizard",
    "venusaur",
    "lapras",
    "dragonite"
  ]
}
```
### GET /api/teams
- Retorna todos os times de Pokémon registrados até o momento;
- A resposta é um objeto JSON contendo informações de todos os times presentes.
Exemplo:
```
{
    "1": {
        "owner": "sleao",
        "pokemons": [
            {
                "id": 9,
                "name": "blastoise",
                "weight": 855,
                "height": 16
            },
            {
                "id": 25,
                "name": "pikachu",
                "weight": 60,
                "height": 4
            },
            {
                "id": 6,
                "name": "charizard",
                "weight": 905,
                "height": 17
            },
            {
                "id": 3,
                "name": "venusaur",
                "weight": 1000,
                "height": 20
            },
            {
                "id": 131,
                "name": "lapras",
                "weight": 2200,
                "height": 25
            },
            {
                "id": 149,
                "name": "dragonite",
                "weight": 2100,
                "height": 22
            }
        ]
    }
}
```
### GET /api/teams/:username
- Permite aos usuários buscar um time de Pokémon específico com base no nome do proprietário (username).
- Se um time é encontrado, ele é retornado como resposta; caso contrário, retorna um erro 404.
```
{
    "owner": "sleao",
    "pokemons": [
        {
            "id": 9,
            "name": "blastoise",
            "weight": 855,
            "height": 16
        },
        {
            "id": 25,
            "name": "pikachu",
            "weight": 60,
            "height": 4
        },
        {
            "id": 6,
            "name": "charizard",
            "weight": 905,
            "height": 17
        },
        {
            "id": 3,
            "name": "venusaur",
            "weight": 1000,
            "height": 20
        },
        {
            "id": 131,
            "name": "lapras",
            "weight": 2200,
            "height": 25
        },
        {
            "id": 149,
            "name": "dragonite",
            "weight": 2100,
            "height": 22
        }
    ]
}
```
## 🟢Instalação
Com o Docker devidamente instalado e funcionando, abra um terminal na raiz do projeto e execute os seguintes comandos:
```
docker-compose build
docker-compose up

```
A aplicação estará disponível em http://localhost:3000
## 🟢Stack utilizada

**Back-end:** Node, Express


