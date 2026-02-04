import './nav.css'
import multi from './assets/multi.png'
import {IoIosArrowDown} from 'react-icons/io'

function Navbar(){
    return (
        <div className="navigation">
            <div className='icon-nav'>
                <img src={multi} alt='' className='nav-icon' />
                <h4>PRE-SEEDS</h4>
            </div>

            <div className='navlinks'>
                <a href='#'> Link One </a>
                <a href='#'> Link Two </a>
                <a href='#'> Link Three </a>
                <a href='#'> Link Four</a>
                <IoIosArrowDown className='nav-arrow' />
            </div>
        </div>

    )
}

export default Navbar