
const Header = (props) => {
  return(
   <h1>{props.coursename}</h1>
  )
}

const Content = (props) => {
  console.log(props.parts)
  const [first,second,third] = props.parts
  return(
    <div>
      <p>Part {first.name} {first.exercises}</p>
      <p>Part {second.name} {second.exercises}</p>
      <p>Part {third.name} {third.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  //console.log(props)
  const [first,second,third] = props.parts
  return(
    <p>Number of exercises: {first.exercises+second.exercises+third.exercises}</p>
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
      <Header coursename={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )

}


export default App;
