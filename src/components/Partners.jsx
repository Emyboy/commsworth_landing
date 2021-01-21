import React from 'react'
import EachPartner from './EachPartner'

import image1 from '../assets/img/partner1.png';
import image2 from '../assets/img/partner2.png';
import image3 from '../assets/img/partner3.png';
import image4 from '../assets/img/partner4.png';
import image5 from '../assets/img/partner5.png';
import image6 from '../assets/img/partner6.png';
import image7 from '../assets/img/partner7.png';
import image8 from '../assets/img/partner8.png';
import CEO from './CEO';

export default function Partners() {
    return (
        <section className='container mb-4 pb-4'>
            <div className='row pt-5'>
                <div className='title col-3 row'>
                    <div></div>
                    <h3 className='h5 title-text'>OUR PARTNERS</h3>
                </div>
                <p className='col-9'>Our team seek to help your organization navigate this threshold that stands between your brands and distinctive innovations, and finding your brands inner sanctum.</p>
            </div>

            <div>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 pb-4'>
                    <EachPartner image={image1} />
                    <EachPartner image={image2} />
                    <EachPartner image={image3} />
                    <EachPartner image={image4} />
                    <EachPartner image={image5} />
                    <EachPartner image={image6} />
                    <EachPartner image={image7} />
                    <EachPartner image={image8} />
                </div>
            </div>
            <CEO />
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <a className='link' href='#'>SEE MORE TESTIMONIALS</a>
            </div>
            
        </section>
    )
}
