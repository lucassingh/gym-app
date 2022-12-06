import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroImg from '../assets/images/banner.png'

export const HeroBanner = () => {
    return (
        <Box sx={{
            mt:{lg:'212px', xs:'70px'}, 
            ml:{sm:'50px'}
        }} position='relative' p='20px'>
            <Typography 
                color='#FF2625'
                fontWeight='600'
                fontSize='24px'
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight='700'
                mb='23px'
                mt='30px'
                sx={{
                    fontSize:{lg:'48px', xs:'44px'}
                }}
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography
                lineHeight='35px'
                fontSize='19px'
                mb={4}
            >
                Check out the most effective exercises
            </Typography>
            <Button 
                variant='contained'
                color='error'
                href="#exercises"
                sx={{backgroundColor: '#FF2625'}}
                padding='10px'
            >
                Explore Excercises
            </Button>
            <Typography
                fontWeight={600}
                color='#FF2625'
                fontSize='200px'
                sx={{
                    opacity: 0.1,
                    display: {lg:'block', xs: 'none'}
                }}                
            >
                Exercises
            </Typography>
            <img 
                src={HeroImg} 
                alt='banner'
                className='hero-banner-img' 
            />
        </Box>
    )
}
