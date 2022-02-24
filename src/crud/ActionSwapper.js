import ActionButtons from "./ActionButtons";
import EditActivity from "./EditActivity";

function ActionSwapper({ 
    index, 
    contact, 
    contactList, 
    setContactList, 
    activeEditContact, 
    setActiveEditContact, 
    isAddContactBtnVisible 
}
 ){
    if (index === activeEditContact) {
        return <EditActivity 
                contact={contact} 
                setActiveEditContact={setActiveEditContact}
                contactList={contactList}
                setContactList={setContactList}
                />;
    } else {
        return (
            <ActionButtons
                isAddContactBtnVisible={isAddContactBtnVisible}
                index={index}
                contactList={contactList}
                setContactList={setContactList}
                setActiveEditContact={setActiveEditContact}
            />
        );
    }
}

export default ActionSwapper;