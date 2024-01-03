import React from 'react'
import data from "../../data/data.json"
import "./Test.css"

const Test = () => {
  return (
  <>
    <section className='container'>
        <div className='content'>
            <h4>{data.instructor.name}</h4>
            <p>{data.course.title}</p>
        </div>
    </section>
    <section className='AboutContainer'>
       <div>
        <ul className='lists'>
          <li className='list'>About</li>
          <li className='list'>Insturctor</li>
          <li className='list'>Review's</li>
        </ul>
       </div>
      
      <h2>About the course</h2>
      <div className='aboutDescription'>{data.course.about.html_content}</div>
      <h2>What to expect</h2>
      <div className='aboutDescription'>
        <ul className='expectLists'>
          <li>Learn to mange your relationships</li>
          <li>Better communication</li>
          <li>Time management</li>
          <li>Forgiveness</li>
        </ul>
        </div>
      <h2>Key topics covered</h2>
      <div className='aboutDescription'>
      <ul className='topicLists'>
          <li>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li><li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li>
          <li>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</li>
          <li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li>
          <li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</li>
        </ul>
      </div>

      <div>
        <h2>About the Intructor</h2>
        <div className='instructor'>
          <img className='image' src="./images/das.jpg" alt="charan das pic" />
          <p>Lorem ipsum text about the instructor's background and philosophy.</p>
        </div>
        <div>
          <ul className='links'>
          <li className='linkItem'>{data.instructor.social_media.facebook}facebook</li>
          <li className='linkItem'>{data.instructor.social_media.twitter}Twitter</li>
          <li className='linkItem'>{data.instructor.social_media.youtube}Youtube</li>
          <li className='linkItem'>{data.instructor.social_media.instagram}Instagram</li>
          </ul>
        </div>
      </div>
    </section>

  </> 
    )
}

export default Test