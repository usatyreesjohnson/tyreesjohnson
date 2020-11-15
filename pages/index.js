import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tyrees Johnson</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <img src="/me.png" alt="tyrees johnson" className="me"></img>
        </h1>

        <style jsx> {`
         
        .me {
          width:150px;
          border-radius:20px;
          border:solid 3px #000;
        }

         @media(max-width:768px) {
           .me {
             width:50%;
           }

           .mystack {
             justify-content:center;
             text-align:center;
             display:flex;
             flex-direction:column;
           }
         }

          
          
          `}
        </style>

        <p className={styles.description}>
        Hey, I'm, {' '}
          <code className={styles.code}>Tyrees Johnson</code> a web developer.
        </p>

        <div class="mystack">
        <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
        <img src="https://img.icons8.com/color/48/000000/css3.png"/>
        <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
        <img src="https://img.icons8.com/color/48/000000/sass.png"/>
        <img src="https://img.icons8.com/color/48/000000/vue-js.png"/>
        <img src="https://img.icons8.com/windows/48/000000/nodejs.png"/>
        <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
        <img src="https://img.icons8.com/color/48/000000/python.png"/>
        <img src="https://img.icons8.com/ultraviolet/48/000000/react.png"/>
        <img src="https://img.icons8.com/color/48/000000/typescript.png"/>
        <img src="https://img.icons8.com/ios-filled/48/000000/visual-basic.png"/>
        <img src="https://img.icons8.com/ios-filled/60/000000/mysql-logo.png"/>
        <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
        <img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"/>
        <img src="https://img.icons8.com/color/48/000000/heroku.png"/>
        
        </div>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>What im currently working on or have done in the past.</p>
          </a>

          <a href="https://paypal.me/TyreesJohnson" target="_blank" className={styles.card}>
            <h3>Donations &rarr;</h3>
            <p>All donations are collected via PayPal and greatly appreciated.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Backstory &rarr;</h3>
            <p>A little about myself and what led me to this path.</p>
          </a>

          <a
            href="mailto:usa@tyreesjohnson.com"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>
              Twitter, Facebook, Instagram, Snapchat, etc.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Built in{''}
          <img src="/react-js.png" alt="reactjs" width="100"/> &  <img src="/nextjs.png" alt="nextjs" width="80"/>
      </footer>
    </div>
  )
}
