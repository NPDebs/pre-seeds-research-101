import Navbar from './Nav'
import homeimage from './assets/homeimage.png'
import './home.css'
import glasses from './assets/glasses.png'
import graduate from './assets/graduate.png'
import truck from './assets/truck.png'
import Footer from './footer'

function Home (){
    const buttons = [
        {id: 1, label: 'Explore the Program', variant: 'normal'},
        {id: 2, label: 'Join the Community', variant: 'dark'}
    ]
    const homeBoxes = [
        {
            id: 1, 
            image: graduate, 
            head: 'Research Educators / Curriculum Comtributors', 
            text: 'Help us develop learning modules or "episodes" that explain research concepts clearly and accessibly.'
        },
        {
            id: 2,
            image: glasses,
            head: 'Editors & Proofreaders',
            text: 'Support clarity, tone, grammar, and accessibility of our content.',
        },
        {
            id: 3,
            image: graduate,
            head: 'Trainers & Facilitators',
            text: 'If you love teaching, you can help Deliver workshops, design hands-on learning activities, run onboarding or peer-learning sessions.'
        },
        {
            id: 4,
            image: graduate,
            head: 'Web Developers',
            text: 'Keep our project site functional, beautiful, and useful.'
        },
        {
            id: 5,
            image: graduate,
            head: 'Designers & Visual Thinkers',
            text: 'Give Pre-seeds a visual identity.'
        },
        {
            id: 6,
            image: graduate,
            head: 'Content Creators',
            text: 'Spread the word! You can help with making videos or writing blogs explaining what we do.'
        },
        {
            id: 7,
            image: truck,
            head: 'Community $ Care',
            text: 'Contriutors who focus on people to help us build a culture of care and inclusion.'
        },
        {
            id: 8,
            image: truck,
            head: 'Project & Operations Support',
            text: 'Keep us running smoothly with Support on cross-team collaboration and documentation.'
        },
        {
            id: 9,
            image: truck,
            head: 'Translators',
            text: 'You can help to Localise our materials and democraticise the knowledge.'
        }
    ]

    return (
        <>
        <div className="home-body">
            <div className='nav'>
                <Navbar />
            </div>
            <div className='homesec1'>
                <div className='secleft'>
                    <div className='secleftheader'>
                        <h2 >Making research education accessible for everyone</h2>
                    </div>
                    <div className='secleftbottom'>
                        <p className='secbottomp'>Pre-seeds is a community-led project building open, inclusive, and accessible
                        research education. We want to make it easier for anyone - regardless of background - to understand and engage in research.
                        </p>

                        <div className='secleftbutton'>
                            {buttons.map(button => (
                                <button key= {button.id}
                                className={`buttons ${button.variant === 'dark' ? 'joinbtn': ''} `}
                                > {button.label}</button>

                            ))}
                        </div>
                    </div>
                </div>
                
                <img src={homeimage} alt='' className='home-img' />
            </div>
            <div className='homesec2'>
                
            </div>
            <div className='homesec3'>
                <div className='sec3header'>
                    <h3>What you can do here</h3>
                    <p>We believe every skill and interest is valid. Here are some of the many roles in our community - feel free to mix and match
                        based on your comfort level and curiosity.
                    </p>
                </div>
                <div className='sec3boxes'>
                    {homeBoxes.map(box => (
                        <div key = {box.id}
                        className='homeboxes'>
                            <img src={box.image} alt='' className='homeboxicons'/>
                            <div className='homeboxtexts'>
                                <h4>{box.head}</h4>
                                <p>{box.text}</p>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
            <div className="homesec4">
                 <div className="homesec4-bg">
                    <img
                    src={homeimage}
                    alt="Every researcher starts somewhere"
                    className="homesec4-img"
                    />
                    <h3 className="homesec4-text">
                    Every researcher starts somewhere, <a>Start here</a>
                    </h3>
                </div>
            </div>  

            <Footer />
        </div>
            
        </>
    )
}

export default Home