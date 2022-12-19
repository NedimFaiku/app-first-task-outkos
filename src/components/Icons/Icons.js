import "./icons.css";

function Icons({ logo, title, description }) {
    return (

        <div className="icon-style">
            <div className="logo">
                <img className="img" src={logo} alt="logo" />
            </div>

            <div className="title-desc">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Icons;