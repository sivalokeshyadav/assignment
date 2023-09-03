import React from 'react'
import Home from './components/HomePage/Home'
import Pageone from './components/NextPage'
import PageTwo from './components/PageTwo/PageTwo'
import PageThree from './components/PageThree/PageThree'
import PageFive from './components/PageFive/PageFive'
import PageFour from './components/PageFour/PageFour'

const App = () => {
  return (
    <div className='app-container'>
      <Home />
      <Pageone />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  )
}

export default App