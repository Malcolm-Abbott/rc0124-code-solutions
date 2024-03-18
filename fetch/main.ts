async function getUserInfo(): Promise<void> {
  try {
    const response: Response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    const data: Response = await response.json();
    console.log('data:', data);
  } catch (error) {
    console.error(error);
  }
}

async function getPokemon(): Promise<void> {
  try {
    const response: Response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/1'
    );
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    const pokemon: Response = await response.json();
    console.log('pokemon:', pokemon);
  } catch (error) {
    console.error(error);
  }
}

getUserInfo();

getPokemon();
