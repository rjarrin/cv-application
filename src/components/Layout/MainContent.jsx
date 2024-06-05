import '../../styles/MainContent.css'
import { useState } from 'react';
import GeneralInfo from '../GeneralInfo';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import DocumentPreview from '../Document/DocumentPreview';

function MainContent({isEditing}) {
    const [formData, setFormData] = useState({
        name: '', streetAddress: '', city: '', postalCode: '', phoneNumber: '', email: ''
    });
    
    return (
        <div className="main-content">
            <aside className="column-left">
                {isEditing && (
                    <>
                        <GeneralInfo></GeneralInfo>
                        <Education></Education>
                        <Experience></Experience>
                    </>
                )}
            </aside>
            <section className="column-middle">
                <DocumentPreview></DocumentPreview>
            </section>
            {/* <aside className="column-right">
            </aside> */}
        </div>
    );
}

export default MainContent;