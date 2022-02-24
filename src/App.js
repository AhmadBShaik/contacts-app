import "./App.css";
import { useState } from "react";
import SearchContactListToggler from "./search/SearchContactListToggler";



function App() {
	const [isAddContactBtnVisible, setIsAddContactBtnVisible] = useState(true);
	const [contactList, setContactList] = useState([]);
	const [isSearchbarActive, setSearchbarStatus] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	function toggleCreateBtnState() {
		setIsAddContactBtnVisible((prevState) => !prevState);
	}

	function activeSearchHandler() {
		document.getElementById("back-search-btn").style.display = "block";
		document.getElementById("cancel-search-btn").style.display = "block";
		setSearchbarStatus(true);
	}
	
	function backSearchHandler() {
		document.getElementById("search-input-field").value = "";
		document.getElementById("search-input-field").style.width = "95%";
		document.getElementById("back-search-btn").style.display = "none";
		document.getElementById("cancel-search-btn").style.display = "none";
		setSearchbarStatus(false);
		setSearchQuery("");
	}
	
	function cancelSearchHandler() {
		document.getElementById("search-input-field").value = "";
		document.getElementById("search-input-field").focus();
	}

	function searchHandler(e) {
		const query = e.target.value;
		setSearchQuery(query);
	}

	function addContact() {
		const phoneNumber = document.getElementById("phone-number").value;
		const firstName = document.getElementById("first-name").value;
		const lastName = document.getElementById("last-name").value;

		const phoneNumberElement = document.getElementById("phone-number");
		const firstNameElement = document.getElementById("first-name");

		if (phoneNumber.trim() !== "" && firstName.trim() !== "") {
			if (
				contactList.filter(
					(contact) => contact.phoneNumber === phoneNumber
				).length === 0
			) {
				const newContact = { phoneNumber, firstName, lastName };

				const updatedContactList = [...contactList, newContact].sort(
					(a, b) => {
						if (
							a.firstName + " " + a.lastName >
							b.firstName + " " + b.lastName
						)
							return 1;
						else return -1;
					}
				);

				setContactList(updatedContactList);
				toggleCreateBtnState();
			} else {
				document.getElementById("already-exists-msg").innerHTML =
					"contact number already exists!";

				phoneNumberElement.addEventListener(
					"focus",
					() =>
					(document.getElementById(
						"already-exists-msg"
					).innerHTML = "")
				);
			}
		} else {
			phoneNumberElement.style.borderColor = "red";
			firstNameElement.style.borderColor = "red";

			phoneNumberElement.addEventListener(
				"focus",
				() => (phoneNumberElement.style.borderColor = "#25bda8")
			);

			firstNameElement.addEventListener(
				"focus",
				() => (firstNameElement.style.borderColor = "#25bda8")
			);
		}
	}


	return (
		<div className="container">
			{/* App title */}
			<div className="app-name">
				<h3>Contacts App</h3>
			</div>

			{/* Searchbar */}
			{isAddContactBtnVisible && (
				<div
					className="search-bar"
					id="search-bar"
					onFocus={activeSearchHandler}>
					<button 
						id="back-search-btn" 
						onClick={backSearchHandler}>
						&#8592;
					</button>
					<input
						type="text"
						placeholder="search contacts"
						onChange={searchHandler}
						id="search-input-field"/>
					<button
						id="cancel-search-btn"
						onClick={cancelSearchHandler}>
						&#10006;
					</button>
				</div>
			)}

			{/* toggles search and contactlist */}
			<SearchContactListToggler
				addContact={addContact}			
				searchQuery={searchQuery}
				contactList={contactList}
				setContactList={setContactList}
				isSearchbarActive = {isSearchbarActive}
				toggleCreateBtnState={toggleCreateBtnState}
				isAddContactBtnVisible={isAddContactBtnVisible}/>
		</div>
	);
}

export default App;
