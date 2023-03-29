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
    desc: 'Worked very closely with Designer, Project manager, and Client to fine tune animations and site tone and feel.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Twig' },
      {label: 'Multisite' },
      {label: 'Kinsta' },
    ],
  },
  {
    title: 'Ventures',
    url: 'https://p72.vc/',
    desc: 'Extensive training with client teaching them a little bit about code the help their editors with making their site unique.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Twig' },
      {label: 'Multisite' },
      {label: 'Kinsta' },
    ],
  },
  {
    title: 'Hyperscale',
    url: 'https://point72hyperscale.com/',
    desc: 'Quickly put this site together, with the help of awesome design team.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Twig' },
      {label: 'Multisite' },
      {label: 'Kinsta' },
    ],
  },
  {
    title: 'Producers Guild of America',
    url: 'https://producersguild.org/',
    desc: 'Built a Custom integration with salesforce using a url that sends a cookie back to the site allowing members to view protected pages.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Twig' },
    ],
  },
  {
    title: 'Twilio',
    url: 'https://www.twilio.com/',
    desc: 'Learned Python/wagtail in 2 months and worked with an external team to integrate into their system.',
    tags: [
      {label: 'Wagtail' },
      {label: 'Python' },
    ],
  },
  {
    title: 'Gallagher Design',
    url: 'https://gallagherdesign.com/',
    desc: 'Had constant comunication with designers to hone in the timing and easing of the aniamtions of this site.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Twig' },
      {label: 'Animations' },
    ],
  },
  {
    title: 'Ryan Gootee General Contractors',
    url: 'https://rggc.com/',
    desc: 'Using the templeting language twig, I was able to get this site up in under 2 months.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Twig' },
    ],
  },
  {
    title: 'PetSmart Design System',
    url: 'https://www.npmjs.com/package/@petsmart-ui/sparky',
    desc: 'A very ARIA accessable design system tested though cromatic and sotrybook interactive testing.',
    tags: [
      {label: 'Storybook' },
      {label: 'Design System' },
      {label: 'React' },
    ],
  },
  {
    title: 'Ulta’s Design System',
    url: 'https://www.ulta.com/',
    desc: 'In 3 months got the Ulta Design team and the development have more conversations with eachother to help enhacnce their desing system',
    tags: [
      {label: 'Storybook' },
      {label: 'Design System' },
      {label: 'React' },
    ],
  },
  {
    title: 'Pendo Design System',
    url: 'https://www.pendo.io/',
    desc: 'I did live coding QA sessions with designers and client to help get this design system over the last hurdle.',
    tags: [
      {label: 'Fractle' },
      {label: 'Design System' },
      {label: 'React' },
    ],
  },
  {
    title: 'Elevation Oncology',
    url: 'https://elevationoncology.com/',
    desc: 'Created subtle animations and a custom vertical carousel that progresses based off the timestamps in the background video ( its on the /our-focus/ page',
    tags: [
      {label: 'Wordpress' },
      {label: 'WPEngine' },
      {label: 'Animations' },
    ],
  },
  {
    title: 'Pixelingo',
    url: 'https://pixelingo.com/',
    desc: 'Early in my career I spun up a single page with custom nav bar associated with scroll position in under a week.',
    tags: [
      {label: 'HTML' },
      {label: 'CSS' },
      {label: 'Javascript' },
    ],
  },
  {
    title: 'Longwood Gardens',
    url: 'https://longwoodgardens.org/',
    desc: 'Built a custom interactive map with hotspots.',
    tags: [
      {label: 'Drupal' },
      {label: 'Pantheon' },
      {label: 'Javascript' },
    ],
  },
  {
    title: 'Haruki Murakami',
    url: 'https://www.harukimurakami.com/',
    desc: 'I had fun building the animations with greensock and angular for the page state transtions.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Angular' },
      {label: 'Greensock - Animations' },
    ],
  },
  {
    title: 'Oceana',
    url: 'https://oceana.org/',
    desc: 'This was a huge site that we had to build custome content and styles based on the end users region.',
    tags: [
      {label: 'Wordpress' },
      {label: 'Javascript' },
    ],
  },
  {
    title: 'The Franklin Institute - The Current',
    url: 'https://www.fi.edu/blog',
    desc: 'While working full time worked with another agency to spin up a blog site.',
    tags: [
      { label: 'Drupal' },
      { label: 'Pantheon' },
      { label: 'Freelance one the side' },
    ],
  },
  {
    title: 'TechCrunch',
    url: 'https://techcrunch.com/',
    desc: 'Worked with Brad Frost in the early stages of Design Systems while making this site',
    tags: [
      { label: 'Wordpress' },
      { label: 'Design System' },
    ],
  },
  {
    title: 'Longwood Gardens - New Heights',
    url: 'https://newheights.longwoodgardens.org',
    desc: 'We used so much Javascript in this site for the responsive interactive hotspots on the map, and story telling line drawing when scrolling down the page.',
    tags: [
      { label: 'Static Site' },
      { label: 'Angular' },
      { label: 'Greensock Animations' },
    ],
  },
  {
    title: 'Institute for Advanced Study',
    url: 'https://www.ias.edu/',
    desc: 'Created different sub sites for each of the clients departments but using similar design and code.',
    tags: [
      { label: 'Drupal' },
      { label: 'Javascript' },
    ],
  },
  {
    title: 'Pennsylvania Academy of the Fine Arts',
    url: 'https://www.pafa.org/museum/visit/planning-your-visit',
    desc: 'I worked very closely with the designers to make this pixel perfect.',
    tags: [
      { label: 'Drupal' },
      { label: 'Pantheon' },
      { label: 'Javascript' },
    ],
  },
  {
    title: 'The Franklin Institute',
    url: 'https://www.fi.edu/',
    desc: 'This is the very first site I have built at an agency and is still up today!',
    tags: [
      { label: 'Drupal' },
      { label: '1st Site Built' },
    ],
  },
  {
    title: 'The Franklin Institute - Leap into Science',
    url: 'http://leap.fi.edu/',
    desc: 'While full time I worked with another agency to and their client to develop a resouece protal.',
    tags: [
      { label: 'Drupal' },
      { label: 'Feelance on the side' },
    ],
  },
  {
    title: 'Lapham’s Quarterly',
    url: 'https://www.laphamsquarterly.org/',
    desc: 'Created fun micro animaions, and gave the client the ability to create custom theming per issue they released.',
    tags: [
      { label: 'Drupal' },
      { label: 'React' },
      { label: 'Custom theming' },
    ],
  },
  {
    title: 'Advisor Innovation Labs',
    url: 'https://advisorinnovationlabs.com/',
    desc: 'While at this small start up I quickly designed in code and spun this site up in under a week.',
    tags: [
      { label: 'Express' },
      { label: 'Built in 2 days' },
    ],
  },  
];

