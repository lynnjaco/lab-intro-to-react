import { contactlist } from "../Data/contactlist"
import { ContactUserCard } from "./ContactUserCard"

export const Contacts = () => {
    return (
        <div id="contacts-container">
            { contactlist.map((friend) => <ContactUserCard 
            image={ friend.image }
            firstName={ friend.firstName}
            lastName={ friend.lastName}
            age={ friend.age }
            occupation={ friend.occupation }
            location={ friend.location }
            tagline={ friend.tagline }
                />) }
        </div>
    )

}