import './App.css'
import NewContact from './NewContact'

function ContactsList(){
    
    return (
        <div>
            {/* App Name */}
            <div className='app-name'>
                <h3>Contacts App</h3>
            </div>

            {/* Searchbar */}
            <div className='search-bar'>
                <input type='text' placeholder='search contacts'/>
            </div>

            {/* Create new contact */}
            <NewContact/>

            {/* Contacts */}
           
        </div>
    )
}

export default ContactsList;