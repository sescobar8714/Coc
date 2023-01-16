import {
    Card, CardBody, CardSubtitle, CardTitle, CardText, CardImg
} from 'reactstrap';
import "./CardInfoTwo.css";

function CardInfoTwo() {
    return (
        <div>
            <Card className="w-100 p-3 mt-5 flex-row">
                <CardBody>
                    <CardTitle className='text-center' tag="h5">
                        Who We Are
                    </CardTitle>
                    <CardSubtitle tag="h6" className="text-center mb-2 text-muted">
                        "We Stand United, and Proud!"
                    </CardSubtitle>
                    <CardText>
                        Join a community that embraces diversity and supports the LGBTQ community.
                        Show your support and be part of a community that is dedicated to creating a more equal society for everyone.
                        Together we can make a difference and build a better future for all.
                        We proudly stand as allies of the LGBTQ community and strive to create a welcoming and accepting environment for all.
                        From community events to local businesses, we strive to promote acceptance and equality for all individuals regardless
                        of their sexual orientation or gender identity. Together, we can make a difference and create a more inclusive world.
                    </CardText>

                </CardBody>

                <CardImg
                    alt="Card image cap"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYm0otFUMJ3X_ds74qrz_X5nuNuZXk9_HSag&usqp=CAU"
                    top
                    width={"100%"}
                    height={"100%"}
                />

            </Card>
        </div >
    );
}



export default CardInfoTwo;           