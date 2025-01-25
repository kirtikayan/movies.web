import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title}alt="" className='caption-img'/>
          <p>
          After his adoptive father, Neşet, is killed, Hakan Demir, an Istanbul shopkeeper, discovers that he is connected to an ancient secret order whose duty is to protect the city. Hakan must embrace his family's legacy as the Protector, a hero with the duty to kill the Immortal and prevent the city's destruction.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn' ><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} cartegory={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} cartegory={"popular"}/>
      <TitleCards title={"Upcoming"} cartegory={"upcoming"}/>
      <TitleCards title={"Top Picks for You"} cartegory={"now_playing"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
