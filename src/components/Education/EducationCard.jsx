function EducationCard({entry, onEdit, onDelete}) {
    return (
        <div className="education-card">
        <h3>{entry.schoolName}</h3>
        <p>{entry.schoolCity}</p>
        <p>{entry.startYear} - {entry.endYear}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
    ); 
}

export default EducationCard;