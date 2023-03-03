import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseQuestion from '../CourseQuestion/CourseQuestion';

const CourseDetails = () => {
    const quizData = useLoaderData().data;
    // console.log(quizData.questions);
    const questions = quizData.questions;
    console.log(questions)
    return (
        <div>
            {
                questions.map(question=> <CourseQuestion 
                key={question.id}
                question={question}
                ></CourseQuestion>)
            }
        </div>
    );
};

export default CourseDetails;