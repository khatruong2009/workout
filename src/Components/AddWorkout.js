import React, { useState } from 'react'

const AddWorkout = (props) => {

  const [workoutName, setWorkoutName] = useState("");
  const [workoutWeight, setWorkoutWeight] = useState("");
  const [workoutReps, setWorkoutReps] = useState("");

  const handleClick = () => {
    props.addWorkout(workoutName, workoutWeight, workoutReps);
    setWorkoutName("");
    setWorkoutWeight("");
    setWorkoutReps("");
  }

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

    </div>
  )
}

export default AddWorkout;