import React, { useState } from 'react';
import { Box } from '@mui/material'
import { Excercises, HeroBanner, SearchExercises } from '../components';

export const Home = () => {    

    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    console.log(bodyPart)
  
    return (
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Excercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      </Box>
    )
}
