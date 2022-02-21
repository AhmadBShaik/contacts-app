import ContactsList from './ContactsList';
import './App.css'
import { useState } from 'react'

function App() {

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
              toggle()
          }else{
              document.getElementById('already-exists-msg').innerHTML = "contact number already exists!"
              
              phoneNumberElement.addEventListener(
                  'focus',
                  () => document.getElementById('already-exists-msg').innerHTML = ""
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


  return (
    <div className='container'>
      
      {/* App title */}
      <div className='app-name'>
          <h3>Contacts App</h3>
      </div>

      {/* Searchbar */}
      <div className='search-bar'>
          <input type='text' placeholder='search contacts'/>
      </div>



    <ContactsList 
      isAddContactBtnVisible={ isAddContactBtnVisible } 
      toggle = { toggle } 
      contactList = { contactList } 
      addContact = { addContact }/>
      
    </div>
  );
}

export default App;
