import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function App(props) {

  const { Component, pageProps } = props;
  const router = useRouter();

  const pageAll = [
    {
      name:eval(<i className='fa-solid fa-house'></i>),
      link:"/"
    },
    {
      name:"Resume",
      link:"/about"
    },
    {
      name:"Projects",
      link:"/projects"
    }
  ];

  React.useEffect(() => {



  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>@tdev - portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
        <h2 className={styles.title}>
          Welcome to <a>@tdev</a> 
        </h2>
        <div className={styles.title} style={{fontSize:'24px',fontWeight:'bold', opacity:'0.8', lineHeight:'2.2rem'}}>My <a>Experience</a> and <a>History</a> <br/>  <span>💆🎧</span></div>
        

        <div className={styles.tabMenu}>
          {pageAll.map((item,i) => (
            <Link href={item.link}>
                <div className={router.pathname === item.link ? styles.childTabMenu_active : styles.childTabMenu} key={i}>{item.name} </div>
            </Link>
          ))}
        </div>
         

    
      <main>
        <div className={styles.boxContain}>
          <Component {...pageProps} />
        </div>
        
      </main>

     

      <style jsx>{`
        main {
          padding:3rem 0 0 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
      
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
