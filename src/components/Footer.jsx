import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul className=" nav-menu ">
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <div className="bottomm">
                    <p className="color">2023 Abdallh Elzayat</p>
                </div>
            </div>
        </div >
    )
}

export default Footer