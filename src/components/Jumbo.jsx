import { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/img/image1.jpg';
import image2 from '../assets/img/image2.jpg';
import { BsArrowDown } from "react-icons/bs";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className='jumbo-overlay p-5'>
                <h2 className='h1 col-md-4'>We are in the
                business of
sustainability.</h2>
                <p className='col-md-4'>TCSRN founded in 2006,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
                <a href='#' className='col-md-4 link'>EXPLORE SITE<BsArrowDown /></a>
            </div>
            <Carousel nextIcon={false} prevIcon={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '90vh' }}
                        src={image1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>We are in the
                    business of
sustainability</h3>
                    <p>TCSRN founded in 2006,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '90vh' }}
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ControlledCarousel;
