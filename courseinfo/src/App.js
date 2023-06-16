
const Header = (props) => {
  console.log(props)
  return(
   <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>Part {props.part} {props.exercises}</p>
      <p>Part {props.part} {props.exercises}</p>
      <p>Part {props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p>Number of exercises: {props.total}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )

}


export default App;
