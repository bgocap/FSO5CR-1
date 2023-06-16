
const Header = (props) => {
  console.log(props)
  return(
   <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p> &bull; Part:{props.part1} - Exercises:{props.exercises1}</p>
      <p> &bull; Part:{props.part2} - Exercises:{props.exercises2}</p>
      <p> &bull; Part:{props.part3} - Exercises:{props.exercises3}</p>
    </div>
  )
}

/*
const Content = (props) => {
  console.log
  return(
    <div>
      <p>Part {props.part} {props.exercises}</p>
      <p>Part {props.part} {props.exercises}</p>
      <p>Part {props.part} {props.exercises}</p>
    </div>
  )
}
*/

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
  /*
  Array Op1
  const parts = ['Fundamentals of React','Using props to pass data','State of a component']
  const exercises=[10,7,14]
  */

  /*
  Array Op2
  const content = [{part:'Fundamentals of React', exercises:10},{part:'Using props to pass data', exercises:7},{part:'State of a component', exercises:14}]
  */

  return (
    <div>
      <Header course={course} />
      <Content
              part1={part1} exercises1={exercises1}
              part2={part2} exercises2={exercises2}
              part3={part3} exercises3={exercises3} 
      />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )

}


export default App;
