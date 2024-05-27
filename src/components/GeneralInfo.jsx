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
                {/* Full name */}
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" />

                {/* Street Address */}
                <label htmlFor="streetAddress">Street Address:</label>
                <input type="text" id="streetAddress" name="streetAddress" placeholder="Enter your street address" />

                {/* City */}
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" placeholder="Enter your city" />

                {/* Postal Code */}
                <label htmlFor="postalCode">Postal Code:</label>
                <input type="text" id="postalCode" name="postalCode" placeholder="Enter your postal code" />

                {/* Phone number */}
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />

                {/* Email */}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
            </form>
        </ExpandableWindow>
    );
}

export default GeneralInfo;