import ExpandableWindow from "../Common/ExpandableWindow";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import '../../styles/Education.css'
import { useState } from "react";

function Education() {
    const [educationEntries, setEducationEntries] = useState([]);
    const [isAdding, setIsAdding]= useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    function handleAddClick() {
        setIsAdding(true);
    }

    function handleCancel() {
        setIsAdding(false);
    }

    function handleConfirm(entry) {
        if(currentEditIndex !== null) {
            const updatedEntries = [...educationEntries];
            updatedEntries[currentEditIndex] = entry;
            setEducationEntries(updatedEntries);
        } else {
            setEducationEntries([...educationEntries, entry]);
        }
        setIsAdding(false);
        setCurrentEditIndex(null);
    }

    function handleEdit(index) {
        setCurrentEditIndex(index);
        setIsAdding(true);
    }

    function handleDelete(index) {
        const updatedEntries = educationEntries.filter((_, i) => i !== index);
        setEducationEntries(updatedEntries);
    }

    return (
        <ExpandableWindow title="Education">
            {isAdding && (
                <EducationForm onCancel={handleCancel} onConfirm={handleConfirm} initialData={currentEditIndex !== null ? educationEntries[currentEditIndex] : null}></EducationForm>
            )}
            {!isAdding && (
                <>
                    {educationEntries.length === 0 ? (
                        <p>No Entries Yet</p>
                    ) : (
                        educationEntries.map((entry, index) => (
                            <EducationCard key={index} entry={entry} onEdit={() => handleEdit(index)} onDelete={() => handleDelete(index)} />
                        ))
                    )}
                    <button onClick={handleAddClick} disabled={isAdding}>Add Education</button>
                </>
            )}
        </ExpandableWindow>
    );
}

export default Education;