import GeneralInfo from '../GeneralInfo';
import Education from '../Education/Education';
import '../../styles/MainContent.css'

function MainContent({isEditing}) {
    return (
        <div className="main-content">
            <aside className="column-left">
                {isEditing && (
                    <>
                        <GeneralInfo></GeneralInfo>
                        <Education></Education>

                        {/* <Education></Education>
                        <Experience></Experience> */}
                    </>
                )}
            </aside>
            <section className="column-middle">
                {/* <Preview></Preview> */}
            </section>
            <aside className="column-right">
                {/* <FontSelection></FontSelection>
                <ColorScheme></ColorScheme> */}
            </aside>
        </div>
    );
}

export default MainContent;