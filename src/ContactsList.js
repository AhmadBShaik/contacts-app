import './App.css'

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
            <div className='new-contact'>
                <button>Create New Contact</button>
            </div>
            

            {/* Contacts */}
            <div className='contact-card'>
                <p className='contact-name'>Saif Ali</p>
                <p className='contact-number'>7894568978</p>
            </div>
            
            <div className='contact-card'>
                <p className='contact-name'>Mudam Yaseen</p>
                <p className='contact-number'>7896868978</p>
            </div>

            <div className='contact-card'>
                <p className='contact-name'>Nazeer</p>
                <p className='contact-number'>78945689578</p>
            </div>
            
            <div className='contact-card'>
                <p className='contact-name'>Ahmad</p>
                <p className='contact-number'>7785568978</p>
            </div>
            
        </div>
    )
}

export default ContactsList;