function EducationCard({entry, onEdit, onDelete}) {
    return (
        <div className="education-card">
        <h3>{entry.schoolName}</h3>
        <p>{entry.schoolCity}</p>
        <p>{entry.startYear} - {entry.endYear}</p>

        {entry.achievements.length > 0 && (
            <>
                <h4>Achievements</h4>
                <ul>
                    {entry.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </>
        )}
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
    ); 
}

export default EducationCard;