import brandicon from './images/icon-brand-recognition.svg'
import customicon from './images/icon-fully-customizable.svg'
import recordicon from './images/icon-detailed-records.svg'
import person from './images/illustration-working.svg'
import './App.css';
import Statistic from './components/Statistic';
import NavBar from './components/NavBar';
import Urlinput from './components/UrlInput'
import {  ReactComponent as Logo } from './images/logo.svg'
import {  ReactComponent as Fb } from './images/icon-facebook.svg'
import {  ReactComponent as Gram } from './images/icon-instagram.svg'
import {  ReactComponent as Twitter } from './images/icon-twitter.svg'
import {  ReactComponent as Pinterest } from './images/icon-pinterest.svg'
import {useState} from 'react'

function App() {
   const[text,setText] = useState('')
  const[url, setUrl] = useState([])
  const character = 'abcdefghijklmnopqstuvwsyz123456789' 
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!text) return;
    const shortenurl = (length)=>{
      let result = ''
      for(let i=0; i<length; i++){
          result += character.charAt(Math.floor(Math.random()* character.length))
      }
      return result
    } 
    const shorturl =shortenurl(6)
    const newurl = {id:Math.random(), link:text, shorturl: `https://re.ink/'${shorturl}`}
    setUrl([newurl, ...url])
    setText('')
    console.log(url)
  }
  const mostRecentUrl = url.slice(0,3)
  return (
    <div className=" App">
      <NavBar/>
      <header>
        <div className='header-container'>
            <div className='header-left'>
              <h1>More than just shorter links</h1>
              <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
              <button className='btn'>Get started</button>
            </div>
            <div className='header-right'>
              <img src={person} alt='bg'/>
            </div>
        </div>
      </header>
      <section>
        <div className='container stats-container'>
            <Urlinput text={text} setText={setText} submit={handleSubmit}/>
            <div>
            {mostRecentUrl.map((links)=>{
              const {id,link,shorturl}= links
              return (
                <div key={id} className= 'links-container'>
                  <p>{link}</p>
                  <div>
                  <p>{shorturl}</p>
                  <button className='btn'>Copy</button>
                  </div>
                </div>
              )
            })}
            </div>
            <div className='statistic-head'>
                <h2>Advanced Statistics</h2>
                <p>Track how your link are performing across the web with our advanced Statistics dashboard</p>
            </div>  
            <div className='article-container'>
              <Statistic icon={brandicon} title={'Brand Recognition'}/>
              <Statistic icon={customicon} title={'Detailed Records'}/>
              <Statistic icon={recordicon} title={'Fully Customizable'}/>
            </div>
        </div>
      </section>
      <div className='pre-footer'> 
        <h2>Boost your links today</h2>
        <button className='btn'>Get started</button>
      </div>
      <footer>
        <div className='container footer-container'>
          <div className='footer-logo'><Logo /></div>
          <div>
              <ul>
                <li>Features</li>
                <li>Link shortening</li>
                <li>Branded links</li>
                <li>Analysis</li>
              </ul>
              <ul>
                <li>Resources</li>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
              </ul>
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
          </div>
          <ul className='socials'>
            <li><Fb/></li>
            <li><Twitter/></li>
            <li><Pinterest/></li>
            <li><Gram/></li>
          </ul>
        </div>
        
      </footer>
      
    </div>
  );
}

export default App;
