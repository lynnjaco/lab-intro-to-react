import "./UserProfile.css";


export const UserProfile = () => {
    return (
        <div id="user-profile-container">
            <div id="user-profile-image">
                <img src="https://images.pexels.com/photos/8845637/pexels-photo-8845637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user profile photo"></img>
            </div>
            <div id="user-info">
                <h2>Lynnette Jacobs</h2>
                <h5>Artist | Software Developer | Lemonade Connoisseur</h5>
                <p>Mastering the Art of Code, Canvas, and Citrus Creations with a Refreshing Splash of Innovation</p>
            </div>
        </div>
    )
}