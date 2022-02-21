import './App.css'
function ContactsList({ isAddContactBtnVisible, toggle, contactList, addContact}){
    


    if(isAddContactBtnVisible){
        return(
            <div>
                <div className='new-contact-btn'>
                    <button onClick={ toggle } >Create New Contact</button>
                </div>
                <ul>
                    { contactList.map(contact => (
                        <li key={contact.phoneNumber} className="contact-card">
                            <p className="contact-name">
                            { `${contact.firstName} ${contact.lastName}`}

                            </p>
                            <p className="contact-number">
                                {contact.phoneNumber}
                            </p>
                        </li>
                    )) }
                </ul>
            </div>
        )
    }else{
        return(
            
            <div className='new-contact-form'>
                <div id="already-exists-msg" className="error-msg"></div>
                <div>
                    <input type='number' placeholder='Phone Number' id="phone-number" required={ true }/>
                </div>

                <div>
                    <input type='text' placeholder='First Name' id="first-name" required={ true }/>
                </div>

                <div>
                    <input type='text' placeholder='Last Name' id="last-name"/>
                </div>

                <div className="form-btns">
                    <button onClick={ toggle } style={ {backgroundColor: '#fac415'}}>back</button>
                    <button onClick={ addContact } style={ {backgroundColor: '#22b629'}}>Add Contact</button>
                </div>

                <ul>
                    { contactList.map(contact => (
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

            </div>
        )
    }
    
}

export default ContactsList;