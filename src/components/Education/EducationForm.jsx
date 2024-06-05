import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from "uuid";
import { store } from "../../store/store";
import educationSlice from "../../store/educationSlice";

function EducationForm({onCancel, onConfirm, initialData}) {
    const [schoolName, setSchoolName] = useState(initialData?.schoolName || '');
    const [schoolCity, setSchoolCity] = useState(initialData?.schoolCity || '');
    const [startDate, setStartDate] = useState(initialData?.startDate? new Date(initialData.startDate) : null);
    const [endDate, setEndDate] = useState(initialData?.endDate? new Date(initialData.endDate) : null);
    const [isPresent, setIsPresent] = useState(initialData?.isPresent || false);
    const [achievements, setAchievements] = useState(initialData?.achievements || []);
    const [id, setId] = useState(initialData?.id || uuidv4());

    function handleAcheivementChange(index, value) {
        const updatedAchievements = [...achievements];
        updatedAchievements[index] = value;
        setAchievements(updatedAchievements);
    }

    function handleAddAchievement() {
        setAchievements([...achievements, '']);
    }

    function handleRemoveAchievement(index) {
        const updatedAchievements = [...achievements];
        updatedAchievements.splice(index, 1);
        setAchievements(updatedAchievements);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            id,
            schoolName,
            schoolCity,
            startDate: startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' }),
            endDate: isPresent? 'Present' : endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' }),
            isPresent,
            achievements
        };
        if (initialData) {
            store.dispatch(educationSlice.actions.updateEducationEntry(payload));
        } else {
            store.dispatch(educationSlice.actions.addEducationEntry(payload));
        }
        onConfirm(payload);
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
                    <label htmlFor="achievements">Achievements:</label>
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













































