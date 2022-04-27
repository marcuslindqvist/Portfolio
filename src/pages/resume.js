import * as React from 'react';
import { useState } from 'react';
import WorkLifeComponent from '../components/WorkLifeComponent';
import Layout from '../components/layout';
import EducationComponent from '../components/EducationComponent';

const Resume = () => {
    const [isWork, setIsWork] = useState(true);
    const [btnText, setBtnText] = useState('visa utbildningar');
    const [title, setTitle] = useState('Arbetsliv');
    function changeView() {
        setIsWork(!isWork);
        changeBtnText();
        changeTitle();
    }
    function changeBtnText() {
        if (!isWork) {
            setBtnText('visa utbildningar');
        } else setBtnText('visa arbetsliv');
    }
    function changeTitle() {
        if (!isWork) {
            setTitle('Arbetsliv');
        } else setTitle('Utbildning');
    }
    return (
        <Layout>
            <div className="title-section">
                <h1 id="page-top">{title}</h1>
                <button className="resume-button" onClick={changeView}>
                    {btnText}
                </button>
            </div>
            {isWork ? (
                <>
                    <WorkLifeComponent />
                </>
            ) : (
                <>
                    <EducationComponent />
                </>
            )}

            <br />
            <a href="#page-top" className="hover-links to-top-link">
                till toppen
            </a>
        </Layout>
    );
};

export default Resume;
