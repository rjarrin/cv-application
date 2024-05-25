import { useState } from "react";
import '../styles/GeneralInfo.css';

// function toggleExpansion() {
//     setIsExpanded(!isExpanded);
// }

function GeneralInfo() {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpansion() {
        setIsExpanded(!isExpanded);
    }
    
    return (
        <div className={`general-info ${isExpanded? 'expanded' : ''}`}>
            <div className="title"  onClick={toggleExpansion}>
                <span>General Information</span>
                <span className="arrow">{isExpanded? '▼' : '>'}</span>
            </div>
            {isExpanded && (
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </form>
            )}
        </div>
    );
}

export default GeneralInfo;