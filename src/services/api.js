const apiKey = import.meta.env.VITE_VALORANT_API_KEY;
const baseUrl = 'https://na.api.riotgames.com/val';
export const getPlayerData = async (playerName, region) => {
  const encodedPlayerName = encodeURIComponent(playerName);
  const url = `${baseUrl}/v1/matches/${region}/by-puuid/${encodedPlayerName}?api_key=${apiKey}`;
  console.log(encodedPlayerName)
  console.log(url);
  try {
    const response = await fetch(url);
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
