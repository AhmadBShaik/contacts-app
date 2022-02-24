
function ActionButtons({ isAddContactBtnVisible, index, contactList, setContactList,setActiveEditContact }) {
    if (isAddContactBtnVisible) {
        return (
            <div className="action-btns">
                <button
                    className="edit-btn"
                    onClick={() => {
                        setActiveEditContact(index);
                    }}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => {
                        setContactList(
                            contactList.filter(
                                (e) => contactList.indexOf(e) !== index
                            )
                        );
                    }}
                >
                    Delete
                </button>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default ActionButtons;