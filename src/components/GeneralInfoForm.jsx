function GeneralInfoForm({formData, handleChange, handleConfirm, handleCancel}) {
    return (
        <form onSubmit={handleConfirm}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />

            <label htmlFor="streetAddress">Street Address:</label>
            <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="Enter your street address" required />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" required />

            <label htmlFor="postalCode">Postal Code:</label>
            <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Enter your postal code" required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />

            <button type="submit">Confirm</button>
            <button type="button" onClick={handleCancel}>Cancel</button>

        </form>
    );
} 

export default GeneralInfoForm;