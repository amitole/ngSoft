import React from 'react'

import '../style/PageBtn.css'

const PageBtn = ({ logo, text, altText }) => {

    return (
        <div className='btn'>
            <p className='btn-text'>{text}</p>
            <img className='btn-logo' src={logo} alt={altText} />
        </div>
    )
}

export default PageBtn