/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Kreon } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import classnames from 'classnames';

const inter = Kreon({ subsets: ['latin'] })
export const projects = [
  {
    title: 'Point72',
    url: 'https://point72.com',
    desc: 'Point72 is a global asset manager led by Steven A. Cohen that deploys discretionary long/short equity, systematic, and macro investing strategies, alongside a growing portfolio of private market investments',
  },
  {
    title: 'Ventures',
    url: 'https://p72.vc/',
    desc: 'Backed by Steven A. Cohen, our venture capital investing firm backs fintech, artificial intelligence and enterprise startups from seed stage to IPO.',
  },
  {
    title: 'Hyperscale',
    url: 'https://point72hyperscale.com/',
    desc: 'Augmenting businesses for the next economic revolution',
  },
  {
    title: 'Producers Guild of America',
    url: 'https://producersguild.org/',
    desc: 'The Producers Guild of America represents, protects and promotes the interests of all members of the producing team in film, television and new media.',
  },
  {
    title: 'Twilio',
    url: 'https://www.twilio.com/',
    desc: 'Create an indispensable brand using real-time customer data to power personalized communications and innovation at scale.',
  },
  {
    title: 'Gallagher Design',
    url: 'https://gallagherdesign.com/',
    desc: 'We design beloved impactful visitor experiences.',
  },
  {
    title: 'Ryan Gootee General Contractors',
    url: 'https://rggc.com/',
    desc: 'Ryan Gootee General Contractors is an award winning commercial general contractor serving the Greater New Orleans area, with a specialty in historic restoration, renovation, and new construction.',
  },
  {
    title: 'PetSmart Design System',
    url: 'https://www.npmjs.com/package/@petsmart-ui/sparky',
    desc: 'The React-powered design system library for PetSmart web applications. Latest version: 0.67.0, last published: 10 days ago. Start using @petsmart-ui/sparky in your project by running `npm i @petsmart-ui/sparky`. There are no other projects in the npm registry using @petsmart-ui/sparky.',
  },
  {
    title: 'Ulta’s Design System',
    url: 'https://www.ulta.com/',
    desc: 'Shop top beauty brands & new arrivals at Ulta Beauty.',
  },
  {
    title: 'Pendo Design System',
    url: 'https://www.pendo.io/',
    desc: 'Pendo’s product experience and digital adoption solutions help companies become product led and deliver digital experiences users love.',
  },
  {
    title: 'Elevation Oncology',
    url: 'https://elevationoncology.com/',
    desc: 'We are focused on discovering and developing selective cancer therapies to treat patients across a range of solid tumors with significant unmet medical needs.',
  },
  {
    title: 'Pixelingo',
    url: 'https://pixelingo.com/',
    desc: 'I work with words and ideas. I help people make decisions about their work, then I help make their plans happen.',
  },
  {
    title: 'Museum of the American Revolution',
    url: 'https://www.amrevmuseum.org/',
    desc: 'Located in the heart of Historic Philadelphia, the Museum explores the dramatic, surprising story of the American Revolution and its enduring legacy.',
  },
  {
    title: 'Longwood Gardens',
    url: 'https://longwoodgardens.org/',
    desc: 'Experience the world of Longwood Gardens… a place to see dazzling displays that elevate the art of horticulture...',
  },
  {
    title: 'Haruki Murakami',
    url: 'https://www.harukimurakami.com/',
    desc: 'The official US site of Haruki Murakami. Enter Murakami’s world to explore the books, read interviews, discover music, browse image galleries, and much more.',
  },
  {
    title: 'Oceana',
    url: 'https://oceana.org/',
    desc: 'SAVE THE OCEANS, FEED THE WORLD.',
  },
  {
    title: 'The Franklin Institute - The Current',
    url: 'https://www.fi.edu/blog',
    desc: 'Blog landing page',
  },
  {
    title: 'TechCrunch',
    url: 'https://techcrunch.com/',
    desc: 'TechCrunch | Reporting on the business of technology, startups, venture capital funding, and Silicon Valley',
  },
  {
    title: 'Longwood Gardens - New Heights',
    url: 'https://newheights.longwoodgardens.org',
    desc: 'Longwood Garden’s Main Fountain Garden is a modern masterpiece. Follow the revitalization of this beloved garden’s architecture, garden design, and fountains.',
  },
  {
    title: 'Institute for Advanced Study',
    url: 'https://www.ias.edu/',
    desc: 'The Institute for Advanced Study is one of the world’s foremost centers for theoretical research and intellectual inquiry. Located in Princeton, NJ, IAS is dedicated to independent study across the sciences and humanities.',
  },
  {
    title: 'Pennsylvania Academy of the Fine Arts',
    url: 'https://www.pafa.org/museum/visit/planning-your-visit',
    desc: 'We’re so excited you’re planning to visit PAFA! After reviewing the information below,  Reserve Tickets here. If you have additional questions about how to navigate your visit that are not answered here, please don’t hesitate to reach out to us at info@pafa.org with specific questions. We’d love to answer them!',
  },
  {
    title: 'Lapham’s Quarterly',
    url: 'https://www.laphamsquarterly.org/',
    desc: 'Freedom',
  },
  {
    title: 'The Franklin Institute',
    url: 'https://www.fi.edu/',
    desc: 'World premiere exhibition immerses guests in the beloved stories that have been dazzling fans since 1923!',
  },
  {
    title: 'The Franklin Institute - Leap into Science',
    url: 'http://leap.fi.edu/',
    desc: 'Leap into Science is a national program that integrates open-ended science activities with children’s books for young children and their families.',
  },
  {
    title: 'Advisor Innovation Labs',
    url: 'https://advisorinnovationlabs.com/',
    desc: 'Advisors / Clients / Data unified into a singular cloud ecosystem.',
  },  
];

export default function Home() {
  // const [articles, setArticles] = useState([]);
  // const getArticles = async () => {
  //   const response = await fetch(
  //     `/api/sites`
  //   );
  //   const articles = await response.json();
  //   console.log(response);
  //   if (articles && articles.length > 0) {
  //     setArticles(articles);
  //   } else if (status == 'error') {
  //     console.error('error');
  //   }
  // }
  // useEffect(() => {
  //   getArticles();
  // }, []);
  const [showImage1, setShowImage1] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const halfwayPoint = window.innerHeight / 2;
      const container = document.getElementById('container');
      const containerTop = container!.getBoundingClientRect().top;
      console.log(halfwayPoint, containerTop)
      if (window.scrollY < halfwayPoint) {
        setShowImage1(false);
      } else {
        setShowImage1(true);
      }
    }
    console.log(window.scrollY)
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageclass1 = classnames('greg', {
    'show': showImage1
  });
  const imageclass2 = classnames('greg', {
    'show': !showImage1
  });
  return (
    <main className={styles.main}>
      <div className={inter.className} id="container">
        <div className={styles.description}>
          <h1 className={inter.className}>I’m Greg Sarault, Front End Web Devloper</h1>
          <h2 className={inter.className}>As an experienced developer with unparalleled speed and debugging abilities, I am constantly improving my craft and surroundings.</h2>
        </div>
        
        <div>
          <h3>Little bit about me</h3>
          <p></p>
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
                  
                  <p className={inter.className}>
                    {item.desc}
                  </p>
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        {//eslint-disable-next-line @next/next/no-img-element
        }
        <img src="/greg-face.png" alt="greg" className={imageclass1} />
        <img src="/greg-face-2.png" alt="greg" className={imageclass2} />
      </div>
    </main>
  )
}

