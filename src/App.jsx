const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    <p>{props.part1} {props.exercises1} </p>
    <p>{props.part2} {props.exercises2} </p>
    <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = ({total}) => {
  return (
  <div>
  <p>Number of exercises {total}</p>
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

 
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
