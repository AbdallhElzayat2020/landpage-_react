import "./Testimonials.css"
import user1 from "../../public/images/user1.jpeg"
import user2 from "../../public/images/user2.jpeg"
import user3 from "../../public/images/user3.jpeg"

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <span className="line"></span>
                <div className="content">
                    <div className="card">
                        <img src={user3} alt="user1" />
                        <p>Iam abdallh elzayat 21years old Front-End Developer RaectJs && UI UX and Graphic designer
                            3years Experience in webDevelopment and
                            1Years Experience as UI UX ,1 year as Graphic Designer Iam Happy to WOrk With you.
                        </p>
                        <p><span>Abdallh Elzayat</span></p>
                        <p>FullStack Developer</p>
                    </div>
                    <div className="card">
                        <img src={user2} alt="user2" />
                        <p>Iam abdallh elzayat 21years old Front-End Developer RaectJs && UI UX and Graphic designer
                            3years Experience in webDevelopment and
                            1Years Experience as UI UX ,1 year as Graphic Designer Iam Happy to WOrk With you.
                        </p>
                        <p><span>Abdallh Elzayat</span></p>
                        <p>FullStack Developer</p>
                    </div>
                    <div className="card">
                        <img src={user1} alt="user3" />
                        <p>Iam abdallh elzayat 21years old Front-End Developer RaectJs && UI UX and Graphic designer
                            3years Experience in webDevelopment and
                            1Years Experience as UI UX ,1 year as Graphic Designer Iam Happy to WOrk With you.
                        </p>
                        <p><span>Abdallh Elzayat</span></p>
                        <p>FullStack Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;