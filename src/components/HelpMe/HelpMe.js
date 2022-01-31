import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Card, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import SSCaPlusStudent from '../SSCaPlusStudent/SSCaPlusStudent';

const HelpMe = () => {
    const [flip, set] = useState(false);
    const styles = useSpring({
        from: {
            opacity: 0
        },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip),
        to: {
            opacity: 1
        }
    })
    return (
        <Grid container spacing={4} sx={{marginTop: '80px' }}>
            <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ minWidth: 275}}>
    <List sx={{ maxWidth: 360, textAlign: 'center'}}>
    <animated.div style={styles}><h3 style={{ marginTop: '20px' }}>Help Me !!</h3></animated.div>
        <p>তথ্য দাও, পুরুস্কার জিতো!</p>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="1" src="/static/images/avatar/1.jpg" style={{backgroundColor: 'black'}}/>
        </ListItemAvatar>
        <ListItemText
          primary="বেরুবাড়ী ইউনিয়নের SSC ও HSC তে A+ পাওয়া শিক্ষার্থীদের তথ্য" 
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                লাগবে
              </Typography>
              {" — নাম, মোবাইল নাম্বার, ও ছবি"}  
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="2" src="/static/images/avatar/2.jpg" style={{backgroundColor: 'black'}}/>
        </ListItemAvatar>
        <ListItemText
          primary="বেরুবাড়ী ইউনিয়নের সকল ক্রিকেট ও ফুটবল খেলোয়াড়ের তথ্য" 
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                লাগবে
              </Typography>
              {" — নাম, মোবাইল নাম্বার, গ্রাম, ছবি, খেলোয়াড়ের রোল"}  
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="3" src="/static/images/avatar/3.jpg" style={{backgroundColor: 'black'}}/>
        </ListItemAvatar>
        <ListItemText
          primary="বেরুবাড়ী ইউনিয়নের সকল স্কুলের সম্মানিত স্যারদের তথ্য" 
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                লাগবে
              </Typography>
              {' — স্যারের ছবি, নাম, বিষয়, স্কুলের নাম'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={8}>
          <SSCaPlusStudent/>
          <p>তুমি গল্প, কবিতা, জোকস লিখে এবং বেরুবাড়ী ইউনিয়নের প্রাকৃতিক দৃশ্যের ছবি পাঠিয়ে গিফট পেতে পারো।</p>  
          তোমার লেখা পাঠাও <span style={{color: '#FFB038'}}><FontAwesomeIcon icon={faEnvelope}/> mojnu.cse.pust@gmail.com</span> ইমেইলে "অথবা" <a href="https://facebook.com/codermojnu"><FontAwesomeIcon icon={faFacebook}/></a> মেসেঞ্জারে এবং তোমার gift বুঝে নাও! 
    </Grid>  
    </Grid>
    );
};

export default HelpMe;