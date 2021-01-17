import React from 'react'

export default function ServiceCard({
    image,
    title,
    text
}) {
    return (
        <div className="col mb-4">
            <div className="card shadow-sm">
                <div class="img-hover-zoom">
                    <img src={image} className="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>

                <div className="card-body" data-read-aloud-multi-block="true">
                    <h5 className="card-title"><b>{title}</b></h5>
                    <p className="card-text" data-speechify-sentence="">{text}.</p>
                    <div className="d-flex justify-content-between align-items-center" data-speechify-sentence="">
                        <div className="btn-group">
                        </div>
                        <small className="text-muted mb-4"><a href='#' className='link'>WORK WITH US</a></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
