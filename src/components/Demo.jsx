import "./Demo.css"
const Demo = () => {
    return (
        <div className="demo" id="demo">
            <div className="container">
                <div className="col-1">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti tempora hic excepturi voluptatibus in officiis error labore. Fuga, veritatis omnis.</p>
                    <button className="button">Get Started</button>
                </div>
                <div className="col-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HnIvgdrVXVE?si=3_3X27wU8aCCA7Z3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Demo