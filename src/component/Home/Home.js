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
                <Profile time={time} ></Profile>

            </div>
            <div className='questions'>
                <h1>How react works?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                <h1>Difference between props and state?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                <h1>What is the use of useeffect without data load?</h1>
                <p> <li>Running once on mount: fetch API data</li>
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li></p>
            </div>
        </div>
    );
};

export default Home;