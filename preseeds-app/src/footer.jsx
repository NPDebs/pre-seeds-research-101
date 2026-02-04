import './footer.css'
import multi from './assets/multi.png'
import instagram from './assets/instagram.png'
import { RiTwitterXFill } from 'react-icons/ri'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='footer-left'>
                <div className='footer-text'>
                    <h3>Got questions or ideas or just want to say hi?</h3>
                    <p>Reach out anytime in the Slack <a>#community-support</a> channel, or DM one of the community managers.
                    We're here for you</p>
                </div>
                <div className='license'>
                    <img src={multi} alt='' className='license-icon' />
                    <p>CC License here</p>
                </div>
            </div>

            <div className='footer-right'>
                <div className='starting'>
                    <h6>Get Started</h6>
                <div className='footer-links'>
                    <a>Open issues on our Github Projects Board</a>
                    <a>Signup form</a>
                    <a>Slack channel</a>
                    <a>Contributor Guide</a>
                    <a>Github Repository</a>
                    <a>Ways of Working</a>
                </div>
                </div>
                <div className='footer-icons'>
                    <a href=''><img src={instagram} alt='' className='instagram-icon' /></a>
                    <a href=''><RiTwitterXFill className='footer-icon' /></a>
                    <a href=''><TiSocialLinkedinCircular className='footer-icon' /></a>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Footer