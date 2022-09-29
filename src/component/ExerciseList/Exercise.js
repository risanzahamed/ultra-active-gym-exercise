import React from 'react';
import "./Exercise.css"

const Exercise = (props) => {
    // console.log(props.exercise)
    const {img , name, description, age, time} = props.exercise;
    
    return (
        <div className='exercise-card'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>For Age : <span className='bold-text'>{age}</span></h3>
            <h3>Time required : <span className='bold-text'>{time}s</span></h3>
            <button onClick={()=>props.clickExerciseTime(props.exercise)}>Add to list</button>
        </div>
    );
};

export default Exercise;