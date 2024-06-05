import { useEffect, useState } from "react";
import { store } from "../../store/store";

function DocumentPreview() {
    const [generalInfo, setGeneralInfo] = useState(store.getState().generalInfo);
    const [educationEntries, setEducationEntries] = useState(store.getState().education);
    const [experienceEntries, setExperienceEntries] = useState(store.getState().experience);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setGeneralInfo(store.getState().generalInfo);
            setEducationEntries(store.getState().education);
            setExperienceEntries(store.getState().experience);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>General Information:</h2>
            <p>Name: {generalInfo.name}</p>
            <p>Street Address: {generalInfo.streetAddress}</p>
            <p>City: {generalInfo.city}</p>
            <p>Postal Code: {generalInfo.postalCode}</p>
            <p>Phone Number: {generalInfo.phoneNumber}</p>
            <p>Email: {generalInfo.email}</p>

            <h2>Education:</h2>
            {educationEntries.map(entry => (
                <div key={entry.id}>
                    <h3>{entry.schoolName}</h3>
                    <p>{entry.schoolCity}</p>
                    <p>{entry.startDate} - {entry.isPresent? 'Present' : entry.endDate}</p>
                    {entry.achievements.map((achievement, index) => (
                        <p key={index}>{achievement}</p>
                    ))}
                </div>
            ))}

            <h2>Experience:</h2>
            {experienceEntries.map(entry => (
                <div key={entry.id}>
                    <h3>{entry.title}</h3>
                    <p>{entry.institution}</p>
                    <p>{entry.startDate} - {entry.isPresent? 'Present' : entry.endDate}</p>
                    {entry.information.map((info, index) => (
                        <p key={index}>{info}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DocumentPreview;