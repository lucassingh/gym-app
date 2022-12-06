import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, baseUrl, youTubeSearchUrl, exerciseOptions, youtubeOptions } from '../utils/fetchData';
import { Detail, ExerciseVideos, SimiliarExercises } from '../components';

export const ExcerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});

    const [exerciseVideos, setExerciseVideos] = useState([]);

    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

    const [equipmentExercises, setEquipmentExercises] = useState([]);

    const { id } = useParams();

    useEffect(() => {

        const fetchExercisesData = async () => {
           
            const exerciseDetailData = await fetchData(`${baseUrl}/exercise/${id}`, exerciseOptions)
        
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}exercise`, youtubeOptions)
        
            setExerciseVideos(exerciseVideosData.contents)

            const targetMuscleExerciseData = await fetchData(`${baseUrl}/target/${exerciseDetailData.target}`, exerciseOptions)

            setTargetMuscleExercises(targetMuscleExerciseData)

            const equipmentExerciseData = await fetchData(`${baseUrl}/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
        
            setEquipmentExercises(equipmentExerciseData)
        }

        fetchExercisesData();
        
    }, [id])

    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail exerciseDetail={exerciseDetail} />

            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

            <SimiliarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}
