import { useState } from 'react'
import '../../styles/ExpandableWindow.css'

function ExpandableWindow({title, children}) {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleExpansion() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={`expandable-window ${isExpanded? 'expanded' : ''}`}>
            <div className="title" onClick={toggleExpansion}>
                <span>{title}</span>
                <span className="arrow">{isExpanded? '▼' : '►'}</span>
            </div>
            {children}
        </div>
    );
}

export default ExpandableWindow;