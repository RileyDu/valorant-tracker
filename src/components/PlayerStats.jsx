import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { getPlayerData } from '../services/api';

const PlayerStats = () => {
  const [playerName, setPlayerName] = useState('');
  const [region, setRegion] = useState('na'); // Default region
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');

  const handleFetchData = async () => {
    setError('');
    const data = await getPlayerData(playerName, region);
    if (data) {
      setPlayerData(data);
    } else {
      setError('Failed to fetch player data');
    }
  };

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <Input
        placeholder="Region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <Button onClick={handleFetchData}>Get Player Data</Button>
      {error && <Text color="red.500">{error}</Text>}
      {playerData && (
        <Box>
          {/* Render player data here */}
          <Text>Player Data:</Text>
          <pre>{JSON.stringify(playerData, null, 2)}</pre>
        </Box>
      )}
    </VStack>
  );
};

export default PlayerStats;
