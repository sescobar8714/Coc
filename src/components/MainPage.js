import "./MainPage.css";
import Header from "./Header";
import CardInfo from "./CardInfo";
import PicGall from "./PicGall";
import { Card } from "reactstrap";
import CardInfoTwo from "./CardInfoTwo";
import Footer from "./Footer";

function MainPage() {
    return (
        <div>
            <Header></Header>
            <br></br>
            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
                <h2 classname="header-booking"> About Us </h2>
            </Card>

            <CardInfo></CardInfo>
            <br></br>
            <PicGall></PicGall>
            <br></br>
            <Card
                className='m-5'
                body
                inverse
                style={{
                    backgroundColor: '#333',
                    borderColor: '#333'
                }}>
                <h2 classname="header-booking"> Our Brand </h2>
            </Card>
            <CardInfoTwo></CardInfoTwo>
            <br></br>
            <PicGall></PicGall>
            <br></br>
            <Footer></Footer>


        </div>
    );
}

export default MainPage;