import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import Video from './Video';
// import './App.css'
import Olayinka from "../assets/Olayinka.mp4";
import ola from "../assets/ola.jpeg";
function Home() {
    // const getImage = getImage;
  return (
    <div>
  <div className="table w-full ...">
  <div className="table-header-group ...">
    <div className="table-row">
      <div className="table-cell text-left ...">Song</div>
      <div class="table-cell text-left ...">Artist</div>
      <div class="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div class="table-cell ...">Malcolm Lockyer</div>
      <div class="table-cell ...">1961</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Witchy Woman</div>
      <div class="table-cell ...">The Eagles</div>
      <div class="table-cell ...">1972</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">Shining Star</div>
      <div class="table-cell ...">Earth, Wind, and Fire</div>
      <div class="table-cell ...">1975</div>
    </div>
  </div>
</div>
<div>
<div className='p-10' >
<img width="300px" height="200px" class="float-left clear-left ..." src={ola} />
<p>🌐 Unveiling the Frontiers of AI: A Journey of Exploration 🚀

🔭 Introduction: AI, the game-changer 💡

🌱 The Dawn of AI Exploration: Alan Turing and beyond 🏔️

🗺️ Mapping the AI Landscape: Diverse fields, endless possibilities 🌈

💡 Uncharted Territories: Cutting-edge applications ✨

⚖️ Ethical Considerations: Navigating the moral compass 🧭

🤝 Collaborative Expeditions: Power of the AI community 🌍

✨ Conclusion: Embracing the future, shaping a better world 🌟</p>
</div>
</div>
      <div className='video p-7'>
<Video/>
      </div>
      

      <div className="gap-8 columns-6 inline-grid grid-cols-3 gap-4...">

  <img className="w-full aspect-video ... bg-gradient-to-r from-indigo-600 to-pink-500" src="https://media.istockphoto.com/id/1404749040/photo/human-vs-robot.jpg?s=612x612&w=0&k=20&c=IjlGSvSqq8-G-Mzc6CFxwIFzjAk6coClu7SRZQ2XgeU=" />
  <img className="w-full aspect-square ..." src="https://media.istockphoto.com/id/1458045238/photo/ai-speaks-letters-text-to-speech-or-tts-text-to-voice-speech-synthesis-applications.jpg?s=612x612&w=0&k=20&c=t1CW8VXZPApr8NCUZ2gRPpBQzD-yn8lPpNqozT9C0gg=" />
  <img className="w-full aspect-square ..." src="https://media.istockphoto.com/id/1470555159/photo/blue-gavel-hologram-over-robotic-hands-cyber-law-concept.jpg?s=612x612&w=0&k=20&c=nhevh06okGAgaQHoP5GIFLfWGL-JNXqiCMajGdOCd4w=" />
  <img className="float-left ..." src="https://media.istockphoto.com/id/1440356809/photo/artificial-intelligence-technology-robot-futuristic-data-science-data-analytics-quantum.jpg?s=612x612&w=0&k=20&c=rmkxBaRiWay0ghLSP91Zhei6NQWfaKSRv3zlzF-2BDs=" />
<img className="float-right object-cover h-48 w-96 ..." src="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=" />
<p className="clear-left md:clear-none...">Ethical Considerations: The Moral Compass of AI Exploration:
While AI exploration brings forth remarkable possibilities, we must tread carefully and address the ethical considerations that arise. As AI becomes increasingly autonomous, issues surrounding bias, privacy, transparency, and accountability become critical. As responsible AI explorers, we must proactively tackle these challenges and ensure the development and deployment of AI technologies that are fair, unbiased, and beneficial to all of humanity....</p>
  <img class="w-full aspect-square ..." src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  <img class="w-full aspect-square ..." src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  {/* <img class="w-full aspect-square ..." src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> */}


</div>
<div className="box-border h-32 w-32 p-4 border-4 bg-gradient-to-r from-indigo-600 to-pink-500 ...">
<img className="w-full aspect-square ..." src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
</div>
<div className="table w-full ...">
  <div className="table-header-group ...">
    <div className="table-row">
      <div className="table-cell text-left ...">Song</div>
      <div className="table-cell text-left ...">Artist</div>
      <div className="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div className="table-row-group">
    <div className="table-row">
      <div className="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div className="table-cell ...">Malcolm Lockyer</div>
      <div className="table-cell ...">1961</div>
    </div>
    <div className="table-row">
      <div className="table-cell ...">Witchy Woman</div>
      <div className="table-cell ...">The Eagles</div>
      <div className="table-cell ...">1972</div>
    </div>
    <div className="table-row">
      <div className="table-cell ...">Shining Star</div>
      <div className="table-cell ...">Earth, Wind, and Fire</div>
      <div className="table-cell ...">1975</div>
    </div>
  </div>
</div>
<span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
<span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
<span className="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<span className="inline-grid grid-cols-3 gap-4">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</span>
<div class=" object-fill ...">
  <img src= "https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=300" class="object-cover h-48 w-96 ..."/>

</div>
      <div classNameName="container grid gap-4 grid-cols-3 grid-rows-3" >
<span className=' object-center hover:object-top item item1 p-7'>
<img className='p-6'  width="300px" height="250px" src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">

</img>
</span>
<span className='item item2 border-4 p-7' ><img width="300px" height="250px" src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
</img>
</span>
<div className="p-10">
<div className='p-7 border-4 bg-gradient-to-r from-indigo-600 to-pink-500'>
<span className='item '>
<img border-4 src={ola}>

</img>
</span>
</div>
</div>

{/* <div className="p-8"> */}
{/* <span className='item float-right '><img width="300px" height="250px" src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img></span>
</div> */}
<div className="flex p-6 ...">
  <div className="flex-1 p-4 ...">1. The journey of AI exploration is not one to be undertaken alone. The power of collaboration and knowledge-sharing within the AI community is invaluable.</div>
  <div className="contents">
    <div className="flex-1 p-3 ...">2. By fostering partnerships, participating in open-source projects, and engaging in interdisciplinary dialogues, AI explorers can pool their expertise, perspectives, and resources to accelerate progress and overcome obstacles together.</div>
    <div className="flex-1 ...">3. The frontiers of AI are continually expanding, with groundbreaking applications transforming industries and society as a whole. AI-powered technologies are revolutionizing healthcare, enabling early disease detection, personalized treatments, and drug discovery.</div>
  </div>
  {/* <div className="flex-1 ...">4. AI is also driving advancements in agriculture, finance, energy, and many other sectors, presenting unparalleled opportunities for exploration and innovation.</div> */}
</div>
      
<div className="box-border h-32 w-32 p-4 border-4 bg-gradient-to-r from-indigo-600 to-pink-500 ...">
<img className="w-full aspect-square ..." src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
</div>
      </div>
      
      {/* <Navbar />
      <div classNameName="container"></div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
