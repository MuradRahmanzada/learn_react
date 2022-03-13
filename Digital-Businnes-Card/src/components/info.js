import React from 'react';

function Info () {
    return (
        <header>
            <nav className='navbar'>
                 <img src="images/img.svg" alt="" width={"100%"}/>
                 <h1 className='nav-title'>Laura Smith</h1>
                 <h2 className='nav-job'>Frontend Developer</h2>
                 <p className='nav-link'>laurasmith.website</p>
            </nav>
            <div className='buttons'>
                <button type='button' className='email-btn'><i class="fa-solid fa-envelope"><span>Email</span></i></button>
                <button type='button' className='link-btn'><i class="fa-brands fa-linkedin"><span>LinkedIn</span></i></button>
            </div>
            
        </header>
    )
}

export default Info;