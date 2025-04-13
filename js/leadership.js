// Leadership and soft skills functionality and data

document.addEventListener('DOMContentLoaded', function() {
    loadSoftSkills();
  });
  
  // Soft skills data
  const softSkills = [
    {
      id: 1,
      title: "Team Leadership",
      icon: "fas fa-users",
      description: "Led cross-functional teams in multiple roles, coordinating efforts across departments and enhancing collaboration.",
      examples: [
        "Founded and led the Indian Cultural Association at ASU",
        "Coordinated multiple project teams simultaneously as Software Engineer Intern",
        "Organized Agile retrospectives to improve team morale"
      ]
    },
    {
      id: 2,
      title: "Problem Solving",
      icon: "fas fa-lightbulb",
      description: "Strong analytical approach to identifying obstacles and developing innovative solutions to complex challenges.",
      examples: [
        "Identified inefficiencies in student submission processes and implemented solutions",
        "Optimized inventory tracking, reducing discrepancies by 30%",
        "Engineered ETL pipeline reducing processing time by 2.5 hours daily"
      ]
    },
    {
      id: 3,
      title: "Strategic Planning",
      icon: "fas fa-chess",
      description: "Developed comprehensive strategic plans that align organizational goals with tactical execution.",
      examples: [
        "Designed strategic plans for international events at ASU",
        "Implemented data-driven recommendations for assignment submission improvement",
        "Developed strategic inventory management plans reducing food waste by 15%"
      ]
    },
    {
      id: 4,
      title: "Communication",
      icon: "fas fa-comments",
      description: "Excellent verbal and written communication skills, with the ability to translate technical concepts for diverse audiences.",
      examples: [
        "Presented findings and recommendations to senior management",
        "Created dashboards to communicate complex data insights to executives",
        "Presented insights to a board of directors, influencing future strategies"
      ]
    },
    {
      id: 5,
      title: "Resource Optimization",
      icon: "fas fa-chart-pie",
      description: "Skilled at maximizing resource efficiency and identifying opportunities for process improvement.",
      examples: [
        "Optimized resources by 30% at Indian Cultural Association",
        "Reduced cloud storage costs by 20% through SQL query optimization",
        "Slashed food waste by 15% through inventory management"
      ]
    },
    {
      id: 6,
      title: "Adaptability",
      icon: "fas fa-sync-alt",
      description: "Quickly adapts to changing environments, technologies, and requirements across diverse roles and projects.",
      examples: [
        "Transitioned across multiple roles in different industries",
        "Mastered diverse technology stacks and tools as needed for projects",
        "Adapted to shifting priorities while managing multiple projects"
      ]
    }
  ];
  
  // Load soft skills data
  function loadSoftSkills() {
    const softSkillsGrid = document.getElementById('softSkillsGrid');
    if (!softSkillsGrid) return;
    
    softSkillsGrid.innerHTML = '';
    
    softSkills.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'soft-skill-card';
      
      const examplesHTML = skill.examples
        .map(example => `<li>${example}</li>`)
        .join('');
      
      skillCard.innerHTML = `
        <div class="soft-skill-card-inner">
          <div class="soft-skill-front">
            <div class="soft-skill-icon">
              <i class="${skill.icon}"></i>
            </div>
            <h3 class="soft-skill-title">${skill.title}</h3>
            <p class="soft-skill-desc">${skill.description}</p>
          </div>
          <div class="soft-skill-back">
            <h3 class="soft-skill-title">Examples</h3>
            <ul class="soft-skill-examples">
              ${examplesHTML}
            </ul>
          </div>
        </div>
      `;
      
      softSkillsGrid.appendChild(skillCard);
    });
  
    // Add animation to soft skill cards
    setTimeout(() => {
      const cards = document.querySelectorAll('.soft-skill-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 100);
      });
    }, 300);
  }
// Add to your main.js file or create a leadership.js file
document.addEventListener('DOMContentLoaded', function() {
  animateSkillCards();
  animateAchievementStats();
});

// Animate skill cards when they enter viewport
function animateSkillCards() {
  const cards = document.querySelectorAll('.skill-card');
  
  if (!cards.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay based on index for staggered animation
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  // Set initial styles and observe
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
  });
}

// Animate achievement statistics with counter effect
function animateAchievementStats() {
  const statValues = document.querySelectorAll('.stat-value');
  
  if (!statValues.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        // Parse the number from string (strip any non-numeric characters)
        const value = parseInt(target.textContent.replace(/\D/g, ''));
        let startValue = 0;
        
        const duration = 2000; // ms
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentValue = Math.floor(startValue + progress * (value - startValue));
          
          // Add + symbol if original had it
          target.textContent = target.textContent.includes('+') ? 
            currentValue + '+' : currentValue;
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }
        
        requestAnimationFrame(updateCounter);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(stat => {
    observer.observe(stat);
  });
}