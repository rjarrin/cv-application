import { useState } from "react";

function EducationForm({onCancel, onConfirm, initialData}) {
    const [schoolName, setSchoolName] = useState(initialData?.schoolName || '');
    const [schoolCity, setSchoolCity] = useState(initialData?.schoolCity || '');
    const [startYear, setStartYear] = useState(initialData?.startYear || '');
    const [endYear, setEndYear] = useState(initialData?.endYear || '');
    const [achievements, setAchievements] = useState(initialData?.achievements || []);

    function handleAcheivementChange(index, value) {
        const updatedAcheivements = [...achievements];
        updatedAcheivements[index] = value;
        setAchievements(updatedAcheivements);
    }

    function handleAddAchievement() {
        setAchievements([...achievements, '']);
    }

    function handleRemoveAchievement(index) {
        const updatedAcheivements = [...achievements];
        updatedAcheivements.splice(index, 1);
        setAchievements(updatedAcheivements);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onConfirm({schoolName, schoolCity, startYear, endYear, achievements});
    }

    return (
        <div className="education-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="schoolName">School Name:</label>
                    <input type="text" id="schoolName" name="schoolName" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="schoolCity">School City:</label>
                    <input type="text" id="schoolCity" name="schoolCity" value={schoolCity} onChange={(e) => setSchoolCity(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="startYear">Start Year:</label>
                    <input type="number" id="startYear" name="startYear" value={startYear} onChange={(e) => setStartYear(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="endYear">End Year:</label>
                    <input type="number" id="endYeah" name="endYear" value={endYear} onChange={(e) => setEndYear(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="acheivements">Achievements:</label>
                    {achievements.map((achievement, index) => (
                        <div key={index}>
                            <input type="text" value={achievement} onChange={(e) => handleAcheivementChange(index, e.target.value)} />
                            <button type="button" onClick={() => handleRemoveAchievement(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddAchievement}>Add Achievement</button>
                </div>
                <button type="submit">Confirm</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default EducationForm;