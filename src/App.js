import './App.css'
import { useState } from 'react'
import ContactsList from './ContactsList';
import SearchContactsList from './SearchContactsList';
import EmptyContactList from './EmptyContactList';

function App() {

  const [isAddContactBtnVisible, setIsAddContactBtnVisible] = useState(true)
  const [contactList, setContactList] = useState([])
  const [isSearchbarActive, setSearchbarStatus] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  function toggleStatusbarState(){
    setSearchbarStatus(prevState => !prevState)
  }

  function toggleCreateBtnState(){
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
                toggleCreateBtnState()
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
          
      }
    }
    
    function searchHandler(e){
        const query = e.target.value
        setSearchQuery(query)        
    }
  
  let UI;
  
  if(!isSearchbarActive){
    
    UI = <>
          <ContactsList 
            isAddContactBtnVisible={ isAddContactBtnVisible } 
            toggleCreateBtnState = { toggleCreateBtnState } 
            contactList = { contactList } 
            addContact = { addContact }/>
            {contactList.length === 0 && <EmptyContactList/>} 
        </>
  }else{

    UI = <SearchContactsList
      contactList = { contactList }
      searchQuery = { searchQuery }
    />
  }
    
  return (
    <div className='container'>
      
      {/* App title */}
      <div className='app-name'>
          <h3>Contacts App</h3>
      </div>

      {/* Searchbar */}
      <div className='search-bar' id='search-bar' 
        onFocus={toggleStatusbarState} 
        onBlur= {toggleStatusbarState}
        >
          <input type='text' placeholder='search contacts' onChange={ searchHandler }/>
      </div>

    {UI}

    </div>
  );
}

export default App;
