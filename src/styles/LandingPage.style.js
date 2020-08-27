import styled from 'styled-components'

export const LandingPageWrapper = styled.div`
    box-sizing: border-box;
    padding: 40px;
    background-color: #ECDEDB;
`

export const QuestionHeader = styled.h2`
`

export const QuestionImage = styled.img`
    height: 300px;
    width: 300px;
`

export const QuestionOptions = styled.div``

export const IndivisualOptionWrapper = styled.div`
    margin-top: 20px;
    border: 1px solid black;
    padding: 5px;
    width: 300px;
    cursor: pointer;
    background-color: ${props=> props.isSelected ? 'green': ''};
    &:hover {
        background-color: white;
    }
`;

export const NextButton = styled.button`
    margin-top: 20px;
    width: 200px;
    background-color: blue;
    border: 0;
    padding: 5px;
    cursor: pointer;

    &:hover { 
        background-color: green;
    }
`

export const QuizEndedHeader = styled.h1``;
