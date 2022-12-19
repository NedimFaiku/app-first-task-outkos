import "./cards.css";

function Cards({ id, version, label, name, description, button, img }) {
    const checkButton = () => {
        if (label === 'Fix') {
            return <div className="label labelfix">{label}</div>
        }
        else if (label === 'Improvement') {
            return <div className="label labelimporv">{label}</div>
        }
        else {
            return <div className="label">{label}</div>
        }
    }
    return (
        <div className="card-style">
            <h4 className="version">{version}</h4>
            <div className="lineName">
                {checkButton()}
                <div className="name">
                    <img src={img} alt="" className="image" />
                    <h3 className="title">{name}</h3>
                </div>
            </div>
            <h5 className="description">{description}</h5>
            <button className="button">{button}</button>
        </div>
    )
}

export default Cards;