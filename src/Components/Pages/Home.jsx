import React from 'react'
import Banner from '../Banner/Banner'
import Todo from '../Todo Part/Todo'

import ExclusiveSlider from '../ExclusivePartSlider/ExclusiveSlider'
import Plan from '../Vacation Plan/Plan'
import Say from '../People Say/Say'
import Update from '../Get Update/Update'
import Submit from '../DataBase_Submit/Submit'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>

      <Banner/>
      <Todo/>
      <ExclusiveSlider/>
      <Plan/>
      <Say/>
      <Update/>
      <Submit/>
      <Footer/>
        
    </div>
  )
}

export default Home