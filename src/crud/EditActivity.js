
function EditActivity({ contact, setActiveEditContact, contactList, setContactList}) {

	function updateContact(contact) {
		const phoneNumberInputElement = document.getElementById(
			`id-${contact.phoneNumber}`
		);

		const updatedPhoneNumber =
			phoneNumberInputElement.children[1].children[1].children[0].value;
		const updatedFirstName =
			phoneNumberInputElement.children[1].children[2].children[0].value;
		const updatedLastName =
			phoneNumberInputElement.children[1].children[3].children[0].value;

		let isUpdatedPhoneNumberAlreadyExist = false;

		for (let c of contactList) {
			if (c.phoneNumber === updatedPhoneNumber && c !== contact) {
				isUpdatedPhoneNumberAlreadyExist = true;
			}
		}
		if (!isUpdatedPhoneNumberAlreadyExist) {
			// Update contact details

			const updatedContactList = contactList
				.map((e) => {
					if (contact === e) {
						return {
							phoneNumber: updatedPhoneNumber,
							firstName: updatedFirstName,
							lastName: updatedLastName,
						};
					} else {
						return e;
					}
				})
				.sort((a, b) => {
					if (
						a.firstName + " " + a.lastName >
						b.firstName + " " + b.lastName
					)
						return 1;
					else return -1;
				});

			setContactList(updatedContactList);

			setActiveEditContact((prevState) => !prevState);
			document.getElementById("already-exists-msg").innerHTML = "";
		} else {
			// Display error message
			document.getElementById("already-exists-msg").innerHTML =
				"contact number already exists!";
		}
	}

    return (
        <div className="new-contact-form">
            <div id="already-exists-msg" className="error-msg"></div>
            <div>
                <input
                    type="number"
                    placeholder="Phone Number"
                    id="phone-number"
                    required={true}
                    defaultValue={contact.phoneNumber}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    id="first-name"
                    required={true}
                    defaultValue={contact.firstName}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Last Name"
                    id="last-name"
                    defaultValue={contact.lastName}
                />
            </div>

            <div className="form-btns">
                <button
                    onClick={() => {
                        setActiveEditContact(null);
                    }}
                    style={{ backgroundColor: "#22b629" }}
                >
                    Back
                </button>
                <button
                    onClick={() => {
                        updateContact(contact);
                    }}
                    style={{ backgroundColor: "#fac415" }}
                >
                    Update
                </button>
            </div>
        </div>
    );
}


export default EditActivity;