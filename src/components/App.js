import React from 'react';
import LandingPage from './LandingPage';
import QuizData from '../common/QuizData'

// import PropsDemo from './PropsDemo'
// import StateDemo from './StateDemo'

function App() {
  // const student1 = "Arshad"
  // const student2 = "Riya"

  // React Fragment
  return (
    <> 
      {/* <PropsDemo s1={student1} s2={student2}/>
      <StateDemo /> */}
      <LandingPage quizConetnt={QuizData}/>
    </>
  )
}

export default App;
