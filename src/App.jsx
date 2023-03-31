import './App.css'
import Button from './components/Button'
import Message from './components/Message'
import phrases from './utils/phrases.json'
import getMessageArray from './utils/getRandomArray'
import { useState } from 'react'
import Fountain from './components/Fountain'

const img = [1, 2, 3, 4]

function App() {

  const [messageRandom, setmessageRandom] = useState(getMessageArray(phrases))
  const [numberImg, setnumberImg] = useState(getMessageArray(img))

console.log(messageRandom)

const appStyle = {
  backgroundImage: `url('/typesOfFunds/fondo${numberImg}.jpeg')`
}
const [fountain, setfountain] = useState(getMessageArray(phrases))
const [autores, setDescricion] = useState(getMessageArray(phrases))

  return (
    <div style={appStyle} className="App">
      <h1 className='App__title'>Galleta de la fortuna</h1>
      <Button  
      setmessageRandom={setmessageRandom} 
      setnumberImg={setnumberImg}/>
      <Message  messageRandom= {messageRandom} />
      <Fountain fountain={fountain}/>
    </div>
  )
}

export default App
