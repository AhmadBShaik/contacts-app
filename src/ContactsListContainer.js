import "./App.css";
import ContactList from "./ContactList";
function ContactsListContainer({
	isAddContactBtnVisible,
	toggleCreateBtnState,
	contactList,
	addContact,
	setContactList,
}) {
	if (isAddContactBtnVisible) {
		return (
			<div>
				<div className="new-contact-btn">
					<button onClick={toggleCreateBtnState}>
						Create New Contact
					</button>
				</div>
				<ContactList
					contactList={contactList}
					setContactList={setContactList}
					isAddContactBtnVisible={isAddContactBtnVisible}/>
			</div>
		);
	} else {
		return (
			<div className="new-contact-form">
				<div id="already-exists-msg" className="error-msg"></div>
				<div>
					<input
						type="number"
						placeholder="Phone Number"
						id="phone-number"
						required={true}/>
				</div>

				<div>
					<input
						type="text"
						placeholder="First Name"
						id="first-name"
						required={true}/>
				</div>

				<div>
					<input type="text" placeholder="Last Name" id="last-name" />
				</div>

				<div className="form-btns">
					<button
						onClick={toggleCreateBtnState}
						style={{ backgroundColor: "#fac415" }}>
						back
					</button>
					<button
						onClick={addContact}
						style={{ backgroundColor: "#22b629" }}>
						Add Contact
					</button>
				</div>

				<ContactList
					contactList={contactList}
					isAddContactBtnVisible={isAddContactBtnVisible} />
			</div>
		);
	}
}

export default ContactsListContainer;
