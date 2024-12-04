import React from 'react'
import FetchApi from './components/FetchApi'
import BasicEffect from './components/BasicEffect'
import CounterEffect from './components/CounterEffect'
import FetchDataEffect from './components/FetchDataEffect'

const App = () => {
  return (
    <div>
    <FetchDataEffect/>
    <CounterEffect/>
    <BasicEffect/>
     {/*  <FetchApi/> */}
    </div>
  )
}

export default App
