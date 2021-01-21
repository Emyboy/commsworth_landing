import React from 'react'
import image from '../assets/img/ceo.jpg';

export default function CEO() {
    return (
        <div className='ceo'>
            <div className='row mt-5'>
                <img src={image} alt='ceo' />
                <div className='col-md-6'>
                    <p>“ Working with TruCSR was the best decision i made for my
business, most people underestimate the importance of Social responsibilty in this country, i’m glad we consulted TruCSR ”</p>
                    <h6>Mr Kelechi Onuacho</h6>
                    <small>CEO, Nestle</small>
                </div>
            </div>
        </div>
    )
}
