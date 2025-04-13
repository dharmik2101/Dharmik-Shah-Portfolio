// Experience section functionality and data

document.addEventListener('DOMContentLoaded', function() {
  loadExperience();
});

// Experience data
const experiences = [
  {
    id: 1,
    title: "Graduate Teaching Assistant",
    company: "Arizona State University",
    location: "USA",
    period: "Aug 2024 - May 2025",
    description: [
      "Analyzed student performance data using Python and Excel to identify trends and inefficiencies in assignment submissions.",
      "Developed and implemented data-driven recommendations, resulting in a 20% reduction in assignment submission delays.",
      "Created interactive dashboards to help professors track student performance and tailor instruction proactively.",
      "Identified bottlenecks in student submissions and implemented fixes within 48 hours, boosting on-time completion rates."
    ],
    category: "data-analysis"
  },
  {
    id: 2,
    title: "Management Trainee",
    company: "Aramark",
    location: "USA",
    period: "Nov 2023 - June 2024",
    description: [
      "Boosted diner satisfaction 22% by revamping menus using 500+ feedback surveys across five campus locations.",
      "Slashed food waste 15% by auditing inventory weekly and optimizing vendor orders for peak demand.",
      "Cut staff turnover 40% by shadowing teams and streamlining workflows to reduce burnout.",
      "Reduced meal wait times 25% by reorganizing staff schedules during peak hours proactively."
    ],
    category: "supply-chain"
  },
  {
    id: 3,
    title: "Jr. Web Developer",
    company: "Arth-I-Soft",
    location: "IND",
    period: "Nov 2022 - June 2023",
    description: [
      "Engineered an ETL pipeline for insurance claims data, reducing processing time by 2.5 hours daily and costs by $50,000 annually.",
      "Designed Tableau dashboards for real-time KPI tracking, improving operational efficiency by 15%.",
      "Improved inventory tracking accuracy by 30% by implementing data validation and error-checking mechanisms.",
      "Organized Agile retrospectives to improve team morale and sprint efficiency."
    ],
    category: "web-dev"
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Seaflux",
    location: "IND",
    period: "Feb 2022 - July 2022",
    description: [
      "Designed a microservices application with Node.js & MongoDB, enhancing scalability by 50% & decreasing deployment time by 30%.",
      "Managed multiple projects simultaneously, prioritizing tasks and eliminating blockers to ensure on-time delivery.",
      "Collaborated with cross-functional teams to deliver scalable solutions, demonstrating teamwork and project management skills.",
      "Reduced cloud storage costs by 20% by optimizing SQL queries and archiving redundant data."
    ],
    category: "web-dev"
  },
  {
    id: 5,
    title: "Data Analyst Intern",
    company: "FelxiPhase",
    location: "IND",
    period: "May 2021 - Oct 2021",
    description: [
      "Analyzed 10,000+ shipment records in SQL to identify cost-saving routes, reducing logistics spend by 15%.",
      "Optimized inventory tracking accuracy by 30% using SQL-driven data validation, reducing stock discrepancies.",
      "Automated supply chain reports in Python, cutting analysis time by 45% and improving demand forecasting.",
      "Built Tableau dashboards for real-time inventory visibility, enabling data-driven warehouse optimization."
    ],
    category: "data-analysis"
  }
];

// Load experience data into the timeline
function loadExperience() {
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;
  
  timeline.innerHTML = '';
  
  experiences.forEach((exp, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-category', exp.category);
    
    const descriptionHTML = exp.description
      .map(item => `• ${item}`)
      .join('<br>');
    
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${exp.period}</div>
        <h3 class="timeline-title">${exp.title}</h3>
        <h4 class="timeline-subtitle">${exp.company}, ${exp.location}</h4>
        <p class="timeline-desc">
          ${descriptionHTML}
        </p>
      </div>
    `;
    
    timeline.appendChild(timelineItem);
  });

  // Initialize the timeline animation after loading
  initTimelineAnimation();
}

// Initialize timeline animation
function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}