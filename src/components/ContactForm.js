import React, { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import styles from './ContactForm.module.scss';
import Loading from './Loading';
import ReCAPTCHA from "react-google-recaptcha";
import { emailJsInfo, reCaptchaSiteKey } from '../Keys';

export default function ContactForm(props) {

    const recaptchaRef = React.createRef();

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    // If all forms are filled in, style button
    useEffect(() => {
        const submitBtn = document.getElementById('submitBtn');

        if (submitBtn === null) {
            return;
        }

        if (toSend.from_name !== "" && toSend.message !== "" && toSend.reply_to !== "") {
            submitBtn.classList.add(styles.submitReady);
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove(styles.submitReady);
            submitBtn.disabled = true;
        }

    }, [toSend]);

    // Show and hide contact form
    useEffect(() => {

        const formBackground = document.getElementById('formBackground');
        const formContainer = document.getElementById('formContainer');

        // Show contact form
        if (props.formVisible) {
            formBackground.classList.remove(styles.hidden);
            setTimeout(() => {
                formBackground.classList.add(styles.fadeIn);
                formContainer.classList.add(styles.slideIn);
                document.body.classList.add(styles.noScroll);
            }, 20)
        
        // Hide contact form
        } else {
            formBackground.classList.remove(styles.fadeIn);
            formContainer.classList.remove(styles.slideIn);
            
            setTimeout(() => {
                formBackground.classList.add(styles.hidden);
                document.body.classList.remove(styles.noScroll);
            }, 350)
        }

    }, [props.formVisible])

    // Update toSend on user input
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    // Submit form --> reCaptcha
    const onSubmit = (e) => {
        e.preventDefault();        
        recaptchaRef.current.execute();
    };

    
    // Send email when reCaptcha is complete
    function recaptchaComplete() {

        document.getElementById('loader').classList.remove(styles.hidden);

        send(
            emailJsInfo.serviceId,
            emailJsInfo.templateId,
            toSend,
            emailJsInfo.userId
        )
            .then((response) => {
                // When email successfully sent
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('loader').classList.add(styles.hidden);
                
                props.setSent(true);

                setToSend({
                    from_name: '',
                    message: '',
                    reply_to: '',
                });
    
            })
            .catch((err) => {
                // something went wrong
                console.log('FAILED...', err);
                document.getElementById('loader').classList.add(styles.hidden);

                props.setSent('failed');

                setToSend({
                    from_name: '',
                    message: '',
                    reply_to: '',
                });
            });
    }

    // Hide contact form when clicking close button or outside form
    const toggleVisible = (e) => {

        if (e.button !== 0) {
            return;
        }

        const formBackground = document.getElementById('formBackground');
       
        if (e.target === formBackground) {
            props.setFormVisible(false);
        }
    }

    // Move label on input focus
    const handleLabel = (label) => {
        document.getElementById(label).classList.add(styles.labelTransformed);
    }

    // Label class on input blur
    const handleBlurLabel = (e, label) => {
        e.target.value === "" && document.getElementById(label).classList.remove(styles.labelTransformed);
    }

    return (
        <div className={styles.formBackground} id="formBackground" onMouseDown={(e) => toggleVisible(e)}>
            <div className={styles.formContainer} id="formContainer">

                { 
                    !props.sent && <h3 className={styles.heading}>Contact Me</h3>
                }

                <div className={styles.closeBtn} onClick={() => props.setFormVisible(false)}>
                    <svg id="closeBtn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                {
                    !props.sent ? (
                        
                        <form onSubmit={onSubmit}>
                            <div className={styles.inputHolder}>
                                <input
                                    type='text'
                                    name='from_name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                    id="fromName"
                                    required
                                    onFocus={() => handleLabel('nameLabel')}
                                    onBlur={(e) => handleBlurLabel(e, 'nameLabel')}
                                />
                                <div className={styles.inputBackground} />
                                <label id="nameLabel" htmlFor="fromName" className={styles.label}>Your Name</label>
                            </div>
                            
                            <div className={styles.inputHolder}>
                                <input
                                    type='text'
                                    name='reply_to'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                    id="email"
                                    onFocus={() => handleLabel('emailLabel')}
                                    onBlur={(e) => handleBlurLabel(e, 'emailLabel')}
                                    required
                                />
                                <div className={styles.inputBackground} />
                                <label id="emailLabel" htmlFor="email" className={styles.label}>Your Email</label>
                            </div>
                            
                            <div className={styles.inputHolder}>
                                <textarea
                                    name='message'
                                    value={toSend.message}
                                    onChange={handleChange}
                                    id="message"
                                    cols={1}
                                    rows={6}
                                    onFocus={() => handleLabel('messageLabel')}
                                    onBlur={(e) => handleBlurLabel(e, 'messageLabel')}
                                    required
                                />
                                <div className={styles.inputBackground} />
                                <label id="messageLabel" htmlFor="message" className={styles.label}>Your Message</label>

                            </div>
                            
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey={reCaptchaSiteKey}
                                onChange={recaptchaComplete}
                            />
                            
                            <button type='submit' id="submitBtn" disabled={true} className={styles.submitBtn}>Submit</button>

                            <div id="loader" className={styles.hidden}>
                                <Loading />
                            </div>                           
                            
                        </form>

                     ) : (

                        props.sent === true ? (
                            <div className={styles.outcomeContainer}>
                                <h4>Message Sent!</h4>
                                <p>Thanks for your message!</p>
                                <p>I'll get back to you as soon as I can.</p>
                            </div>

                        ) : (
                            <div className={`${styles.outcomeContainer} ${styles.outcomeFailed}`}>
                                <h4>Sending failed</h4>
                                <p>Sorry, something went wrong!</p>
                                <p>Please try again, or email me at <a href="mailto:mattkarwan.developer@gmail.com">mattkarwan.developer@gmail.com</a></p>
                                
                            </div>
                        )
                        

                     )
                }

                
            </div>
        </div>   
    )
}