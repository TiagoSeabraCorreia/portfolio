import SectionIntro from "../SectionIntro/SectionIntro"
import styles from "./css.module.css";
import Social, { type SocialProps } from "./Social";

export default function Contact(){
    const data: SocialProps[] = [
        {
            icon: 
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 22V18C15.1391 16.7473 14.7799 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00001 3.5C6.00001 2 5.00001 2 5.00001 2C4.70001 3.15 4.70001 4.35 5.00001 5.5C4.27188 6.51588 3.91848 7.75279 4.00001 9C4.00001 12.5 7.00001 14.5 10 14.5C9.61001 14.99 9.32001 15.55 9.15001 16.15C8.98001 16.75 8.93001 17.38 9.00001 18V22" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M9 18C4.49 20 4 16 2 16" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                    </svg>
                </> 
            ,
            title: 'Github'
        },
        {
            icon: 
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 7L13.009 12.727C12.7039 12.9042 12.3573 12.9976 12.0045 12.9976C11.6517 12.9976 11.3051 12.9042 11 12.727L2 7" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                    </svg>
                </> 
            ,
            title: 'Email'
        },
        {
            icon: 
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                    </svg>
                </> 
            ,
            title: 'LinkedIn'
        }
    ]
    
    return (
        <>
            <section className={styles.main}>
                <SectionIntro title="Let's connect" description="Have a project in mind or just want to chat about tech? Drop me a message!" />
                <div className={styles.container}>
                    <div className={styles.socials}>
                        <div className={styles.fadeTextContainer}>
                            <span className={styles.fadeText}>Get in Touch</span>
                        </div>
                        <div className={styles.longTextContainer}>
                            <span className={styles.longText}>I'm always open to 
                                discussing new projects, creative ideas, 
                                or opportunities to be part of your vision.
                            </span>
                        </div>
                        <div className={styles.socialsContainer}>
                            {
                                data.map((data: SocialProps, index: number) => (
                                    <>
                                        <Social 
                                            icon={data.icon}
                                            title={data.title} 
                                        />
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div className={styles.formContainer}>
                        <form action="" className={styles.form}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="">Name</label>
                                <input type="text" name="" id="" placeholder="Your name"/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" placeholder="your.email@example.com"/>
                            </div>
                            <div className={styles.textareaContainer}>
                                <label htmlFor="">Message</label>
                                <textarea  name="" id="" placeholder="Tell me about your project..."/>
                            </div>
                            <div className={styles.button}>
                                <span>Send Message</span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}