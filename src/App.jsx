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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
