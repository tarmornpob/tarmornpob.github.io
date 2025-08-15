import styles from '../styles/Projects.module.css';
import def_styles from '../styles/Def.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import React from 'react';

export default function Projects() {

   

    React.useEffect(() => {

    },[]);

    
    return (
        
        <>
       
        <h2 className={def_styles.headTopic}>Projects</h2>
        <span className={def_styles.smallText}>*Thaidotrun</span>
            <h3 className={def_styles.headProjects}>MangobotM (photo delivery, automatic shutter android app)</h3>
            <div className={styles.detailProjects}>
                <div className={styles.previewImg}>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://i.ibb.co/4gfqJwPj/Screenshot-2568-08-15-at-15-59-20.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/7tS7BxW7/Screenshot-2568-08-15-at-15-59-25.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.previewText}>
                    <b>System Spec: </b>Android Java, (10.0)<br/>
                    <b className={def_styles.redColor}>Assignment: </b>Create app receive photo when camera trigger and upload to server with usb connection<br/>
                    <b className={def_styles.blueColor}>What I do: </b><br/>
                    <ul style={{margin:'0'}}>
                        <li>Create UI-UX Experience, Programming Flow</li>
                        <li>Use SQLite for store data in device</li>
                        <li>Low-level system app with gphoto2 </li>
                        <li>API Connect to back-end (already exist)</li>
                    </ul>
                    <div className={def_styles.tryThisTab}>
                        {/* <a href="https://vote-movies.vercel.app/" target="_blank" className={def_styles.buttonBlueStyle}>Try this Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a> */}
                    </div>
                </div>
            </div>
        <hr style={{opacity:'0.3'}}/>
        <span className={def_styles.smallText}>*Thaidotrun</span>
            <h3 className={def_styles.headProjects}>Southern Star (Six-Star Challenge, Ranking runner, Races data, Profile runner)</h3>
            <div className={styles.detailProjects}>
                <div className={styles.previewImg}>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://i.ibb.co/SL4VGQR/Screenshot-2568-08-15-at-16-25-33.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/XkXW8pXM/Screenshot-2568-08-15-at-16-25-48.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/KcmrMZq7/Screenshot-2568-08-15-at-16-26-03.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>

                    </Swiper>
                </div>
                <div className={styles.previewText}>
                    <b>System Spec: </b>Astro Framework<br/>
                    <b className={def_styles.redColor}>Assignment: </b>Create web app show races, runner, rankings and chart analytics with fully responsive design <br/>
                    <b className={def_styles.blueColor}>What I do: </b><br/>
                    <ul style={{margin:'0'}}>
                        <li>Create UI-UX Experience, Programming Flow, Database Diagram</li>
                        <li>Use Neon.db (Postgresql)</li>
                        <li>UI/UX Website Chart.js most similar to UI Mockup</li>
                        <li>Deploy with Cloudflared Pages </li>
                    </ul>
                    <div className={def_styles.tryThisTab}>
                        <a href="https://southern-star-runx.pages.dev/" target="_blank" className={def_styles.buttonBlueStyle}>Try this Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
        </div>
        <hr style={{opacity:'0.3'}}/>
        <span className={def_styles.smallText}>*Thaidotrun</span>
            <h3 className={def_styles.headProjects}>RunX.run (Ranking runner, Races data, Profile runner)</h3>
            <div className={styles.detailProjects}>
                <div className={styles.previewImg}>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://i.ibb.co/tnHmfNh/Screenshot-2568-08-15-at-16-17-56.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/HfzwD14m/Screenshot-2568-08-15-at-16-18-12.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/VYbFtcbL/Screenshot-2568-08-15-at-16-18-22.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>

                    </Swiper>
                </div>
                <div className={styles.previewText}>
                    <b>System Spec: </b>React + Elysia<br/>
                    <b className={def_styles.redColor}>Assignment: </b>Create web app show races, runner, rankings and chart analytics with fully responsive design <br/>
                    <b className={def_styles.blueColor}>What I do: </b><br/>
                    <ul style={{margin:'0'}}>
                        <li>Create UI-UX Experience, Programming Flow, Database Diagram</li>
                        <li>Use Neon.db (Postgresql)</li>
                        <li>UI/UX Website Chart.js most similar to UI Mockup</li>
                        <li>Deploy backend with Google VM </li>
                    </ul>
                    <div className={def_styles.tryThisTab}>
                        <a href="https://runx.run" target="_blank" className={def_styles.buttonBlueStyle}>Try this Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        <hr style={{opacity:'0.3'}}/>
        <span className={def_styles.smallText}>*802 Digital</span>
            <h3 className={def_styles.headProjects}>TRIGO (Car Inspector)</h3>
            <div className={styles.detailProjects}>
                <div className={styles.previewImg}>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://i.ibb.co/d5VkX9W/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/BB8CwkV/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/f0rDsLM/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.previewText}>
                    <b>System Spec: </b>PHP 5.6 (Codeigniter 3)<br/>
                    <b className={def_styles.redColor}>Assignment: </b>Improve Functional (UI-UX Experience, Programming)<br/>
                    <b className={def_styles.blueColor}>What I do: </b><br/>
                    <ul style={{margin:'0'}}>
                        <li>Create system flow for requirements such as If choose locate A type In will be show 802 Digital A (it complicated)</li>
                        <li>Reports Inspection Car (checklists)</li>
                        <li>Excel sheet generate data with requirements</li>
                        <li>Auto Checked Car (except holiday set)</li>
                    </ul>
                </div>
            </div>
            <hr style={{opacity:'0.3'}}/>
        <span className={def_styles.smallText}>*802 Digital</span>
            <h3 className={def_styles.headProjects}>Litu Exam (Payment System)</h3>
            <div className={styles.detailProjects}>
                <div className={styles.previewImg}>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://i.ibb.co/n3LVqwB/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/Czt45bZ/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.previewText}>
                    <b>System Spec: </b>PHP 5.6, 7.4 (Codeigniter 3, 4)<br/>
                    <b className={def_styles.redColor}>Assignment: </b>Improve Functional (UI-UX Experience, Programming)<br/>
                    <b className={def_styles.blueColor}>What I do: </b><br/>
                    <ul style={{margin:'0'}}>
                        <li>Create system flow for payment with BBL Payment (API)</li>
                        <li>Arrange format data to slip</li>
                        <li>Reports Payment System</li>
                        <li>Testing Payment System</li>
                    
                    </ul>
                </div>
            </div>
            <hr style={{opacity:'0.3'}}/>
            <span className={def_styles.smallText}>*802 Digital</span>
            <h3 className={def_styles.headProjects}>MISUMI (Routine)</h3>
            <div className={styles.detailProjects}>
                <div className={styles.previewImg}>
                    <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img src="https://i.ibb.co/1277XYr/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                        <SwiperSlide><img src="https://i.ibb.co/jHt6vnR/image.png" onClick={(e) => { open(e.currentTarget.src) }}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.previewText}>
                    <b>System Spec: </b>HTML, JS, CSS<br/>
                    <b className={def_styles.redColor}>Assignment: </b>Design UI & Data (with HTML)<br/>
                    <b className={def_styles.blueColor}>What I do: </b><br/>
                    <ul style={{margin:'0'}}>
                        <li>Design html static page with requirements</li>
                        <li>Check code (format 802 Digital)</li>
                        <li>Testing with email send</li>
                    </ul>
                </div>
            </div>
           
            
        </>
    )

}