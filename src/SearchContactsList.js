import EmptyContactList from './EmptyContactList'

function SearchContactsList({ contactList, searchQuery}){
    
    const searchContactList = contactList
                                    .filter(e => (e.phoneNumber).includes(searchQuery) ||
                                        ((e.firstName + " "+ e.lastName).toLowerCase().trim())
                                            .includes(searchQuery.toLowerCase().trim())
                                    )

    let searchContactsUI;
    
    if(contactList.length === 0){
        searchContactsUI = <EmptyContactList/> 
    }else{

        searchContactsUI = <ul>
                { searchContactList.map(contact => (
                    <li key={contact.phoneNumber.toString()} className="contact-card">
                        <p className="contact-name">
                            { `${contact.firstName} ${contact.lastName}`}
                        </p>
                        <p className="contact-number">
                            {contact.phoneNumber}
                        </p>
                    </li>
                )) }
            </ul>
    }
    return (
        <div>

            {searchContactsUI}
        </div>
    )
}

export default SearchContactsList