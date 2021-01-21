import React from 'react'

export default function EachPartner({
    image,

}) {
    return (
        <div className='each-partner card shadow-lg col m-2'>
            <div className='p-2'>
                <img src={image} alt='' />
            </div>

        </div>
    )
}
