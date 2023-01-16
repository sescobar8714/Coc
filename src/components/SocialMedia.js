import Header from "./Header";
import { Card } from "reactstrap";

function SocialMedia() {
    return (
        <div>
            <Header />
            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
                <h2 classname="header-social-media"> Social Media  </h2>
            </Card>
            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
            </Card>
        </div>
    );
}

export default SocialMedia 