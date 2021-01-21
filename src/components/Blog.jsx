import React from 'react'
import EachBlog from './EachBlog'

export default function Blog() {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div className='title col-3 row'>
                    <div></div>
                    <h3 className='h5 title-text'>OUR PROJECTS</h3>
                </div>
            </div>

            <div className='mt-4'>
                <EachBlog />
                <EachBlog />
                <EachBlog />
            </div>
            
        </div>
    )
}
