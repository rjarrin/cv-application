// import { useState } from "react";
// import '../styles/GeneralInfo.css';

// function GeneralInfo() {
//     const [isExpanded, setIsExpanded] = useState(false);

//     function toggleExpansion() {
//         setIsExpanded(!isExpanded);
//     }
    
//     return (
//         <div className={`general-info ${isExpanded? 'expanded' : ''}`}>
//             <div className="title"  onClick={toggleExpansion}>
//                 <span>General Information</span>
//                 <span className="arrow">{isExpanded? '▼' : '>'}</span>
//             </div>
//             <form>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" />
//             </form>
//         </div>
//     );
// }

// export default GeneralInfo;

import ExpandableWindow from "./Common/ExpandableWindow";
import '../styles/GeneralInfo.css';

function GeneralInfo() {
    return (
        <ExpandableWindow title="General Information">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
            </form>
        </ExpandableWindow>
    );
}

export default GeneralInfo;