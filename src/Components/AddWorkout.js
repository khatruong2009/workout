import React, { useState } from 'react'

export const workouts = [];

const AddWorkout = () => {

  const [workoutName, setWorkoutName] = useState("");
  const [workoutWeight, setWorkoutWeight] = useState("");
  const [workoutReps, setWorkoutReps] = useState("");

  const [test, setTest] = useState("yo");

  const handleClick = () => {
    workouts.push(workoutName, workoutWeight, workoutReps);
    console.log(workouts);
    setTest("Headass");
    console.log(displayWorkouts);
  }

  const displayWorkouts = workouts.map((workout) => 
  <li>{workout}</li>
  )

  return (
    <div>

      <div className="workout-input">

        <label>Workout Name:</label>
        <input
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <label>Weight:</label>
        <input 
          value={workoutWeight}
          onChange={(e) => setWorkoutWeight(e.target.value)}
        />
        <label>Reps:</label>
        <input 
          value={workoutReps}
          onChange={(e) => setWorkoutReps(e.target.value)}
        />

      </div>

      <button onClick={handleClick}>Add Workout</button>

      <p>{test}</p>
      <p>Workout: {workouts[0]} Weight: {workouts[1]} Reps: {workouts[2]}</p>
      <ul>
        {displayWorkouts}
      </ul>

    </div>
  )
}

export default AddWorkout;