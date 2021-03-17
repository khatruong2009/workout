import React from 'react'

const AddWorkout = () => {

  const handleClick = () => {
    console.log("click");
  }

  return (
    <div>

      <div className="workout-input">

        <label>Workout Name:</label>
        <input></input>
        <label>Weight:</label>
        <input></input>
        <label>Reps:</label>
        <input></input>

      </div>

      <button onClick={handleClick}>Add Workout</button>

    </div>
  )
}

export default AddWorkout;