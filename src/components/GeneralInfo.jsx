// import ExpandableWindow from "./Common/ExpandableWindow";
// import '../styles/GeneralInfo.css';

// function GeneralInfo() {
//     return (
//         <ExpandableWindow title="General Information">
//             <form>
//                 {/* Full name */}
//                 <label htmlFor="name">Full Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your full name" />

//                 {/* Street Address */}
//                 <label htmlFor="streetAddress">Street Address:</label>
//                 <input type="text" id="streetAddress" name="streetAddress" placeholder="Enter your street address" />

//                 {/* City */}
//                 <label htmlFor="city">City:</label>
//                 <input type="text" id="city" name="city" placeholder="Enter your city" />

//                 {/* Postal Code */}
//                 <label htmlFor="postalCode">Postal Code:</label>
//                 <input type="text" id="postalCode" name="postalCode" placeholder="Enter your postal code" />

//                 {/* Phone number */}
//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />

//                 {/* Email */}
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" placeholder="Enter your email" />
//             </form>
//         </ExpandableWindow>
//     );
// }

// export default GeneralInfo;

import ExpandableWindow from "../components/Common/ExpandableWindow";
import GeneralInfoForm from "./GeneralInfoForm";
import GeneralInfoCard from "./GeneralInfoCard";
import "../styles/GeneralInfo.css"
import { useState } from "react";

function GeneralInfo() {
    const [formData, setFormData] = useState({name: '', streetAddress: '', city: '', postalCode: '', phoneNumber: '', email: ''});
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }));
    }

    function handleConfirm(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    function handleDelete() {
        setFormData({
            name: '', streetAddress: '', city: '', postalCode: '', phoneNumber: '', email: ''
        });
        setIsEditing(true);
    }

    return (
        <ExpandableWindow title="General Information">
            {isEditing ? (
                <GeneralInfoForm formData={formData} handleChange={handleChange} handleConfirm={handleConfirm} handleCancel={handleDelete}></GeneralInfoForm>
            ) : (
                <GeneralInfoCard formData={formData} handleEdit={handleEdit} handleDelete={handleDelete}></GeneralInfoCard>
            )}
        </ExpandableWindow>
    );
}

export default GeneralInfo;