'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const navigation = ['home', 'about', 'skills', 'projects', 'contact'];

const projects = [
  {
    title: 'MoonFashionPT',
    description: 'A Portugal-based lifestyle store for premium perfumes, jewelry, and watches, built around an elegant and trustworthy shopping experience.',
    image: '/moon.png',
    tech: ['Laravel', 'SQL', 'JavaScript', 'Bootstrap'],
    link: 'https://moonfashionpt.com/',
  },
  {
    title: 'Inventory Management System',
    description: 'A complete operations platform with live stock tracking, POS, purchases, supplier management, and actionable reporting.',
    image: '/inventory.png',
    tech: ['Laravel', 'SQL', 'JavaScript', 'Angular'],
    link: 'https://nickbd.com/',
  },
  {
    title: 'NICK E-commerce',
    description: 'A modern fashion commerce experience with secure checkout, a responsive storefront, and streamlined order management.',
    image: '/roubi.png',
    tech: ['Laravel', 'SQL', 'JavaScript', 'Bootstrap'],
    link: 'https://rabiulincubator.com',
  },
  {
    title: '1BackPack',
    description: 'An education platform where teams create articles and generate related questions with AI-assisted workflows.',
    image: '/backpack.PNG',
    tech: ['Angular', 'Editor.js', 'Firebase', 'Bootstrap'],
    link: 'https://backpack-v3-1.web.app',
  },
  {
    title: 'DeAutoApp',
    description: 'A multi-vendor web and mobile product that simplifies automotive service management for garages and vehicle owners.',
    image: '/deautoapp.PNG',
    tech: ['Angular', 'Node.js', 'SQL', 'REST API'],
    link: 'https://deautoapp.nl/',
  },
  {
    title: 'BackPack Website',
    description: 'A fast, responsive education website designed and delivered with Angular and Firebase.',
    image: '/backpackwebsite.PNG',
    tech: ['Angular', 'Firebase', 'Bootstrap'],
    link: 'https://backpack-dev-website.web.app',
  },
  {
    title: 'PhotoParivar',
    description: 'A professional network connecting photographers, studios, freelancers, and businesses to collaborate and grow.',
    image: '/iwp_image.PNG',
    tech: ['PHP', 'Laravel', 'SQL', 'JavaScript'],
    link: 'https://photoparivar.in/',
  },
  {
    title: 'Studio All In',
    description: 'A full-stack sports news platform with an editorial workflow and a responsive publishing experience.',
    image: '/sai image.PNG',
    tech: ['PHP', 'Laravel', 'JavaScript', 'SQL'],
    link: 'https://studioallin.se/',
  },
  {
    title: 'DeAutoApp Mobile',
    description: 'A location-aware mobile app for discovering nearby garages, comparing options, and booking car services.',
    image: '/appicon.jpg',
    tech: ['Flutter', 'Dart', 'SQL', 'REST API'],
    link: 'https://play.google.com/store/apps/details?id=com.deauto.app',
  },
  {
    title: 'Organic Meal',
    description: 'A full-stack food delivery experience with a polished storefront and straightforward ordering flow.',
    image: '/organic.PNG',
    tech: ['Laravel', 'SQL', 'Tailwind CSS', 'JavaScript'],
    link: 'https://shawon005.github.io/organic_meal_design/',
  },
  {
    title: 'Bio Controller',
    description: 'A modern real-time controller interface with accessible interactions and smooth motion design.',
    image: '/biocontroller.PNG',
    tech: ['Next.js', 'Flow.js', 'Firebase', 'Framer Motion'],
    link: '',
  },
  {
    title: 'Hotel Alvsjo',
    description: 'A full-stack hotel management platform supporting the core guest and property workflows.',
    image: '/hotel.PNG',
    tech: ['Laravel', 'JavaScript', 'SQL'],
    link: '',
  },
  {
    title: 'Travel Agency',
    description: 'A full-stack travel platform created to make browsing and managing trips feel simple.',
    image: '/travel.PNG',
    tech: ['Laravel', 'JavaScript', 'SQL'],
    link: '',
  },
  {
    title: 'IT Company Portfolio',
    description: 'A flexible company website that presents services, expertise, and client work with clarity.',
    image: '/notigate.PNG',
    tech: ['Laravel', 'JavaScript', 'SQL'],
    link: '',
  },
];

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Angular', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 80 },
  { name: 'TypeScript', level: 80 },
  { name: 'SQL', level: 75 },
  { name: 'Firebase', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Bootstrap', level: 90 },
  { name: 'Editor.js', level: 85 },
  { name: 'Git', level: 85 },
  { name: 'Flutter', level: 65 },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
    </svg>
  );
}

