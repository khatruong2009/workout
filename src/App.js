import './App.css';
import AddWorkout from "./Components/AddWorkout";
import WorkoutChart from "./Components/WorkoutChart";

function App() {
  return (
    <div className="App">
      <h1>Workout</h1>
      <AddWorkout />
      <WorkoutChart />
    </div>
  );
}

export default App;
