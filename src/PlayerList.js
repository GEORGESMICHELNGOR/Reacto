import React from 'react';
import Player from './Player';
import Players from './Players';

const PlayerList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Players.map((Players, index) => (
        <Player key={index} {...Player} />
   ))}

  </div>
  
   );
};  

export default PlayerList;
