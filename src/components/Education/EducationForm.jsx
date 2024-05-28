import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function EducationForm({onCancel, onConfirm, initialData}) {
    const [schoolName, setSchoolName] = useState(initialData?.schoolName || '');
    const [schoolCity, setSchoolCity] = useState(initialData?.schoolCity || '');
    const [startDate, setStartDate] = useState(initialData?.startDate ? new Date(initialData.startDate) : null);
    const [endDate, setEndDate] = useState(initialData?.endDate ? new Date(initialData.endDate) : null);
    const [isPresent, setIsPresent] = useState(initialData?.isPresent || false);
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
        onConfirm({schoolName, schoolCity, startDate, endDate: isPresent ? 'Present' : endDate, isPresent, achievements});
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
                    <label htmlFor="startDate">Start Date:</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" showMonthYearPicker required ></DatePicker>
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <DatePicker selected={isPresent ? null : endDate} onChange={(date) => setEndDate(date)} dateFormat="MM/yyyy" showMonthYearPicker disabled={isPresent} ></DatePicker>
                    <div>
                        <input type="checkbox" id="isPresent" name="isPresent" checked={isPresent} onChange={(e) => setIsPresent(e.target.checked)}></input>
                        <label htmlFor="isPresent">Present</label>
                    </div>
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
                <div>
                    <button type="submit">Confirm</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
                
            </form>
        </div>
    );
}

export default EducationForm;