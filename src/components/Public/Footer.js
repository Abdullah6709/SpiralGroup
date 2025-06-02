import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Autofooter from '../../assets/images/Autofooter.jpg'; // Adjust the path accordingly

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: 'auto',
                backgroundImage: `url(${Autofooter})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }}
            />
            <Grid container sx={{ m: 2, p: "40px 20px", zIndex: 2 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h4" color="white" sx={{ mb: 3 }}>
                        Automobile
                    </Typography>
                    <Stack direction={'row'} spacing={3} sx={{ mb: 5 }}>
                        <FacebookIcon sx={{ color: 'white' }} />
                        <TwitterIcon sx={{ color: 'white' }} />
                        <YouTubeIcon sx={{ color: 'white' }} />
                        <InstagramIcon sx={{ color: 'white' }} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textDecoration: 'underline', mb: 2, textDecorationThickness: '2px', textUnderlineOffset: '5px' }}>
                        <Typography variant="h4" color="white">
                            Important Links
                        </Typography>
                    </Box>
                    {[...Array(5)].map((_, index) => (
                        <Typography key={index} variant="h5" sx={{ mb: 2 }} color="white">
                            Disclaimer
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textDecoration: 'underline', mb: 2, textDecorationThickness: '2px', textUnderlineOffset: '5px' }}>
                        <Typography variant="h4" color="white">
                            Another Section
                        </Typography>
                    </Box>
                    {[...Array(5)].map((_, index) => (
                        <Typography key={index} variant="h5" sx={{ mb: 2 }} color="white">
                            Info Item
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textDecoration: 'underline', mb: 2, textDecorationThickness: '2px', textUnderlineOffset: '5px' }}>
                        <Typography variant="h4" color="white">
                            Contact Us
                        </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }} color="white">
                        Address Line 1
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2 }} color="white">
                        Address Line 2
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2 }} color="white">
                        Phone: +123456789
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
