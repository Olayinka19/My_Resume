import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import './App.css'
import Olayinka from "../assets/Olayinka.mp4";
function Home() {
    // const getImage = getImage;
  return (
    <div>
      <h1>Full Stack Web Developer </h1>
      <img src="" width="120px" height="120px"></img>
      <div className="">
      <h3>Olayinka's Porfolio</h3>
      <ul>
        <li>
            <p>Created expectional UX design, determined backend data display, designed styling, colors, User Interface, website optimization and naviagtion</p>
        </li>
        <li>
            Designed and edited templates for React framework
        </li>
        <li>
            <p>Partened with backend developers to create  a dynamic web pages using javascript</p>
            </li>
            <li>
                Followed Scrum methodology for software workflow management and web development
            </li>

            <li>
            <p>
            Collaborated with Agile product team members and contributors 
                Developed with backend and frontend developer
            </p>
            </li>
      </ul>
      <h3>Backend:</h3>
      <ul>
        <li>Designed a user interface with express and SQL and Postgress</li>
        <li>
            <p>Wrote code using javascript to build an API client from scratch using express and Javascript</p>
        </li>
        <li>
            <p>Managed Hosting environment and database</p>
        </li>
        </ul>
       
      

      </div>
      
      {/* <Navbar />
      <div className="container"></div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
