import { useState } from 'react'
import './App.css'
import {CakeView} from "./features/cake/CakeView"
import {UserView} from "./features/user/UserView"
import {IceCreamView} from "./features/icecream/IceCreamView"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>XXX</h1>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
  )
}

export default App
