import React from 'react'
import image1 from '../assets/img/blog1.jpg';

export default function EachBlog({
    image,
    title,
    body,
    date
}) {
    return (
        <div className='gray border-0 mb-4 each-blog row'>
            <img className='col-md-5' src={image1} alt='blog image' />
            <div className='col-md-6 each-blog-body'>
                <div>
                    <small>JANUARY 2021</small>
                    <h2>
                        2020 at a glance: yearly
                        review
</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, omnis, aut tempore in nisi incidunt ab, magni sapiente maxime corporis esse! Officia ab asperiores corporis minus laudantium? Voluptatibus, perferendis iure!
                </p>
                    <a href='#' className='link'>READ MORE</a>
                </div>
            </div>
        </div>
    )
}
