import { Card } from "reactstrap";

function Footer() {
    return (
        <footer class="bg-dark text-primary page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Carnival of Charters </h5>
                        <p>Check us out at our the social networks</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"></hr>

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Facebook</a>
                            </li>
                            <li>
                                <a href="#!">Twitter</a>
                            </li><li>
                                <a href="#!">Instagram</a>
                            </li><li>
                                <a href="#!">Tik Tok</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );

}

export default Footer;