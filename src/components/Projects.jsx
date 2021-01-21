import React from 'react'
import EachProject from './EachProject'
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
    return (
        <section className='mb-4'>
            <div style={{ 
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div className='title col-3 row'>
                    <div></div>
                    <h3 className='h5 title-text'>OUR PROJECTS</h3>
                </div>
            </div>
            <div className='row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 scrollmenu mb-2'>
                <EachProject />
                <EachProject />
                <EachProject />
                <EachProject />
            </div>
            <div className='text-center'>
                <button className='btn btn-success'>VIEW ALL PROJECTS <BsArrowRight /></button>
            </div>
        </section>
    )
}
