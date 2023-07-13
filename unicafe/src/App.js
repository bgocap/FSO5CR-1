import { useState } from 'react'

const Button = ({ text,handleClick }) =>
(<button onClick={handleClick} >{text}</button>)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll]=useState(0)
  const [score,setScore]=useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
      handleClick={()=>{setGood(good+1);setAll(all+1);setScore(score+1)}}
      text='Good' />
      <Button
      handleClick={()=>{setNeutral(neutral+1);setAll(all+1);setScore(score+0)}}
      text='Neutral' />
      <Button 
      handleClick={()=>{setBad(bad+1);setAll(all+1);setScore(score-1)}}
      text='Bad' />
      <h1>statistics</h1>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all: {all}</div>
      <div>average: {score/all}</div>
      <div>positive: {(100*good)/all}%</div>
    </div>
  )
}

export default App
