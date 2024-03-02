const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

let teamCounter = 1; // Variável contadora para os times
const teamsDatabase = {};

app.post('/api/teams', async (req, res) => {
  try {
    const { user, team } = req.body;

    if (!team || !user) {
      return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const pokemonTeam = await montarTime(team);

    // Utilizando a variável contadora como identificador do time
    const teamId = teamCounter++;

    teamsDatabase[teamId] = { owner: user, pokemons: pokemonTeam };

    return res.json({ message: 'Time gerado com sucesso', teamId, pokemons: pokemonTeam, owner: user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


// Rota para buscar todos os times registrados
app.get('/api/teams', (req, res) => {
  return res.json(teamsDatabase);
});

// Rota para buscar um time registrado por usuário
app.get('/api/teams/:username', (req, res) => {
  const { username } = req.params;

  const teamByUser = Object.values(teamsDatabase).find(team => team.owner === username);

  if (teamByUser) {
    return res.json(teamByUser);
  } else {
    return res.status(404).json({ error: 'Time não encontrado para o usuário fornecido' });
  }
});

async function montarTime(pokemons) {
  const team = await Promise.all(
    pokemons.map(async (pokemon) => {
      const pokemonData = await obterPokemon(pokemon);

      if (!pokemonData) {
        throw new Error(`Pokémon ${pokemon} não encontrado`);
      }

      return {
        id: pokemonData.id,
        name: pokemonData.name,
        weight: pokemonData.weight,
        height: pokemonData.height,
      };
    })
  );

  return team;
}

async function obterPokemon(pokemonName) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`Pokémon ${pokemonName} não encontrado na pokeAPI`);
      return null;
    }

    throw error;
  }
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
