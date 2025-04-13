// Education and certifications data and functionality

document.addEventListener('DOMContentLoaded', function() {
  loadEducation();
  loadCertifications();
});

// Education data based on resume
const education = [
  {
    id: 1,
    degree: "Master of Science in Information Technology",
    school: "Arizona State University",
    location: "Arizona, USA",
    period: "Aug 2023 - May 2025",
    gpa: "4.0/4.0",
    description: "Focusing on advanced data analytics, machine learning, and supply chain management systems.",
    courses: [
      "Data Mining",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud Computing",
      "Project And Supply Chain Management"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Gujarat Technological University",
    location: "India",
    period: "Aug 2018 - June 2022",
    gpa: "8.90/10",
    description: "Gained strong foundational knowledge in computer science principles and programming.",
    courses: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management System",
      "Probability and Statistics",
      "Big Data"
    ]
  }
];

// Certification data based on resume
const certifications = [
  {
    id: 1,
    title: "Hacker Rank SQL",
    issuer: "HackerRank",
    issuerIcon: "fab fa-hackerrank",
    date: "2023",
    description: "Advanced SQL certification demonstrating proficiency in complex queries, database optimization, and data manipulation techniques.",
    link: "#"
  },
  {
    id: 2,
    title: "GenAI",
    issuer: "DataBricks",
    issuerIcon: "fas fa-database",
    date: "2023",
    description: "Comprehensive certification in Generative AI techniques and applications, including transformers, diffusion models, and prompt engineering.",
    link: "#"
  },
  {
    id: 3,
    title: "AWS S3",
    issuer: "Amazon Web Services",
    issuerIcon: "fab fa-aws",
    date: "2023",
    description: "Specialized AWS certification focused on S3 storage solutions, data management, and cloud-based data pipelines.",
    link: "#"
  },
  {
    id: 4,
    title: "Jira",
    issuer: "Atlassian",
    issuerIcon: "fab fa-jira",
    date: "2022",
    description: "Project management certification demonstrating expertise in Agile workflow implementation using Jira.",
    link: "#"
  },
  {
    id: 5,
    title: "Data Science in Python",
    issuer: "Coursera",
    issuerIcon: "fab fa-python",
    date: "2022",
    description: "Comprehensive data science certification covering data analysis, manipulation, visualization, and machine learning with Python.",
    link: "#"
  },
  {
    id: 6,
    title: "Cisco Data Science",
    issuer: "Cisco",
    issuerIcon: "fas fa-server",
    date: "2021",
    description: "Industry-recognized certification in data science methodologies, tools, and best practices.",
    link: "#"
  }
];

// Load education data
function loadEducation() {
  const educationCards = document.getElementById('educationCards');
  if (!educationCards) return;
  
  educationCards.innerHTML = '';
  
  education.forEach(edu => {
    const eduCard = document.createElement('div');
    eduCard.className = 'education-card';
    
    const coursesHTML = edu.courses
      .map(course => `<span>${course}</span>`)
      .join('');
    
    eduCard.innerHTML = `
      <div class="edu-date">${edu.period}</div>
      <h3 class="edu-degree">${edu.degree}</h3>
      <h4 class="edu-school"><i class="fas fa-university"></i> ${edu.school}, ${edu.location}</h4>
      <div class="edu-gpa"><i class="fas fa-award"></i> GPA: ${edu.gpa}</div>
      <p class="edu-desc">${edu.description}</p>
      <h5 class="edu-courses-title">Key Coursework:</h5>
      <div class="edu-skills">
        ${coursesHTML}
      </div>
    `;
    
    educationCards.appendChild(eduCard);
  });

  // Add animation to education cards
  setTimeout(() => {
    const cards = document.querySelectorAll('.education-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200);
    });
  }, 300);
}

// Load certifications data
function loadCertifications() {
  const certContainer = document.getElementById('certificationsContainer');
  if (!certContainer) return;
  
  certContainer.innerHTML = '';
  
  certifications.forEach(cert => {
    const certItem = document.createElement('div');
    certItem.className = 'certification-item';
    
    certItem.innerHTML = `
      <div class="certification-content">
        <div class="certification-date">${cert.date}</div>
        <h3 class="certification-title">${cert.title}</h3>
        <h4 class="certification-issuer"><i class="${cert.issuerIcon}"></i> ${cert.issuer}</h4>
        <p class="certification-desc">${cert.description}</p>
        
      </div>
    `;
    
    certContainer.appendChild(certItem);
  });

  // Initialize certification animation
  initCertificationAnimation();
}

// Initialize certification items animation
function initCertificationAnimation() {
  const certItems = document.querySelectorAll('.certification-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });
  
  certItems.forEach(item => {
    observer.observe(item);
  });
}