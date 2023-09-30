import "./About.css";
import about from "../../public/images/john-doe.png";
const About = () => {
    return (
        <div id="about" className='about'>
            <div className="container">
                <div className="image">
                    <img src={about} alt="person-Img" />
                </div>
                <div className="col-2">
                    <h2>
                        About
                    </h2>
                    <span className="line"></span>
                    <p>Iam abdallh elzayat 21years old Front-End Developer RaectJs && UI UX and Graphic designer
                        3years Experience in webDevelopment and
                        1Years Experience as UI UX ,1 year as Graphic Designer Iam Happy to WOrk With you.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint, possimus ducimus beatae sit quos vitae?
                    </p>
                    <button className="button">Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About;