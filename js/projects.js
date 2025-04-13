// Projects data and functionality

document.addEventListener('DOMContentLoaded', function() {
  loadProjects();
  initProjectFilters();
});

// Project data based on resume
const projects = [
  {
    id: 1,
    title: "Chicago Crime Analysis",
    category: "data-analysis",
    categoryLabel: "Data Analysis",
    description: "Comprehensive analysis of Chicago crime data with predictive modeling to identify patterns and support strategic resource allocation for law enforcement.",
    image: "C:\Users\dshah\Downloads\download.jpg",
    tools: ["Python", "Tableau", "Pandas", "Matplotlib"],
    tableauLink: "https://public.tableau.com/app/profile/dharmik.shah2873/viz/Chicago_Crime_Analysis_17136777823450/ChicagoCrimeAnalysis", // Replace with actual link
    github: "https://github.com/dharmik2101/Chicago-Crime-Analysis", // Replace with actual link
    youtube: "https://youtu.be/Bc_Kz4oLVII", // Replace with actual link
    highlights: [
      "Performed data analysis on 5,000+ crime entries using Python, improving data extraction and cleaning for actionable insights.",
      "Developed Tableau dashboards to visualize crime trends, increasing arrest efficiency by 15% through strategic insights.",
      "Applied predictive modeling to forecast crime hotspots, improving resource allocation and strategic planning."
    ]
  },
  {
    id: 2,
    title: "Healthcare Patient Analysis",
    category: "data-analysis",
    categoryLabel: "Data Analysis",
    description: "Advanced healthcare analytics project focused on patient survival prediction and clinical decision support through interactive visualizations.",
    image: "/api/placeholder/350/200",
    tools: ["Python", "Tableau", "NumPy", "Matplotlib", "Predictive Modeling"],
    tableauLink: "https://public.tableau.com/app/profile/dharmik.shah2873/viz/HealthCare_Analysis/Dashboard1?publish=yes", // Replace with actual link
    github: "hhttps://github.com/dharmik2101/Healthcare-Analysis", // Replace with actual link
    highlights: [
      "Analyzed survival trends from 299 patient records, enabling high-risk identification with predictive modeling at 85% accuracy.",
      "Designed a Tableau dashboard featuring 10+ health metrics, streamlining clinical decisions and improving healthcare efficiency.",
      "Utilized Python, NumPy, and Matplotlib to extract actionable insights, enhancing patient survival predictions."
    ]
  },
  {
    id: 3,
    title: "Sales  Analysis",
    category: "supply-chain",
    categoryLabel: "Supply Chain",
    description: "The dashboard provides actionable insights for stakeholders, showcasing how factors like genre, platform, and publisher influence sales performance.",
    //image: "/api/placeholder/350/200",
    tools: ["Python", "SQL", "Tableau", "Excel", "CPLEX"],
    github: "https://github.com/dharmik2101/Global-Video-Game-Sales-Insights",
    tableauLink: "https://public.tableau.com/app/profile/dharmik.shah2873/viz/GlobalVideoGameSalesInsights/Dashboard1", // Replace with actual link
    highlights: [
      "Processed 16,000+ game sales records to pinpoint top genres and platforms, driving a 35% improvement in market targeting accuracy.",
      "Optimized data workflows using Python, SQL, and Tableau, expediting analysis by 45% and enabling data-driven decision-making.",
      "Synthesized global sales trends to empower stakeholders with actionable insights, boosting sales projections by 30%."
      
    ]
  },
  {
    id: 4,
    title: "McDonald's Food Nutritional Analysis",
    category: "data-analysis",
    categoryLabel: "Data Engineering",
    description: "Analyzed the nutritional content of McDonald's menu items to provide actionable insights into calorie distribution, macronutrient composition, and other key health metrics.",
    image: "/api/placeholder/350/200",
    tools: ["Python", "SQL", "Tableau"],
    github: "https://github.com/dshah125/insurance-claims-etl",
    tableauLink: "https://public.tableau.com/app/profile/dharmik.shah2873/viz/MCDFoodProject/Dashboard1", // Replace with actual link
    highlights: [
      "Engineered an ETL pipeline for insurance claims data, reducing processing time by 2.5 hours daily.",
      "Automated data validation and cleansing processes, ensuring 99.7% data accuracy.",
      "Implemented incremental loading to reduce processing overhead by 65%.",
      "Saved $50,000 annually through improved data processing efficiency."
    ]
  },
  {
    id: 5,
    title: "Microservices Architecture",
    category: "web-dev",
    categoryLabel: "Web Development",
    description: "Scalable microservices application leveraging Node.js and MongoDB for improved application performance and deployment efficiency.",
    //image: "/api/placeholder/350/200",
    tools: ["Node.js", "MongoDB", "Docker", "Kubernetes"],
    //github: "https://github.com/dshah125/microservices-app", // Replace with actual link
    highlights: [
      "Designed and implemented a microservices architecture enhancing application scalability by 50%.",
      "Reduced deployment time by 30% through containerization with Docker and Kubernetes.",
      "Improved API response times by 40% through efficient database design and query optimization.",
      "Implemented automated testing, achieving 92% code coverage."
    ]
  },
  {
    id: 6,
    title: "Warehouse Management Dashboard",
    category: "supply-chain",
    categoryLabel: "Supply Chain",
    description: "Interactive warehouse management dashboard providing real-time visibility into inventory, order processing, and space utilization.",
    image: "/api/placeholder/350/200",
    tools: ["Tableau", "SQL", "Python", "Excel"], 
    highlights: [
      "Designed a comprehensive warehouse management dashboard reducing order picking time by 22%.",
      "Implemented inventory heat maps to optimize warehouse space utilization, increasing capacity by 15%.",
      "Created predictive models for optimal stock placement, reducing worker travel time by 30%.",
      "Built KPI tracking dashboards reducing report generation time from 3 hours to 5 minutes."
    ]
  }
];

// Load projects into the DOM
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = '';
  
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

// Create project card element
function createProjectCard(project) {
  const projectElement = document.createElement('div');
  projectElement.className = 'project-card';
  projectElement.setAttribute('data-category', project.category);
  
  // Create tools HTML
  const toolsHTML = project.tools.map(tool => `<span>${tool}</span>`).join('');
  
  // Create links HTML
  let linksHTML = '';
  if (project.github) {
    linksHTML += `<a href="${project.github}" target="_blank" aria-label="View GitHub Repository"><i class="fab fa-github"></i></a>`;
  }
  if (project.tableauLink) {
    linksHTML += `<a href="${project.tableauLink}" target="_blank" aria-label="View Tableau Dashboard"><span class="custom-tableau-icon">T</span></a>`;
  }
  if (project.youtube) {
    linksHTML += `<a href="${project.youtube}" target="_blank" aria-label="View Demo Video"><i class="fab fa-youtube"></i></a>`;
  }
  
  // Create highlights HTML
  const highlightsHTML = project.highlights ? 
    `<div class="project-highlights">
       ${project.highlights.map(highlight => `<p>• ${highlight}</p>`).join('')}
     </div>` : '';
  
  projectElement.innerHTML = `
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      ${highlightsHTML}
      <div class="project-tools">
        ${toolsHTML}
      </div>
      <div class="project-links">
        ${linksHTML}
      </div>
    </div>
  `;
  
  return projectElement;
}

// Initialize project filters
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!filterBtns.length || !projectCards.length) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}