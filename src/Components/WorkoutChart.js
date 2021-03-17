import {React} from 'react';
 
const WorkoutChart = (props) => {

  const list = props.workouts.map((workout, index) => {
    return (
      <li key={index}>{workout}</li>
    )}
  )
  
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}

export default WorkoutChart;