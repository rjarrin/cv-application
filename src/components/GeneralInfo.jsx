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































