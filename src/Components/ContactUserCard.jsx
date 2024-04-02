import "./ContactUserCard.css";

export const ContactUserCard = (props) => {

    <div>
        <div>
            <img src={ props.image } alt="contact profile image"></img>
        </div>
        <div>
            <h3>{ props.firstName }</h3>
            <h4>{ props.lastName }</h4>
        </div>
        <div>
            <h6>{ props.age }</h6>
            <h6>{ props.occupation }</h6>
            <h6>{ props.locations }</h6>
        </div> 
        <p>{ props.tagline }</p>
    </div>
}