function ExperienceCard({entry, onEdit, onDelete}) {
    return (
        <div className="experience-card">
            <h3>{entry.title}</h3>
            <p>{entry.institution}</p>
            <p>{entry.startDate ? entry.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''} - {entry.isPresent ? 'Present' : entry.endDate ? entry.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''}</p>

            {entry.information.length > 0 && (
                <>
                    <h4>Additional Information</h4>
                    <ul>
                        {entry.information.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                </>
            )}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default ExperienceCard;