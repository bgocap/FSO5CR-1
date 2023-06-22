
const Header = (props) => {
  //console.log(props)
  return(
   <h1>{props.course}</h1>
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

  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )

}


export default App;
