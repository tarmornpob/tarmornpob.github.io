import def_styles from '../styles/Def.module.css';
import Image from 'next/image';


export default function About() {

    return (
        <>
            <h2 className={def_styles.headTopic}>Resume</h2>
            <div className={def_styles.topResume}>
                <div className={def_styles.topResumeLeft}>
                    <div className={def_styles.mAuto}>
                        <Image src="/my_pic.png" alt="My Image" width={100} height={100} />
                    </div>
                    <div className={`${def_styles.boxShadowStyle} ${def_styles.mtTop2vh}`}>
                        <h3 className={`${def_styles.headProjects} ${def_styles.rmMargin}`}>Skills</h3>
                        <ul className={def_styles.ulStyleList}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>PHP</li>
                            <li>Node.js</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                </div>
                <div className={def_styles.topResumeRight}>
                    <div className={def_styles.boxShadowStyle}>
                        <h2>Full-stack developer</h2>
                        <h2 className={def_styles.blueColor}>Armornpob Rattanachonrapum</h2>
                        <span style={{fontSize:'1.4vh'}}>tarmornpob@gmail.com</span>
                    </div>
                    <div className={`${def_styles.boxShadowStyle} ${def_styles.fntContent}`}>
                        <b className={def_styles.blueColor}>Expected Salary: </b>25,000 THB
                    </div>
                    <div className={`${def_styles.boxShadowStyle} ${def_styles.fntContent}`}>
                        <b className={`${def_styles.headProjects} ${def_styles.rmMargin}`}>Education</b>
                        <b className={def_styles.buttonBlueStyle}>Burapha University (2016-2020)</b>
                        <div style={{padding:'0.5rem 0.7rem 0.5rem 0.7rem',wordBreak:'break-word'}}>
                        <span>B.Sc in InformationTechnology with GPA 3.02</span>
                        </div>
                        
                    </div>
                    <div className={`${def_styles.boxShadowStyle} ${def_styles.fntContent}`}>
                        <b className={`${def_styles.headProjects} ${def_styles.rmMargin}`}>Working</b>
                        <b className={def_styles.buttonBlueStyle}>802 Digital Media (March 2022-2023)</b>
                        <div style={{padding:'0.5rem 0.7rem 0.5rem 0.7rem',wordBreak:'break-word'}}>
                    
                            <b style={{marginTop:'2vh'}}>Full-stack Developer</b>
                            <ul className={def_styles.ulStyleList}>
                                <li>Get requirement from customer</li>
                                <li>Project Planning</li>
                                <li>Database Diagram</li>
                                <li>Coding</li>
                                <li>Unit Test</li>
                                <li>Create Tools</li>
                            </ul>
                        </div>

                        <b className={def_styles.buttonBlueStyle} style={{marginTop:'0.5rem'}}>Freelancer</b>
                        <div style={{padding:'0.5rem 0.7rem 0.5rem 0.7rem',wordBreak:'break-word'}}>
                    
                            <b style={{marginTop:'2vh'}}>Facebook Tools</b>
                            <ul className={def_styles.ulStyleList}>
                                <li>Auto Posting</li>
                                <li>Auto Remove</li>
                                <li>Scarping Post</li>
                            </ul>
                        </div>

                    </div>
                    <div className={`${def_styles.boxShadowStyle} ${def_styles.fntContent}`}>
                        <b className={`${def_styles.headProjects} ${def_styles.rmMargin}`}>Reference</b>
                        <b className={def_styles.buttonBlueStyle}>Burapha University</b>
                        <div style={{padding:'0.5rem 0.7rem 0.5rem 0.7rem',wordBreak:'break-word',fontSize:'1.7vh',lineHeight:'1.5rem'}}>
                        <span><b>PRAJAKS JITNGERNMADAN</b>, PH.D.Lecturer at the Faculty of Informatics, Burapha University Tel:+66(0)38105374</span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
                
        </>
    )

}