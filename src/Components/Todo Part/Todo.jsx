import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <>

    <div className="all_mina_todo">

        <div className="container">

            <div className="Todomain flex justify-center  ml-[40px]">

                <div className="only_todo_text ml-[20%]">
                <div className="todo_heading">
                    <h1>Things you need <span>to do</span></h1>
                    <p>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
                </div>


                </div>

                <div className="heading_img">

                    <img src="public/Plen.png" alt="plenimg" />
                </div>

            </div>

            <div className="Todo_card flex gap-[27px] flex-wrap justify-center">

                <div className="single_card">

                    <img src="public/CardLogo1.png" alt="cardlogo" />

                    <h1>Sign Up</h1>

                    <p>Completes all the work associated with planning and processing</p>

                </div>


                  <div className="single_card card2">

                    <img src="public/CardLogo2.png" alt="cardlogo" />

                    <h1>Worth of Money</h1>

                    <p>After successful access then book from exclusive deals & pricing</p>

                </div>


                  <div className="single_card Card3">

                    <img src="public/CardLogo3.png" alt="cardlogo" />

                    <h1>Exciting Travel
                    </h1>

                    <p>Start and explore a wide range of exciting travel experience.</p>

                </div>



            </div>

        </div>
    </div>
    
    </>
  )
}

export default Todo