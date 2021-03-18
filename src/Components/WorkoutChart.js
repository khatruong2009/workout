import {React, useEffect} from 'react';
 
const WorkoutChart = (props) => {

  const list = props.workouts.map((workout, index) => {
    return (
      <tr>
        <td>{workout.name}</td>
        <td>{workout.weight}</td>
        <td>{workout.reps}</td>
      </tr>
    )
  })
  
  return (
    <div>
      <table style={{width: "100%"}}>
        <tr>
          <th>Workout</th>
          <th>Weight</th>
          <th>Reps</th>
        </tr>
        {list}
      </table>
    </div>
  )
}

export default WorkoutChart;