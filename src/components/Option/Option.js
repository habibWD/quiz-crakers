import React from 'react';

const Option = ({option, correctAnswer, answer, setAnswer}) => {
    console.log(correctAnswer===answer);
    return (
        <div>
            {
                answer === correctAnswer ?
                <button style={{background: `${correctAnswer === answer && 'green'}`}} onClick={()=>setAnswer(option)}>{option}</button>
                :
                <button style={{background: `${correctAnswer === answer && 'red'}`}} onClick={()=>setAnswer(option)}>{option}</button>
            }
        </div>
    );
};

export default Option;