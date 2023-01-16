import {
    Carousel, UncontrolledCarousel
} from 'reactstrap';

import Img1 from '../media/14atlantis-cruise-video1200x675.jpg';
import Img2 from '../media/gay-couple-road-trip-1200x675-1.jpg';
import Img3 from '../media/23GAYFLOWER1-video1200x675.jpg';

function PicGall() {
    return (
        <div className='picgall'>

            <UncontrolledCarousel

                items={[
                    {
                        // altText: 'Slide 1',
                        // caption: 'Slide 1',
                        key: 1,
                        src: Img1
                    },
                    {
                        // altText: 'Slide 2',
                        // caption: 'Slide 2',
                        key: 2,
                        src: Img2
                    },
                    {
                        // altText: 'Slide 3',
                        // caption: 'Slide 3',
                        key: 3,
                        src: Img3
                    }
                ]}
            />

        </div>
    );
}

export default PicGall;