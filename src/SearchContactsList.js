import { useState } from "react";
import ActionSwapper from "./crud/ActionSwapper";
import EmptyContactList from "./EmptyContactList";

function SearchContactsList({
	contactList,
	searchQuery,
	setContactList,
	isAddContactBtnVisible,
}) {

	const [activeEditContact, setActiveEditContact] = useState(null);

	return(
		<div>
			{contactList.length === 0?
			<EmptyContactList /> :
			<ul>
				{contactList.map((contact) => (
					(contact.phoneNumber.includes(searchQuery.trim()) ||
					(contact.firstName + " " + contact.lastName)
						.toLowerCase()
						.trim()
						.includes(searchQuery.toLowerCase())) && searchQuery !== "" &&
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
										<a href={`tel:${contact.phoneNumber}`}><button className="call-btn">Call</button></a>
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
			}
		</div>
	)
}

export default SearchContactsList;
