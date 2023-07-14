import { useState } from 'react'

const Button = ({ text,handleClick }) => (<button onClick={handleClick} >{text}</button>)

const Statistics = ({Good,Neutral,Bad,All,Average,Positive}) => {
  const StatisticLine =({text,value})=>(<tr><td>{text}:</td><td>{value}</td></tr>)
  if(All===0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }else{
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value ={Good} />
            <StatisticLine text="neutral" value ={Neutral} />
            <StatisticLine text="bad" value ={Bad} />
            <StatisticLine text="all" value ={All} />
            <StatisticLine text="average" value ={Average} />
            <StatisticLine text="positive" value ={Positive+'%'} />
          </tbody>
        </table>
      </div>
    )
  }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0)
  const [score,setScore]=useState(0)

  const handleGood = () =>{setGood(good+1);setAll(all+1);setScore(score+1)}
  const handleNeutral = () => {setNeutral(neutral+1);setAll(all+1);setScore(score+0)}
  const handleBad = () =>{setBad(bad+1);setAll(all+1);setScore(score-1)}
  const avg = score/all
  const positive =  (100*good)/all

  return (
    <div>

      <h1>give feedback</h1>

      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>

      < Statistics 
      Good={good} Neutral={neutral} Bad={bad} All={all}
      Score={score} Average={avg} Positive={positive}
      />

    </div>
  )
}

export default App
