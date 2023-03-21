import Head from 'next/head'
import Image from 'next/image'
import { Kreon } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Kreon({ subsets: ['latin'] })

export default function Home() {

  const projects = [
    {
      title: 'Point72',
      url: 'https://point72.com',
    },
    {
      title: 'Ventures',
      url: 'https://p72.vc/',
    },
    {
      title: 'Hyperscale',
      url: 'https://point72hyperscale.com/',
    },
    {
      title: 'Producers Guild of America',
      url: 'https://producersguild.org/',
    },
    {
      title: 'Twilio',
      url: 'https://www.twilio.com/',
    },
    {
      title: 'Gallagher Design',
      url: 'https://gallagherdesign.com/',
    },
    {
      title: 'Ryan Gootee General Contractors',
      url: 'https://rggc.com/',
    },
    {
      title: 'PetSmart Design System',
      url: 'https://www.npmjs.com/package/@petsmart-ui/sparky',
    },
    {
      title: 'Ulta’s Design System',
      url: 'https://www.ulta.com/',
    },
    {
      title: 'Pendo Design System',
      url: 'https://www.pendo.io/',
    },
    {
      title: 'Elevation Oncology',
      url: 'https://elevationoncology.com/',
    },
    {
      title: 'Pixelingo',
      url: 'https://pixelingo.com/',
    },
    {
      title: 'Museum of the American Revolution',
      url: 'https://www.amrevmuseum.org/',
    },
    {
      title: 'Longwood Gardens',
      url: 'https://longwoodgardens.org/',
    },
    {
      title: 'Haruki Murakami',
      url: 'https://www.harukimurakami.com/',
    },
    {
      title: 'Oceana',
      url: 'https://oceana.org/',
    },
    {
      title: 'The Franklin Institute - The Current',
      url: 'https://www.fi.edu/blog',
    },
    {
      title: 'TechCrunch',
      url: 'https://techcrunch.com/',
    },
    {
      title: 'Typedia',
      url: 'http://typedia.com/',
    },
    {
      title: 'Longwood Gardens - New Heights',
      url: 'https://newheights.longwoodgardens.org/#/',
    },
    {
      title: 'Institute for Advanced Study',
      url: 'https://www.ias.edu/',
    },
    {
      title: 'Pennsylvania Academy of the Fine Arts',
      url: 'https://www.pafa.org/museum/visit/planning-your-visit',
    },
    {
      title: 'Lapham’s Quarterly',
      url: 'https://www.laphamsquarterly.org/',
    },
    {
      title: 'The Franklin Institute',
      url: 'https://www.fi.edu/',
    },
    {
      title: 'The Franklin Institute - Leap into Science',
      url: 'http://leap.fi.edu/',
    },
    {
      title: 'Advisor Innovation Labs',
      url: 'https://advisorinnovationlabs.com/',
    },  
  ];

  const data = { key: 'a098b37f47c7d4d4dfdf96972fe426ed', q: 'https://advisorinnovationlabs.com/' };
  fetch("https://api.linkpreview.net/?key=", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      
  })

  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <div className={styles.description}>
          <h1 className={inter.className}>{`I'm Greg Sarault, Front End Web Devloper`}</h1>
          <h2 className={inter.className}>{`As an experienced developer with unparalleled speed and debugging abilities, I am constantly improving my craft and surroundings.`}</h2>
        </div>

        <div>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          {/* <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div> */}
        </div>

        <div className={styles.intro}>
          <h3>{`Check out what I've done`}</h3>
        </div>
        <div className={styles.grid}>


          {projects.map((item, index) => {
            
            return (
              <div key={index} className={styles.card}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <h2 className={inter.className}>
                    {item.title}
                  </h2>
                  {/* <Image src="/thirteen.svg" alt="13" width={40} height={31} priority /> */}
                  <p className={inter.className}>
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

