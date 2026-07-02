import SkillsMarquee from './SkillsMarquee';
import Certification from './Certification';
import Articles from './Articles';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Star, Zap, Cpu } from 'lucide-react';
import ktkImage from '../assets/KTK.png';
//logo import
import reactLogo from '../assets/react-logo.png'; 
import reactNativeLogo from '../assets/react-native-logo.png';
import javaLogo from '../assets/java-logo.png';
import jsLogo from '../assets/js-logo.png';
import htmlcssLogo from '../assets/htmlcss-logo.png';
import phpLogo from '../assets/hp-lpogo.png';
import pythonLogo from '../assets/python-logo.png';
import nodejsLogo from '../assets/nodejs-logo.png';
import firebaseLogo from '../assets/firebase-logo.png';
import mongodbLogo from '../assets/mongodb-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';
import gitLogo from '../assets/git-logo.png';
import figmaLogo from '../assets/figma-logo.png';
import qaAutomationLogo from '../assets/qaa-logo.png';
import baLogo from '../assets/ba-logo.png';
import cloudaiLogo from '../assets/cloudai-logo.png';
// import EnhancedBackgroundAnimations from './Animation';



const Portfolio = () => {
    // Typing effect states
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  // Roles for typing animation
  const roles = [
    "  Project Management",
    "  Quality Assurance",
    "  Business Analyst",
    "  Web Development",
  ];

  // Typing animation logic
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      if (!isDeleting && typedText === fullText) {
        setIsDeleting(true);
        setDelta(100);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);
      }
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    return () => clearTimeout(ticker);
  }, [typedText, isDeleting, delta, loopNum]);

  // Smooth scroll to section
  // (Removed duplicate declaration)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isHuman, setIsHuman] = useState(false);

    const handleContactChange = (e) => {
      const { name, value } = e.target;
      setContactForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = (e) => {
      e.preventDefault();
      if (!isHuman) {
        setFormStatus('Please confirm you are human.');
        return;
      }
      setFormStatus('Sending...');
      emailjs.send(
        'service_59sisvb',
        'template_jtnfvln',
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
        },
        'prWynF6MLefTLNOL8'
      )
      .then(
        () => {
          setFormStatus('Message sent!');
          setContactForm({ name: '', email: '', message: '' });
          setIsHuman(false);
        },
        (error) => {
          setFormStatus('Failed to send. Please try again.');
        }
      );
    };

  
  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const skills = [
    { name: 'React.js', color: 'from-blue-400 to-cyan-500', icon: <Zap className="w-6 h-6" />, logo: reactLogo },
    { name: 'React Native', color: 'from-blue-400 to-cyan-500', icon: <Zap className="w-6 h-6" />, logo: reactNativeLogo },
    { name: 'Java', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: javaLogo },
    { name: 'JavaScript', color: 'from-blue-400 to-cyan-500', icon: <Code className="w-6 h-6" />, logo: jsLogo },
    { name: 'HTML/CSS', color: 'from-blue-400 to-cyan-500', icon: <Globe className="w-6 h-6" />, logo: htmlcssLogo },
    { name: 'PHP', color: 'from-blue-400 to-cyan-500', icon: <Code className="w-6 h-6" />, logo: phpLogo },
    { name: 'Python', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: pythonLogo },
    { name: 'Node.js', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-6 h-6" />, logo: nodejsLogo },
    { name: 'MySQL', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-6 h-6" />, logo: mysqlLogo },
    { name: 'Git', color: 'from-blue-400 to-cyan-500', icon: <Code className="w-6 h-6" />, logo: gitLogo },
    { name: 'Figma Design', color: 'from-blue-400 to-cyan-500', icon: <Star className="w-6 h-6" />, logo: figmaLogo },
    { name: 'QA Testing', color: 'from-blue-400 to-cyan-500', icon: <Star className="w-6 h-6" />, logo: qaAutomationLogo },
    { name: 'Business Analysis', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: baLogo },
    { name: 'Cloud & AI Basics', color: 'from-blue-400 to-cyan-500', icon: <Zap className="w-6 h-6" />, logo: cloudaiLogo },
    { name: 'Firebase', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: firebaseLogo },
    { name: 'MongoDB', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-6 h-6" />, logo: mongodbLogo }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* <EnhancedBackgroundAnimations /> */}
     
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="font-goldman text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        K T K Digital Hub
      </div>

      {/* Desktop Navigation */}
      <div className="font-goldman text-md hidden md:flex space-x-7">
      {['Home', 'About', 'Skills', 'Projects',  'Certification', 'Articles', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={`font-goldman relative hover:text-blue-400 transition-all duration-300 group ${
              activeSection === item.toLowerCase() ? 'text-blue-400' : ''
            }`}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

       {/* Mobile Navigation */}
  {isMenuOpen && (
    <div className="font-goldman md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50">
      <div className="px-2 pt-2 pb-3 space-y-1">
  {['Home', 'About', 'Skills', 'Projects', 'Articles', 'Certification', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="block w-full text-left px-3 py-2 text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )}
</nav> 


      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* <FloatingParticles /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Animated Avatar */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto relative">
                {/* SVG Stroke Animation */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
      <circle
        cx="64" cy="64" r="60"
        fill="none"
        stroke="url(#avatarGradient)"
        strokeWidth="4"
        strokeDasharray="377"
        strokeDashoffset="377"
        className="avatar-stroke-animate"
      />
      <defs>
        <linearGradient id="avatarGradient" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
    
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={ktkImage} alt="KTK" className="w-27 h-27 object-cover rounded-full" />
                </div>
              </div>
            </div>
            

            <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="font-cinzel bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                K T Kodithuwakku
              </span>
            </h1>
              <p className="font-cinzel text-xl md:text-xl text-gray-300 mb-2 max-w-3xl mx-auto leading-relaxed">
                I am an IT graduate, passionate about building innovative solutions<br/>
                with strong interests in,
              </p>
              <span className="font-cinzel block mt-2 text-transparent text-xl font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {typedText}
                <span className="blinking-cursor">|</span>
              </span>
              <style>{`
                .blinking-cursor {
                  animation: blink 1s steps(2, start) infinite;
                }
                @keyframes blink {
                  to { opacity: 0; }
                }
              `}</style>
            
            
            <div className="flex justify-center space-x-4 mb-12 mt-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <span className="font-cinzel text-sm relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group overflow-hidden"
              >
                <span className="font-cinzel text-sm relative z-10 group-hover:text-gray-900 transition-colors duration-300">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/kithmal0015" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:kithmaltharinda7078@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes avatarStroke {
            to { stroke-dashoffset: 0; }
          }
          .avatar-stroke-animate {
            animation: avatarStroke 2s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
      </section>


  {/* About Section */}
  <About />

  {/* Skills Section */}
      <section id="skills" className="font-Libertinus-Sans py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
          </div>

          <SkillsMarquee skills={skills} />
        </div>
      </section>

  {/* Floating particles in skill cards */}
  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
  </div>

 {/* Projects Section */}
  <Projects />

 {/* Certification Section */}
  <Certification />

 {/* Articles Section */}
  <Articles />


      {/* Contact Section */}
      <section id="contact" className="font-Libertinus-Sans py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="font-Libertinus Sans text-gray-300 mb-8 leading-relaxed text-justify">
                  I am open to new projects and working partnerships. All you have to do is enter your name, email & your message and click the send message button to get your work done as you wish.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-Libertinus Sansgroup-hover:text-blue-400 transition-colors duration-300">kithmaltharinda7078@gmail.com</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="font-Libertinus Sansgroup-hover:text-purple-400 transition-colors duration-300">github.com/kithmal0015</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-pink-600 to-red-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="font-Libertinus Sansgroup-hover:text-pink-400 transition-colors duration-300">linkedin.com/in/kithmal-tharinda-kodithuwakku</span>
                  </div>
                </div>
              </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300 relative overflow-hidden group">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <form className="relative z-10 space-y-6" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="font-Libertinus Sansblock text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-gray-700/70 transition-all duration-300 hover:border-gray-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-Libertinus Sans block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-gray-700/70 transition-all duration-300 hover:border-gray-500"
                      placeholder="Youremail@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-Libertinus Sansblock text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-gray-700/70 transition-all duration-300 hover:border-gray-500 resize-none"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="humanCheck"
                      checked={isHuman}
                      onChange={(e) => setIsHuman(e.target.checked)}
                      className="mr-2 accent-blue-500"
                    />
                    <label htmlFor="humanCheck" className="font-Libertinus Sanstext-gray-300 text-sm select-none">
                      I am not a robot
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={!isHuman}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn ${!isHuman ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="font-Libertinus Sansabsolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  {formStatus && (
                    <div className="mt-4 text-green-400 font-semibold text-center">{formStatus}</div>
                  )}
                </form>
                
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Footer Section */}
      <Footer scrollToSection={scrollToSection} />

      {/* Back to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 group"
      >
        <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Portfolio;

