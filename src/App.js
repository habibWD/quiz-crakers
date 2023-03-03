
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Courses from './components/Courses/Courses'
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: async()=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Courses></Courses>
        },
        {
          path: '/quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
