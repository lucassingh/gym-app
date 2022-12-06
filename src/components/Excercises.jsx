import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchData, baseUrl, exerciseOptions } from '../utils/fetchData';
import { ExerciseCard } from '../components';

export const Excercises = ({ exercises, setExercises, bodyPart }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    console.log({ exercises })

    useEffect(() => {
        const fetchExercicesData = async( ) => {

            let exercicesData = [];

            if(bodyPart === 'all') {
                exercicesData = await fetchData(`${baseUrl}`, exerciseOptions);
            } else {
                exercicesData = await fetchData(`${baseUrl}/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercicesData)
        }

        fetchExercicesData()
        // eslint-disable-next-line
    }, [bodyPart])


    return (
        <Box
            sx={{ mt: { lg: '110px' } }}
            mt='50px'
            p='20px'
        >
            <Typography variant='h3' mb='46px'>
                Showing Results
            </Typography>
            <Stack
                direction='row'
                sx={{ gap: { lg: '110px', xs: '50px' } }}
                flexWrap='wrap'
                justifyContent='center'
            >
                {
                    currentExercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    ))
                }
            </Stack>
            <Stack
                sx={{ mt: { lg: '114px', xs: '70px' } }}
                alignItems="center"
            >
                {
                    exercises.length > 9 && (
                        <Pagination
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    )
                }
            </Stack>
        </Box>
    )
}
