import './css.css'



export function Navigation(){
    return (
        <>
            <div className="main">
                <div className='navigation'>
                    <div>
                        <span className='name'>Tiago Correia</span>
                    </div>
                    <div className='link-container'>
                       <span>About</span>
                       <span>Skills</span>
                       <span>Projects</span>
                       <span>Contact</span>
                       <div className='hire-button'>
                            <span>Hire Me</span>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Navigation;