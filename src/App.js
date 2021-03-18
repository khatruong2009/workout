import React, { useState } from 'react'
import './App.css';
import AddWorkout from "./Components/AddWorkout";
import WorkoutChart from "./Components/WorkoutChart";

function App() {

  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (name, weight, reps) => {
    setWorkouts(workout => [...workout, {name, weight, reps}]);
    console.log(workouts);
  }

  return (
    <div className="App">
      <h1>Workout</h1>

      <AddWorkout 
        addWorkout = {addWorkout}
      />

      <WorkoutChart 
        workouts = {workouts}
      />
    </div>
  );
}

export default App;
