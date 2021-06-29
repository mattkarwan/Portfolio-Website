import React, { useState } from 'react';
import Heading from './Heading';
import ContactForm from './ContactForm';
import styles from './ContactPage.module.scss';

export default function ContactPage() {

    const [formInit, setFormInit] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [sent, setSent] = useState(false);

    const openForm = () => {

        // If the form has been submitted --> reset the form
        if (sent) {
            setSent(false);
            setFormInit(false);
            setFormInit(true);
            setFormVisible(true);
            return;
        }
        
        if (!formInit) {
            setFormInit(true);
            setFormVisible(true);
            return;
        }

        setFormVisible(true);
    }
    
    return (
        <div className={styles.contactContainer} id="contactPage">
            <div className={styles.contactContent}>
                <Heading heading="Contact Me" subHeading="Interested in working with me?" />
                <button className={styles.contactButton} onClick={() => openForm()}>Get in Touch</button>
                { formInit ? <ContactForm formVisible={formVisible} setFormVisible={setFormVisible} sent={sent} setSent={setSent} /> : null }
            </div>
        </div>
    )
}