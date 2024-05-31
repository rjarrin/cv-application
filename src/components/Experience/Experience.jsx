import ExpandableWindow from "../Common/ExpandableWindow";
import ExperienceForm from "./ExperienceForm";
import ExperienceCard from "./ExperienceCard";
import "../../styles/Experience.css"
import { useState } from "react";

function Experience() {
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    function handleAddClick() {
        setIsAdding(true);
    }

    function handleCancel() {
        setIsAdding(false);
    }

    function handleConfirm(entry) {
        if(currentEditIndex !== null) {
            const updatedEntries = [...experienceEntries];
            updatedEntries[currentEditIndex] = entry;
            setExperienceEntries(updatedEntries);
        } else {
            setExperienceEntries([...experienceEntries, entry]);
        }
        setIsAdding(false);
        setCurrentEditIndex(null);
    }

    function handleEdit(index) {
        setCurrentEditIndex(index);
        setIsAdding(true);
    }

    function handleDelete(index) {
        const updatedEntries = experienceEntries.filter((_, i) => i !== index);
        setExperienceEntries(updatedEntries);
    }

    return (
        <ExpandableWindow title="Experience">
            {isAdding && (
                <ExperienceForm onCancel={handleCancel} onConfirm={handleConfirm} initialData={currentEditIndex !== null ? experienceEntries[currentEditIndex] : null}></ExperienceForm>
            )}
            {!isAdding && (
                <>
                    {experienceEntries.length === 0 ? (
                        <p>No Entries Yet</p>
                    ) : (
                        experienceEntries.map((entry, index) => (
                            <ExperienceCard key={index} entry={entry} onEdit={() => handleEdit(index)} onDelete={() => handleDelete(index)} />
                        ))
                    )}
                    <button onClick={handleAddClick} disabled={isAdding}>Add Experience</button>
                </>
            )}
        </ExpandableWindow>
    );
}

export default Experience;