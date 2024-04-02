import "./Post.css";

export const Post = (props) => {

    return (
        <div className="post-container">
            <div className="post-info">
                <h3>{ props.post_title }</h3>
                <h5>{ props.date_added }</h5>
                <p>{ props.post }</p>
            </div>
            <div className="post-image">
                <img src={ props.image }></img>
            </div>
        </div>
    )
}