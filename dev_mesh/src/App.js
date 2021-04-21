import React,{useState} from 'react'
import "./App.css"
import Card from "./Component/Card"

function App() {

    const [name,setName] = useState("Your Name");
    const [job,setJob] = useState("Job Title");
    const [about,setAbout] = useState("yes is about us");

    return (
        <div className="App">
        <Card name={'Atharva'} job={'Student | CS Enthusiast'} about={'I am a Computer Engineering Student. I love programming and trying to find more about Full Stack Web Development and iOS Development. I’m currently learning: | Full Stack Web development | iOS App Development.I’m looking to collaborate on: Android and Web Development Projects .Ask me about anything. I will try to help you as much as I can.'} />Card name={'Atharva'} job={'Student | CS Enthusiast'} about={'I am a Computer Engineering Student. I love programming and trying to find more about Full Stack Web Development and iOS Development. I’m currently learning: | Full Stack Web development | iOS App Development.I’m looking to collaborate on: Android and Web Development Projects .Ask me about anything. I will try to help you as much as I can.'} />
        </div>
    );
}

export default App
