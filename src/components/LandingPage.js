import React, {useState} from 'react'
import _ from 'lodash'
import {LandingPageWrapper, QuestionHeader, QuestionImage, QuestionOptions, IndivisualOptionWrapper, NextButton, QuizEndedHeader} from '../styles/LandingPage.style'

const LandingPage = (props) => {
    const {quizConetnt} = props
    
    const[questionNo, updateQuestionNo] = useState(0);

    const [endOfQuiz, updateEndOfQuiz] = useState(false)
    const[answerCount, correctAnswerCount] = useState(0);
    const[selectedAnswerId, updateSelectedAnswerId] = useState(-1);
    
    const indivisualQuestion = quizConetnt[questionNo];
    const {id, logo, question, options, answerId} = indivisualQuestion

    const selectedAnswerHandler = (idx) => {
        updateSelectedAnswerId(idx)
    }

    const nextQuestionHandler = () => {
        if(id < quizConetnt.length) {
            if(answerId === selectedAnswerId) correctAnswerCount(answerCount+1);
            updateQuestionNo(questionNo+1)
            updateSelectedAnswerId(-1);
        }
        else {
            updateEndOfQuiz(true);
        }
    }

    if(endOfQuiz)
    {
        return (<QuizEndedHeader>Total correct answers is {answerCount}</QuizEndedHeader>)
    }

    return (
        <LandingPageWrapper>
            <QuestionHeader>{question}</QuestionHeader>
            <QuestionImage src={logo} alt="questionImage"/>
            <QuestionOptions>
                {_.map(options, (indivisualOption, idx) => {
                    return <IndivisualOptionWrapper isSelected={idx === selectedAnswerId} onClick={() => selectedAnswerHandler(idx)}>
                        {indivisualOption}
                    </IndivisualOptionWrapper>
                })}
            </QuestionOptions>
            <NextButton onClick={() => nextQuestionHandler(id)}>Next</NextButton>
        </LandingPageWrapper>
    )
}

export default LandingPage;
