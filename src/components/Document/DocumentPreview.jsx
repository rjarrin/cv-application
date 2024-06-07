import { useState, useEffect } from "react";
import { store } from "../../store/store";
import "../../styles/DocumentPreview.css";

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
        <div className="container">
            <div className="header">
                <h1 className="name">{generalInfo.name}</h1>
                <p className="contactInfo">
                    {generalInfo.streetAddress}, {generalInfo.city}, {generalInfo.postalCode}
                </p>
                <p className="contactInfo">{generalInfo.phoneNumber} | {generalInfo.email}</p>
            </div>

            <div className="mainContent">
                <div className="section">
                    <h2 className="sectionTitle">Education:</h2>
                    {educationEntries.map(entry => (
                        <div key={entry.id} className="entry">
                            <h3 className="entryTitle">{entry.schoolName}</h3>
                            <p className="entryDetails">{entry.schoolCity}</p>
                            <p className="entryDetails">{entry.startDate} - {entry.isPresent ? 'Present' : entry.endDate}</p>
                            <ul className="achievementList">
                                {entry.achievements.map((achievement, index) => (
                                    <li key={index} className="achievementItem">{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="section">
                    <h2 className="sectionTitle">Experience:</h2>
                    {experienceEntries.map(entry => (
                        <div key={entry.id} className="entry">
                            <h3 className="entryTitle">{entry.title}</h3>
                            <p className="entryDetails">{entry.institution}</p>
                            <p className="entryDetails">{entry.startDate} - {entry.isPresent ? 'Present' : entry.endDate}</p>
                            <ul className="achievementList">
                                {entry.information.map((info, index) => (
                                    <li key={index} className="achievementItem">{info}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <aside className="aside">
                <img className="photo" src="https://via.placeholder.com/150" alt="Profile Photo" />
                <h2 className="sectionTitle">Skills</h2>
                <ul className="skillsList">
                    <li className="skillItem">JavaScript</li>
                    <li className="skillItem">React</li>
                    <li className="skillItem">Redux</li>
                    <li className="skillItem">HTML & CSS</li>
                    <li className="skillItem">Node.js</li>
                </ul>

                <h2 className="sectionTitle">Achievements</h2>
                <ul className="achievementList">
                    <li className="achievementItem">Developed a full-stack web application</li>
                    <li className="achievementItem">Implemented a responsive design</li>
                    <li className="achievementItem">Optimized performance for a large-scale project</li>
                    <li className="achievementItem">Contributed to open-source projects</li>
                </ul>
            </aside>
        </div>
    );
}

export default DocumentPreview;
