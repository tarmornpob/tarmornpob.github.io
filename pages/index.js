import def_styles from '../styles/Def.module.css';


export default function Index() {

    return (
        <>
                <h2 className={def_styles.headTopic}>Hobbies</h2>

        <h2>My Photographer IG Account</h2>
                                <a href="https://www.instagram.com/ampsnapz/" target="_blank" className={def_styles.buttonBlueStyle}>Open <i className="fa-solid fa-arrow-up-right-from-square"></i></a>

        </>
    )

}