export default function Home() {
  const [showImage1, setShowImage1] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const halfwayPoint = window.innerHeight / 2;
      if (window.scrollY > halfwayPoint) {
        setShowImage1(false);
      } else {
        setShowImage1(true);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageclass1 = classnames('greg', {
    'show': showImage1,
    'hide': !showImage1
  });
  const imageclass2 = classnames('greg', {
    'show': !showImage1,
    'hide': showImage1
  });

  console.log("Hiring me will be the best decision you've made.")

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.container} id="container">
        <div className={styles.description}>
          <h1 className={inter.className}>I’m Greg Sarault, a Front End Engineer that dosen’t over-engineer things.</h1>
          <h2 className={inter.className}>As an experienced developer with unparalleled speed and debugging abilities, I’ve been working as a dev for 10+ years and im faster than anyone you have worked with. I am constantly improving my craft and surroundings while making everyone better around me.</h2>
        </div>
        <div className={styles.carousel}>
          <blockquote>
            <p>I am super appreciative to be able to work with you. Enjoy just being a fly on the wall and absorbing all the info.</p>
            <cite>&mdash; Mitch Steimel
              <p>Southleft</p>
            </cite>
          </blockquote>
          <blockquote>
            <p>I have followed Greg&apos;s career from the beginning and I&apos;m continually impressed with what he brings to the table.</p>
            <cite>&mdash; Daniel Mall
              <p>Entrepreneur</p>
            </cite>
          </blockquote>
        </div>
        
        <div className={styles.description}>
          <h3>Little bit about me</h3>
          <p>With experience spanning SAAS-based companies and agencies, I have developed a well-rounded understanding of various architectures. Passionate about highly technical conversations, I am always eager to participate in live coding sessions.</p>
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
                  <div className={styles.tags}>
                    {item.tags.map((tag, index) =>{
                      return (
                        <span className={styles.tag} key={index}>{tag.label}</span>
                      )
                    })}
                  </div>
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
        <img src="/greg-face-2.png" alt="greg" className={imageclass1} />
        <img src="/greg-face.png" alt="greg" className={imageclass2} />
      </div>
    </main>
  )
}

