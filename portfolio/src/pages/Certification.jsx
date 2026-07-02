import React, { useState } from 'react';

const certifications = [
  {
    title: "Microsoft Power BI for Beginners",
    color: "blue-400",
    border: "blue-400",
    provider: "Simpli Learn | 2026",
    link: "https://simpli-web.app.link/e/QAAQlvgLr4b",
    category: "Business Analytics"
  },
  {
    title: "6th Student Symposium on Research about Genetic AI with QA",
    color: "purple-400",
    border: "purple-400",
    provider: "KDU | 2026",
    link: "https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/overlay/1769301263746/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BL1MqFgFXRo2Im5qlGAJg5Q%3D%3D",
    category: "Other Certificates"
  },
  {
    title: "Business Analytics Fundamentals",
    color: "pink-400",
    border: "pink-400",
    provider: "Coursera | 2024",
    link: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE1",
    category: "Business Analytics"
  },
  {
    title: "Python in Visual Studio Code",
    color: "blue-400",
    border: "blue-400",
    provider: "Microsoft Learn | 2025",
    link: "https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1742275073365/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D",
    category: "Other Certificates"
  },
  {
    title: "Create an Agent with Copilot",
    color: "purple-400",
    border: "purple-400",
    provider: "Microsoft Learn | 2025",
    link: "https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1742016289902/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D",
    category: "Artificial intelligence"
  },
  {
    title: "Master Generative AI",
    color: "pink-400",
    border: "pink-400",
    provider: "Alison | 2025",
    link: "https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1738988211875/single-media-viewer?type=DOCUMENT&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D",
    category: "Artificial intelligence"
  },
  {
    title: "Computer Hardware Basics",
    color: "blue-400",
    border: "blue-400",
    provider: "Cisco  | 2025",
    link: "https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1756212439470/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BC0Nox8wTTtqrku%2B1PIk6PA%3D%3D",
    category: "Other Certificates"
  },
  {
    title: "Introduction to Networks",
    color: "purple-400",
    border: "purple-400",
    provider: "Cisco | 2025",
    link: "https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1756212156734/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D",
    category: "Other Certificates"
  },
  {
    title: "UI/UX Workshop",
    color: "pink-400",
    border: "pink-400",
    provider: "CSSL | 2025",
    link: "https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_uiux-userexperience-designthinking-activity-7366111214025736192-ckBp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4",
    category: "Other Certificates"
  },
  {
    title: "What Is Generative AI?",
    color: "blue-400",
    border: "blue-400",
    provider: "Linkedin Learing | 2025",
    link: "https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_generativeai-artificialintelligence-learningjourney-activity-7284617025690230785-wmY0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4",
    category: "Project Management"
  },
  {
    title: "AI for Beginners",
    color: "purple-400",
    border: "purple-400",
    provider: "HP LIFE online | 2025",
    link: "https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_ai-artificialintelligence-lifelonglearning-activity-7284531580256010240-HZtA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4",
    category: "Artificial intelligence"
  },
  {
    title: "Introduction to IOT",
    color: "pink-400",
    border: "pink-400",
    provider: "Cisco | 2023",
    link: "https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_successfully-completed-internet-of-things-activity-7095982155905863680-6uV5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4",
    category: "Other Certificates"
  },
  {
    title: "ICT (NDICT)",
    color: "blue-400",
    border: "blue-400",
    provider: "ICTA  | 2022",
    link: "https://media.licdn.com/dms/image/v2/D5622AQEoDKYWKQVbSw/feedshare-shrink_800/B56ZScPIPFHsAg-/0/1737788029083?e=1759968000&v=beta&t=GVwG09EKnqjaWxnq7hGxERKg_kBaELrqiHVTaU4ZRCQ",
    category: "Web Development"
  },
  {
    title: "Data Analysis using Microsoft Word",
    color: "purple-400",
    border: "purple-400",
    provider: "coursera | 2023",
    link: "https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_completion-certificate-for-getting-started-activity-7053634445131620352--IdI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4",
    category: "Business Analytics"
  },
  {
    title: "Data Analysis using Microsoft Excel",
    color: "pink-400",
    border: "pink-400",
    provider: "coursera | 2023",
    link: "https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_completion-certificate-for-introduction-to-activity-7053399991075151872-tgkd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4",
    category: "Business Analytics"
  }
];

const categories = [
  "All",
  "Business Analytics",
  "Quality Assurance",
  "Artificial intelligence",
  "Web Development",
  "Other Certificates",

];

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const initialCount = 6;
  const filteredCerts = selectedCategory === "All"
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);
  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, initialCount);

  return (
    <section id="certification" className="font-Libertinus-Sans py-20 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
        </div>

  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 items-center">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-goldman border-2 transition-all duration-200 ${selectedCategory === cat ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white border-blue-400' : 'bg-gray-900 text-blue-400 border-gray-700 hover:bg-blue-400 hover:text-white'}`}
              onClick={() => { setSelectedCategory(cat); setShowAll(false); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCerts.map((cert, idx) => {
            // Map tailwind color to actual hex for border
            const colorMap = {
              "blue-400": "#60a5fa",
              "purple-400": "#a78bfa",
              "pink-400": "#f472b6"
            };
            const borderColor = colorMap[cert.border] || "#60a5fa";
            return (
              <div
                key={idx}
                className="bg-gray-800/50 p-6 rounded-lg transition-all duration-300"
                style={{ border: `1.5px solid #374151` }}
                onMouseEnter={e => e.currentTarget.style.border = `1.5px solid ${borderColor}`}
                onMouseLeave={e => e.currentTarget.style.border = `1.5px solid #374151`}
              >
                <h3 className={`text-xl font-bold text-${cert.color} mb-2`}>{cert.title}</h3>
                <p className="text-gray-300 mb-2">{cert.provider}</p>
                <a href={cert.link} className={`text-${cert.color} hover:underline`} target="_blank" rel="noopener noreferrer">
                  View Credential
                </a>
              </div>
            );
          })}
        </div>

        {certifications.length > initialCount && (
          <div className="text-center mt-10">
            <button
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;
