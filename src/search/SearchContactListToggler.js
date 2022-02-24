import ContactsListContainer from "../ContactsListContainer";
import EmptyContactList from "../EmptyContactList";
import SearchContactsList from "../SearchContactsList";

function SearchContactListToggler(
    {   isSearchbarActive, 
        contactList,
        searchQuery, 
        setContactList, 
        isAddContactBtnVisible,
        toggleCreateBtnState,
        addContact 
    }){
    if(!isSearchbarActive){
        return(
            <div>
				<ContactsListContainer
                    toggleCreateBtnState={toggleCreateBtnState}
                    addContact={addContact}
                    contactList={contactList}
                    setContactList={setContactList}
                    isAddContactBtnVisible={isAddContactBtnVisible}
				/>
				{contactList.length === 0 && <EmptyContactList />}
			</div>
        )
    }else{
        return(
            <SearchContactsList
                searchQuery={searchQuery}
				contactList={contactList}
				setContactList={setContactList}
				isAddContactBtnVisible={isAddContactBtnVisible}
			/>
        )
    }
}

export default SearchContactListToggler;