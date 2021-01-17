import React from 'react'
import ServiceCard from './ServiceCard'

import card1 from '../assets/img/card1.jpg';
import card2 from '../assets/img/card2.jpg';
import card3 from '../assets/img/card3.jpg';
import card4 from '../assets/img/card4.jpg';

export default function Servicies() {
    return (
        <section className='pb-5'>
            <div className='row pt-5'>
                <div className='title col-3 row'>
                    <div></div>
                    <h3 className='h5 title-text'>OUR SERVICES</h3>
                </div>
                <p className='col-9'>Our team seek to help your organization navigate this threshold that stands between your brands and distinctive innovations, and finding your brands inner sanctum.</p>
            </div>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3'>
                <ServiceCard 
                    title={'Consulting'}
                    image={card1}
                    text={'Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.'}
                />
                <ServiceCard 
                    title={'Impact Measurement & Accessment '}
                    image={card2}
                    text={'At TCSRN, we help decision-makers and policy-makers decide what actions they should or should not take to make society more sustainable, and also ensure that plans and activities makes an optimal contribution to sustainable development'}
                />
                <ServiceCard 
                    title={'Engagement Design'}
                    image={card3}
                    text={'Consumers have finite attention spans and limited, as such, gaining their attention as quickly as possible and trying to establish the bonding capital with them is vital. We are adept at devising the surest and the most potent of reaching your target audience and ensuring optimized bonding that build mutual trust.'}
                />
                <ServiceCard 
                    title={'Engagement Design'}
                    image={card4}
                    text={'Consumers have finite attention spans and limited, as such, gaining their attention as quickly as possible and trying to establish the bonding capital with them is vital. We are adept at devising the surest and the most potent of reaching your target audience and ensuring optimized bonding that build mutual trust.'}
                />
            </div>
        </section>
    )
}
