const apiKey = 'YOUR_API_KEY';
const baseUrl = 'https://api.riotgames.com/val';

export const getPlayerData = async (playerName, region) => {
  try {
    const response = await fetch(`${baseUrl}/matches/${region}/by-puuid/${playerName}?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player data:', error);
    return null;
  }
};
