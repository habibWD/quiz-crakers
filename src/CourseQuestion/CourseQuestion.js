
import { useState } from 'react';
import Option from '../components/Option/Option';
import './CourseQuestion.css'

const CourseQuestion = ({question}) => {
    const {options, correctAnswer} = question;
    const {color, setColor}= useState("");
    
    for(const option in options){
        if(option === correctAnswer){
            setColor("")
        }
    }
    const [answer, setAnswer] =useState("");
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: question.question}} />
            {
                options.map(option=><Option option={option} correctAnswer={correctAnswer} answer={answer} setAnswer={setAnswer}></Option>)
            }
            
        </div>
    );
};

export default CourseQuestion;