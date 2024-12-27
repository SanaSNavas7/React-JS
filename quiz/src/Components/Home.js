import React,{useState} from 'react'
import Question from './Quiz/Question'
import quizData from '../StaticData/Data'
function Home() {
    const [questions, setQuestions] = useState(quizData)
  return (
    <main>
    <div className='container'>
        <h3>Techflix AI <br/>Quiz App</h3>
        <section>
            {
                questions.map((question)=>{
                    return(
                        <Question key={question.id} {...question}/>

                    )
                }

                )
            }
           <Question/> 
        </section>
      
    </div>
    </main>
  )
}

export default Home
