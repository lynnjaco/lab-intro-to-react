import "./ContactUserCard.css";

export const ContactUserCard = (props) => {
    return (
        <div className="contact-card-container">
            <div className="contact-profile-image-container">
                <img src={ props.image } alt="contact profile image"></img>
            </div>
            
            <div className="namne-container">
                <h5 className="first-name">{ props.firstName }</h5>
                <h5 className="last-name">{ props.lastName }</h5>
            </div>
            
            <div className="info-container">
                <h6>{ props.age } y/o</h6>
                <h6> { props.occupation }</h6>
                <h6>{ props.locations }</h6>
            </div> 
            <p>"{ props.tagline }"</p>
        </div>
    )
}