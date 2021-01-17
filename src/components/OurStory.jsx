import React from 'react'
import image3 from '../assets/img/image3.jpg'
import image4 from '../assets/img/image4.jpg'

export default function AboutUs() {
    return (
        <section className=' mt-5'>
            <div className='story row'>
                <div className='col-md-4'>
                    <img style={{ width: '100%', height: '390px' }} src={image3} alt='people farming' />
                </div>
                <div className='col-md-7'>
                    <div className='title'>
                        <h3 className='h5 title-text'>Our Story</h3>
                    </div>
                    <p>
                        The TruContact CSR Nigeria seed was sown long before the founder; <b>Kenneth Egbas</b> would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.
                </p>
                </div>
            </div>
            <div className='story sub-story row pt-4 pb-5'>
                <div className='col-md-4 pr-0'>
                    <img className='' style={{ width: '58%', height: '270px' }} src={image4} alt='city' />
                </div>
                <div className='col-md-7'>
                    <p>
                        The TruContact CSR Nigeria seed was sown long before the founder; Kenneth Egbas would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.
                </p>
                    <a className='link' href='#'>READ FULL STORY</a>
                </div>
            </div>
        </section>
    )
}
