function GeneralInfoCard({formData, handleEdit, handleDelete}) {
    return (
        <div className="general-info-card">
            <h3>{formData.name}</h3>
            <p>{formData.streetAddress}</p>
            <p>{formData.city}</p>
            <p>{formData.postalCode}</p>
            <p>{formData.phoneNumber}</p>
            <p>{formData.email}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default GeneralInfoCard;