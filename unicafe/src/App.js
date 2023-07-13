import { useState } from 'react'

// a proper place to define a component
const Statistics = ({Good,Neutral,Bad,All,Average,Positive}) => {
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
        <div>good: {Good}</div>
        <div>neutral: {Neutral}</div>
        <div>bad: {Bad}</div>
        <div>all:{All}</div>
        <div>average: {Average}</div>
        <div>positive: {Positive} %</div>
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

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood} >Good</button>
      <button onClick={handleNeutral} >Neutral</button>
      <button onClick={handleBad} >Bad</button>
      < Statistics 
      Good={good} Neutral={neutral} Bad={bad} All={all} 
      Average={score/all} 
      Positive={(100*good)/all} 
      />
    </div>
  )
}

export default App
