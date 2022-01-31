import { Box, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TypewriterComponent from 'typewriter-effect';
import { useSpring, animated } from 'react-spring';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    border: 'none',
    color: theme.palette.text.secondary,
}));


const ChairmenMessage = () => {
    const [flip, set] = useState(false);
    const styles = useSpring({
        from: {
            opacity: 0
        },
        reset: true,
        reverse: flip,
        delay: 400,
        onRest: () => set(!flip),
        to: {
            opacity: 1
        }
    })
    return (
        <Box sx={{ flexGrow: 1, marginTop: '80px' }}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16}>
                    <Item style={{ textAlign: 'left'}}>
                        <animated.div style={styles}><h3 style={{marginBottom: '30px', borderBottom: '0.5px solid gray', display: 'inline-block'}}>Message from Chairman</h3></animated.div>
                        <p>৪ নং বেরুবাড়ী ইউনিয়ন, বাংলাদেশের কুড়িগ্রাম জেলার নাগেশ্বরী উপজেলার একটি ইউনিয়ন পরিষদ।</p>
                        <p>আমরা স্বপ্ন দেখি- ক্ষুধা ও দরিদ্র মুক্ত, আত্মনির্ভরশীল, শতভাগ মেধাবী প্রজন্মধারী এবং মানবিকতায় অনন্য দৃষ্টান্ত স্থাপনকারী একটি ইউনিয়ন। বই পড়া ছাড়া আমাদের এই স্বপ্ন বাস্তবায়ন সম্ভব নয়।
                            প্রযুক্তির এই ক্রমবর্ধমান সময়ও আমরা অনেক পিছিয়ে থাকি। কিন্তু এই গ্রাম বাদ দিয়ে সোনার বাংলা গড়া সম্ভব না।</p>
                        <p>ওয়েবসাইট তৈরির উদ্যোগ গ্রহণ করে বেরুবাড়ী ইউনিয়নকে একধাপ এগিয়ে নেয়ার চেষ্টা।
                            আমাদের এই চলার পথে আপনাদের সবার সহযোগিতা সবসময় পাবো, এই আশায় শুরু করলাম।</p>
                        <div style={{ textAlign: 'right', marginTop: '40px' }}> 
                            <TypewriterComponent
                                options={{
                                    strings: ['জনাব মোঃ সোলায়মান আলী'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            <p>চেয়ারম্যান,
                                <br />৪নং বেরুবাড়ী ইউনিয়ন পরিষদ</p>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChairmenMessage;