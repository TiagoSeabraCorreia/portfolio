import SectionIntro from "../SectionIntro/SectionIntro";
import Card, { type CardData } from "./Card";
import styles from "./css.module.css"


export default function About(){
    const cards: CardData[] = [
        {
            icon:<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"> <path d="M21 18.6667L25.6667 14L21 9.33337" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/> <path d="M6.99999 9.33337L2.33333 14L6.99999 18.6667" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16.9167 4.66663L11.0833 23.3333" stroke="white" strokeWidth="2.33333" stroke-linecap="round" strokeLinejoin="round"/> </svg>,
            heading: 'Full-Stack Development',
            content: 'Building end-to-end solutions with modern frameworks and technologies'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14.9684 2.5433C14.6644 2.40464 14.3342 2.33289 14 2.33289C13.6659 2.33289 13.3357 2.40464 13.0317 2.5433L3.03337 7.0933C2.82635 7.18459 2.65033 7.3341 2.52676 7.52364C2.40319 7.71317 2.3374 7.93454 2.3374 8.1608C2.3374 8.38706 2.40319 8.60844 2.52676 8.79797C2.65033 8.9875 2.82635 9.13702 3.03337 9.2283L13.0434 13.79C13.3474 13.9286 13.6776 14.0004 14.0117 14.0004C14.3458 14.0004 14.6761 13.9286 14.98 13.79L24.99 9.23997C25.1971 9.14869 25.3731 8.99917 25.4967 8.80964C25.6202 8.6201 25.686 8.39873 25.686 8.17247C25.686 7.94621 25.6202 7.72484 25.4967 7.5353C25.3731 7.34577 25.1971 7.19625 24.99 7.10497L14.9684 2.5433Z" stroke="white" strokeWidth="2.33333" stroke-linecap="round" strokeLinejoin="round"/>
            <path d="M2.33332 14C2.33276 14.2231 2.39622 14.4418 2.51615 14.6299C2.63609 14.8181 2.80747 14.9679 3.00998 15.0617L13.0433 19.6233C13.3457 19.7603 13.6739 19.8311 14.0058 19.8311C14.3378 19.8311 14.6659 19.7603 14.9683 19.6233L24.9783 15.0733C25.1848 14.9805 25.3599 14.8296 25.4821 14.639C25.6043 14.4484 25.6684 14.2264 25.6667 14" stroke="white" strokeWidth="2.33333" stroke-linecap="round" strokeLinejoin="round"/>
            <path d="M2.33332 19.8334C2.33276 20.0565 2.39622 20.2751 2.51615 20.4633C2.63609 20.6515 2.80747 20.8013 3.00998 20.895L13.0433 25.4567C13.3457 25.5936 13.6739 25.6645 14.0058 25.6645C14.3378 25.6645 14.6659 25.5936 14.9683 25.4567L24.9783 20.9067C25.1848 20.8139 25.3599 20.663 25.4821 20.4724C25.6043 20.2818 25.6684 20.0598 25.6667 19.8334" stroke="white" strokeWidth="2.33333" stroke-linecap="round" strokeLinejoin="round"/>
            </svg>,
            heading: 'Adaptive Architecture',
            content: 'Creating flexible, scalable systems that evolve with your needs'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4.66668 16.3334C4.4459 16.3341 4.22945 16.2722 4.04246 16.1548C3.85547 16.0375 3.70562 15.8694 3.61032 15.6703C3.51502 15.4711 3.47819 15.249 3.50409 15.0298C3.53 14.8105 3.61759 14.6031 3.75668 14.4317L15.3067 2.53169C15.3933 2.43169 15.5114 2.36411 15.6415 2.34005C15.7716 2.31599 15.906 2.33688 16.0227 2.39928C16.1394 2.46169 16.2314 2.56191 16.2836 2.68349C16.3358 2.80507 16.3451 2.94078 16.31 3.06836L14.07 10.0917C14.004 10.2685 13.9818 10.4586 14.0054 10.6459C14.029 10.8331 14.0976 11.0118 14.2054 11.1667C14.3133 11.3216 14.4571 11.448 14.6245 11.535C14.7919 11.6221 14.978 11.6673 15.1667 11.6667H23.3333C23.5541 11.6659 23.7706 11.7278 23.9576 11.8452C24.1446 11.9626 24.2944 12.1306 24.3897 12.3298C24.485 12.5289 24.5218 12.751 24.4959 12.9703C24.47 13.1895 24.3824 13.3969 24.2433 13.5684L12.6933 25.4684C12.6067 25.5684 12.4886 25.6359 12.3585 25.66C12.2284 25.6841 12.094 25.6632 11.9773 25.6008C11.8607 25.5384 11.7687 25.4381 11.7165 25.3166C11.6642 25.195 11.6549 25.0593 11.69 24.9317L13.93 17.9084C13.9961 17.7316 14.0182 17.5414 13.9947 17.3542C13.9711 17.167 13.9024 16.9882 13.7946 16.8334C13.6867 16.6785 13.5429 16.5521 13.3755 16.465C13.2081 16.3779 13.0221 16.3327 12.8333 16.3334H4.66668Z" stroke="white" strokeWidth="2.33333" stroke-linecap="round" strokeLinejoin="round"/>
            </svg>,
            heading: 'Performance-Driven',
            content: 'Optimizing for speed and efficiency without sacrificing user experience'
        }
    ]

    return (
        <>
            <section className={styles.main}>
                <SectionIntro title="About me" description="I'm a developer who sees code as a creative medium, where structure meets fluidity to create experiences that adapt and flow."/>
                <div className={styles.cardsContainer}>
                    {
                        cards.map((card: CardData, index) => (
                            <Card 
                                key={index} 
                                icon={card.icon}
                                heading={card.heading}
                                content={card.content}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}