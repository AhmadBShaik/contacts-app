import { useState } from "react";
import './App.css'

function NewContact(){

    const [isAddContactBtnVisible, setIsAddContactBtnVisible] = useState(true)
    const [contactList, setContactList] = useState([])

    function toggle(){
        setIsAddContactBtnVisible(prevState => !prevState)
    }

    function addContact(){
        
        const phoneNumber = document.getElementById('phone-number').value
        const firstName = document.getElementById('first-name').value
        const lastName = document.getElementById('last-name').value

        const phoneNumberElement = document.getElementById('phone-number')
        const firstNameElement = document.getElementById('first-name')
        

        if(phoneNumber.trim() !== "" && firstName.trim() !== "") {
            
            if(contactList.filter(contact => contact.phoneNumber == phoneNumber).length === 0){
                const newContact = {phoneNumber, firstName, lastName}
                setContactList([...contactList, newContact])
            }else{
                document.getElementById('already-exists-msg').innerHTML = "contact number already exists!"
                
                phoneNumberElement.addEventListener(
                    'focus',
                    ()=> document.getElementById('already-exists-msg').innerHTML = ""
                    )
                }
            
            
        }else{
            
            phoneNumberElement.style.borderColor = "red"            
            firstNameElement.style.borderColor = "red"
            
            phoneNumberElement.addEventListener(
                'focus',
                 ()=> phoneNumberElement.style.borderColor = "#25bda8"
            )
            firstNameElement.addEventListener(
                'focus',
                 ()=> firstNameElement.style.borderColor = "#25bda8"
            )
            console.log("empty")
        }
    }

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

export default NewContact;