function TiltCard({ children, className = '', style }) {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty('--rotate-x', `${(0.5 - y) * 8}deg`);
    card.style.setProperty('--rotate-y', `${(x - 0.5) * 10}deg`);
    card.style.setProperty('--pointer-x', `${x * 100}%`);
    card.style.setProperty('--pointer-y', `${y * 100}%`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--pointer-x', '50%');
    card.style.setProperty('--pointer-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const shellRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const section of navigation) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let frameId;
    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        shellRef.current?.style.setProperty('--cursor-x', `${event.clientX}px`);
        shellRef.current?.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <main ref={shellRef} className="portfolio-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollToSection('home')} aria-label="Go to home">
            <span className="brand-mark">OS</span>
            <span className="brand-copy">
              <strong>Omar Faruk Shawon</strong>
              <small>Full-stack developer</small>
            </span>
          </button>

          <div className="desktop-nav">
            {navigation.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={activeSection === item ? 'active' : ''}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>

          <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            {navigation.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="hero section-wrap">
        <div className="hero-content">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span /> Available for new opportunities</div>
            <p className="hero-kicker">FULL-STACK WEB &amp; MOBILE DEVELOPER</p>
            <h1>
              I build digital products<br />
              that feel <span className="gradient-text">exceptional.</span>
            </h1>
            <p className="hero-description">
              I&apos;m Omar Faruk Shawon — a product-minded developer turning ambitious ideas into fast,
              scalable, and thoughtfully crafted experiences.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollToSection('projects')}>
                Explore my work <ArrowIcon />
              </button>
              <button className="secondary-button" onClick={() => scrollToSection('contact')}>
                Let&apos;s work together
              </button>
            </div>
            <div className="hero-metrics" aria-label="Career highlights">
              <div><strong>5+</strong><span>Years building</span></div>
              <div><strong>14+</strong><span>Products shipped</span></div>
              <div><strong>10+</strong><span>Happy clients</span></div>
            </div>
          </div>

          <div className="hero-visual reveal-scale" aria-label="Portrait of Omar Faruk Shawon">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <div className="profile-glow" />
            <TiltCard className="profile-card">
              <div className="profile-code">&lt;developer /&gt;</div>
              <div className="profile-image-wrap">
                <Image
                  src="/profile_image.png"
                  alt="Omar Faruk Shawon"
                  fill
                  sizes="(max-width: 900px) 72vw, 440px"
                  className="profile-image"
                  priority
                />
              </div>
              <div className="profile-status">
                <span className="status-dot" />
                <div><strong>Open to work</strong><small>Based in Bangladesh · Remote ready</small></div>
              </div>
            </TiltCard>
            <div className="floating-chip chip-react">React</div>
            <div className="floating-chip chip-laravel">Laravel</div>
            <div className="floating-chip chip-flutter">Flutter</div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollToSection('about')} aria-label="Scroll to about section">
          <span>Scroll to discover</span><i />
        </button>
      </section>

      <section id="about" className="content-section section-wrap">
        <div className="section-heading">
          <div><span className="section-number">01</span><p>About me</p></div>
          <h2>Engineering with purpose.<br /><span>Designing with empathy.</span></h2>
          <p>I combine dependable engineering with product thinking to create software people enjoy using.</p>
        </div>

        <div className="about-grid">
          <TiltCard className="about-story panel">
            <div className="panel-label"><CodeIcon /> My journey</div>
            <h3>From curiosity to production-ready products.</h3>
            <p>
              My journey into software development began in 2018 with a curiosity about how digital tools work
              and a drive to build useful things on the internet. That curiosity grew into a career spanning
              full-stack web and cross-platform mobile development.
            </p>
            <p>
              I&apos;ve since worked with startups, freelance clients, and distributed teams — transforming early
              ideas into scalable products using Angular, React, Laravel, Flutter, and Firebase.
            </p>
            <div className="story-line"><span /><small>Currently focused on accessible, high-performance product experiences.</small></div>
          </TiltCard>

          <div className="principles-grid">
            {[
              ['01', 'Product thinking', 'I look beyond tickets to understand the user and business outcome.'],
              ['02', 'Clean execution', 'Maintainable code, considered details, and reliable delivery come standard.'],
              ['03', 'Always learning', 'I stay curious, test ideas quickly, and keep improving the way I build.'],
              ['04', 'Clear partnership', 'Good work starts with honest communication and shared ownership.'],
            ].map(([number, title, copy]) => (
              <TiltCard className="principle-card panel" key={title}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="content-section section-wrap">
        <div className="section-heading split-heading">
          <div><span className="section-number">02</span><p>Technical toolkit</p></div>
          <h2>Technologies I use<br /><span>to ship great work.</span></h2>
          <p>From front-end polish to back-end architecture, I choose tools that fit the product.</p>
        </div>

        <div className="skills-panel panel">
          <div className="skills-topline">
            <span>Core competencies</span>
            <small>Continually evolving</small>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill.name} style={{ '--delay': `${index * 35}ms` }}>
                <div><strong>{skill.name}</strong><span>{skill.level}%</span></div>
                <div className="skill-track"><i style={{ '--skill-level': `${skill.level}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="content-section section-wrap projects-section">
        <div className="section-heading split-heading">
          <div><span className="section-number">03</span><p>Selected work</p></div>
          <h2>Products built for<br /><span>real-world impact.</span></h2>
          <p>A selection of commerce, operations, education, automotive, and service products.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <TiltCard
              key={project.title}
              className="project-card panel"
              style={{ '--delay': `${(index % 3) * 80}ms` }}
            >
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="project-image"
                />
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-launch" aria-label={`Open ${project.title}`}>
                    <ArrowIcon />
                  </a>
                )}
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                {project.link ? (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    View live project <ArrowIcon />
                  </a>
                ) : (
                  <span className="project-link muted">Private project</span>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section section-wrap contact-section">
        <div className="contact-panel panel">
          <div className="contact-copy">
            <div className="eyebrow"><span /> Let&apos;s build something useful</div>
            <h2>Have a product in mind?<br /><span>Let&apos;s make it real.</span></h2>
            <p>I&apos;m open to freelance projects, product collaborations, and full-time opportunities.</p>
            <a className="contact-email" href="mailto:shawonomar05@gmail.com">
              shawonomar05@gmail.com <ArrowIcon />
            </a>
          </div>

          <div className="contact-details">
            <a href="mailto:shawonomar05@gmail.com"><small>Email</small><strong>shawonomar05@gmail.com</strong></a>
            <a href="tel:+8801857751705"><small>Phone</small><strong>+880 1857 751705</strong></a>
            <div><small>Location</small><strong>Dhaka, Bangladesh</strong></div>
            <a href="/OmarFarukShawon_CV.pdf" download><small>Resume</small><strong>Download my CV <ArrowIcon /></strong></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="brand"><span className="brand-mark">OS</span><span className="brand-copy"><strong>Omar Faruk Shawon</strong><small>Built with care and clean code.</small></span></div>
          <p>© {new Date().getFullYear()} Omar Faruk Shawon. All rights reserved.</p>
          <button onClick={() => scrollToSection('home')}>Back to top ↑</button>
        </div>
      </footer>
    </main>
  );
}
