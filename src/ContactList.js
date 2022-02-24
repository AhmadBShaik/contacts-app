import { useState } from "react";
import ActionSwapper from "./crud/ActionSwapper";

function ContactList({ contactList, isAddContactBtnVisible, setContactList }) {
	const [activeEditContact, setActiveEditContact] = useState(null);

	return (
		<ul>
			{contactList.map((contact) => (
		
                <li
					key={contact.phoneNumber.toString()}
					id={`id-${contact.phoneNumber}`}
					className="contact-card">

					<div className="contact-content">
						{contactList.indexOf(contact) !== activeEditContact && (
							<div>
								<p className="contact-name">
									{`${contact.firstName} ${contact.lastName}`}
								</p>
								<p className="contact-number">
									{contact.phoneNumber}
								</p>
							</div>
						)}
						<div
							style={{
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
							}}>

							{contactList.indexOf(contact) !==
								activeEditContact && (
								<button className="call-btn">Call</button>
							)}
						</div>
					</div>

					<ActionSwapper
						index={contactList.indexOf(contact)}
						contact={contact}
                        contactList={contactList}
                        setContactList={setContactList}
                        activeEditContact={activeEditContact}
                        setActiveEditContact={setActiveEditContact}
						isAddContactBtnVisible={isAddContactBtnVisible}
					/>
				</li>
			))}
		</ul>
	);
}

export default ContactList;
