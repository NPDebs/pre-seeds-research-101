import "./firstlanding.css"
import logo from './assets/plogo.png'
import cover from './assets/cover.png'
import bag from './assets/bag.png'
import blue from './assets/bluelogo.png'
import yellow from './assets/yellowlogo.png'
import sky from './assets/skylogo.png'
import maroon from './assets/maroonlogo.png'
import purple from './assets/purplelogo.png'
import backimg from './assets/backimg.png'
import multi from './assets/multi.png'
import deep from './assets/deep.png'


function Firstlanding(){

    const boxes = [
       {id: 1, image: multi, text: 'Preseeds', bg: '#FFFFFF', variant: 'normal'},
       {id: 2, image: deep, text: 'Preseeds', bg: '#FFD362', variant: 'normal'},
       {id: 3, image: sky, text: 'Preseeds', bg: '#01CFFF', variant: 'dark'},
       {id: 4, image: multi, text: 'Preseeds', bg: '#170E3A', variant: 'dark'}         
    ]
    return (
        <>
        <div className="section">
            <div className="sec1">
                <p className="secparagraph">Everyone starts somewhere, start here. <img src={logo} alt="Logo" className="seclogo" /> </p> 
                  
            </div>
            <div className="section2" style={{backgroundImage: `url(${backimg})`}}>
                <div className="sec2">
                {boxes.map(box => (
                    <article
                    key = {box.id}
                    className={`boxes ${box.variant === 'dark' ? 'text-white' : ''}`}
                    style={{backgroundColor: box.bg}}>

                        <img src={box.image} alt="" className="box-img" />
                        <p>{box.text}</p>

                    </article>
                ))}
                </div>
            </div>
            <div className="sec3">
                <img src={cover} alt="cover" className="cover" />
            </div>

            <div className="sec4">
                <img src={bag} alt="bag" className="bag" />
            </div>

            <div className="sec5">
                <div className="logos">
                    <img src={yellow} alt="yellow" className="sec5logo"/>
                    <img src={purple} alt="purple" className="sec5logo"/>
                    <img src={blue} alt="blue" className="sec5logo" />
                    <img src={maroon} alt="maroon" className="sec5logo" />
                    <img src={sky} alt="sky" className="sec5logo" />
                </div>
            </div>

        </div>
        </>
        
    )
    }

export default Firstlanding
