import { Container, Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Player from './Player.js';


const CricketPlayer = () => {
    const [players, setPlayers] = useState([]);
    const [noOfPlayer, setNoOfPlayer] = useState(3);

    useEffect(() => {
        fetch('https://radiant-reef-83234.herokuapp.com/api/players')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    const slice = players.slice(0, noOfPlayer);

    const handleLoadMore = () => {
        setNoOfPlayer(noOfPlayer + 3);
    }
    
    return (
        <div>
            <h3 style={{marginTop: '80px', borderBottom: '0.5px solid gray', color: '#FFB038', paddingBottom: '5px'}}>Top Cricket Player</h3>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {
                slice.map((player, idx) => <Player player={player} key={idx}></Player>)
            }
            </Grid>
            </Container>
            <div style={{textAlign: 'center'}}>
                <Button variant="contained"  onClick={() => handleLoadMore()}>Load More</Button>
            </div>
        </div>
    );
};

export default CricketPlayer;