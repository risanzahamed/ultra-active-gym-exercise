import React, { useEffect, useState } from 'react';
import Exercise from '../ExerciseList/Exercise';
import Profile from '../User Profile/Profile';
import "./Home.css"

const Home = () => {
    const [exercise, setExercise] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
        fetch("exercise.json")
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])
    const clickExerciseTime = (exercise) => {
        console.log(exercise);
        const newTime = [...time, exercise];
        setTime(newTime)
    }
    return (
        <div>
            <div className='text-wrapper'>
                <h1 className='hero-text'>Gold Exercise Club</h1>
                <h3 className='select-exercise'>Select today's exercise: {exercise.length}</h3>
            </div>

            <div className='home-conatainer'>


                <div className="exercise-details">

                    {
                        exercise.map(exercise => <Exercise
                            exercise={exercise}
                            clickExerciseTime={clickExerciseTime}
                        ></Exercise>)
                    }
                </div>
                <Profile time={time}></Profile>
            </div>

        </div>
    );
};

export default Home;