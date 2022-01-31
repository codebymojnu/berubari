import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


const Player = (props) => {
    const { playerImgLink, phone, nickname } = props.player;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    image={playerImgLink}
                    alt={nickname}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {nickname}
                    </Typography>
                    <Typography>
                        Mobile Number: {phone}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Player;