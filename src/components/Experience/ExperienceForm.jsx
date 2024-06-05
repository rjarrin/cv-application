import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import { store } from "../../store/store";
import experienceSlice from "../../store/experienceSlice";

function ExperienceForm({onCancel, onConfirm, initialData}) {
    const [title, setTitle] = useState(initialData?.title || '');
    const [institution, setInstitution] = useState(initialData?.institution || '');
    const [startDate, setStartDate] = useState(initialData?.startDate? new Date(initialData.startDate) : null);
    const [endDate, setEndDate] = useState(initialData?.endDate? new Date(initialData.endDate) : null);
    const [isPresent, setIsPresent] = useState(initialData?.isPresent || false);
    const [information, setInformation] = useState(initialData?.information || []);
    const [id, setId] = useState(initialData?.id || uuidv4());


    function handleInformationChange(index, value) {
        const updatedInformation = [...information];
        updatedInformation[index] = value;
        setInformation(updatedInformation);
    }

    function handleAddInformation() {
        setInformation([...information, '']);
    }

    function handleRemoveInformation(index) {
        const updatedInformation = [...information];
        updatedInformation.splice(index, 1);
        setInformation(updatedInformation);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            id,
            title,
            institution,
            startDate: startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' }),
            endDate: isPresent? 'Present' : endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' }),
            isPresent,
            information
        };
        if (initialData) {
            store.dispatch(experienceSlice.actions.updateExperienceEntry(payload));
        } else {
            store.dispatch(experienceSlice.actions.addExperienceEntry(payload));
        }
        onConfirm(payload);
    }

    return (
        <div className="education-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="institution">Institution:</label>
                    <input type="text" id="institution" name="institution" value={institution} onChange={(e) => setInstitution(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" showMonthYearPicker required></DatePicker>
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <DatePicker selected={isPresent? null : endDate} onChange={(date) => setEndDate(date)} dateFormat="MM/yyyy" showMonthYearPicker disabled={isPresent} ></DatePicker>
                    <div>
                        <input type="checkbox" id="isPresent" name="isPresent" checked={isPresent} onChange={(e) => setIsPresent(e.target.checked)} />
                        <label htmlFor="isPresent">Present</label>
                    </div>
                </div>
                <div>
                    {/* Information */}
                    <label htmlFor="information">Additional Information:</label>
                    {information.map((info, index) => (
                        <div key={index}>
                            <input type="text" value={info} onChange={(e) => handleInformationChange(index, e.target.value)} />
                            <button type="button" onClick={() => handleRemoveInformation(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddInformation}>Add Additional Information</button>
                </div>
                <div>
                    <button type="submit">Confirm</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );

    // function handleInformationChange(index, value) {
    //             const updatedInformation = [...information];
    //             updatedInformation[index] = value;
    //             setInformation(updatedInformation);
    //         }
        
    //         function handleAddInformation() {
    //             setInformation([...information, '']);
    //         }
        
    //         function handleRemoveInformation() {
    //             const updatedInformation = [...information];
    //             updatedInformation.splice(index, 1);
    //             setInformation(updatedInformation);
    //         }
        
    //         function handleSubmit(e) {
    //             e.preventDefault();
    //             onConfirm({title, institution, startDate, endDate: isPresent ? 'Present' : endDate, isPresent, information});
    //         }
}

export default ExperienceForm;


