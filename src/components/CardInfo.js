import {
    Card, CardBody, CardSubtitle, CardTitle, CardText, CardImg
} from 'reactstrap';
import "./CardInfo.css";
import { Link } from 'react-router-dom';

function CardInfo() {
    return (
        <div>
            <Card className="w-100 p-3 mt-5 flex-row">
                <CardBody>
                    <CardTitle className='text-center' tag="h5">
                        We Provide A Fantastic Experience
                    </CardTitle>
                    <CardSubtitle tag="h6" className="text-center mb-2 text-muted">
                        "Our Charter company provides great service with a colorful touch"
                    </CardSubtitle>
                    <CardText>
                        Discover the luxury and freedom of sailing on a yacht!
                        From romantic couples to supportive groups, yachting is creating a safe and inclusive
                        environment for all members of the LGBTQ community to enjoy.
                        With more and more yacht charter companies catering to the residents of chicago,
                        it's never been easier to set sail and explore the world in style and acceptance.
                        Explore the open seas and celebrate diversity with luxurious yachts.
                    </CardText>

                    <CardText>
                        Discover the beauty of the ocean and enjoy the freedom of being yourself on a yacht charter today!
                    </CardText>
                    <Link className='text-center' to="/bookings">
                        <h5 className="h5-header">Book With Us!</h5>
                    </Link>
                </CardBody>

                <CardImg
                    alt="Card image cap"
                    src="http://na.rdcpix.com/0fbe2c064aca59ed42d5847195f43046w-c3583091836xd-w640_h480_q80.jpg"
                    top
                    width={"100%"}
                    height="auto"
                />

            </Card>
        </div >
    );
}



export default CardInfo;           