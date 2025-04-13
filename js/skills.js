// Skills section tabs functionality

document.addEventListener('DOMContentLoaded', function() {
    initSkillTabs();
    animateInitialProgressBars();
  });
  
  // Initialize skill tabs
  function initSkillTabs() {
    const tabButtons = document.querySelectorAll('.skill-category');
    
    if (!tabButtons.length) {
      console.error('Skill category buttons not found');
      return;
    }
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Log to check if the click event is firing
        console.log('Skill tab clicked:', this.getAttribute('data-tab'));
        
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the tab id
        const tabId = this.getAttribute('data-tab');
        
        // Hide all content tabs
        const contentTabs = document.querySelectorAll('.skills-content-tab');
        contentTabs.forEach(tab => {
          tab.classList.remove('active');
        });
        
        // Show the selected tab
        const selectedTab = document.getElementById(`${tabId}-tab`);
        if (selectedTab) {
          selectedTab.classList.add('active');
          animateProgressBars(selectedTab);
        } else {
          console.error(`Tab content with id ${tabId}-tab not found`);
        }
      });
    });
  }
  
  // Animate progress bars
  function animateProgressBars(container) {
    const progressBars = container.querySelectorAll('.progress-bar span');
    
    progressBars.forEach(bar => {
      // Get the target width from the style attribute
      const targetWidth = bar.style.width;
      
      // Reset width to 0
      bar.style.width = '0%';
      
      // Animate to target width after a short delay
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 50);
    });
  }
  
  // Animate initial progress bars
  function animateInitialProgressBars() {
    const activeTab = document.querySelector('.skills-content-tab.active');
    if (activeTab) {
      setTimeout(() => {
        animateProgressBars(activeTab);
      }, 500);
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Get all skill category buttons
    const skillButtons = document.querySelectorAll('.skill-category');
    
    // Add click event to each button
    skillButtons.forEach(button => {
      button.addEventListener('click', function() {
        // First, remove active class from all buttons
        skillButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to the clicked button
        this.classList.add('active');
        
        // Get the data-tab attribute value
        const tabId = this.getAttribute('data-tab');
        
        // Hide all content tabs
        const allTabs = document.querySelectorAll('.skills-content-tab');
        allTabs.forEach(tab => {
          tab.classList.remove('active');
        });
        
        // Show only the selected tab
        document.getElementById(tabId + '-tab').classList.add('active');
        
        // Animate progress bars in the newly shown tab
        const progressBars = document.querySelectorAll('#' + tabId + '-tab .progress-bar span');
        progressBars.forEach(bar => {
          const width = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = '0';
          
          setTimeout(() => {
            bar.style.width = width;
          }, 50);
        });
      });
    });
  });
// Skills section functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get all skill category buttons
    const skillButtons = document.querySelectorAll('.skill-category');
    const skillsContent = document.querySelector('.skills-content');
    
    // Define content for each category
    const categoryContent = {
      'data-analysis': `
        <div class="skills-progress">
          <div class="progress-item">
            <div class="progress-title">
              <h4>Python (Pandas, NumPy, TensorFlow)</h4>
              <span>90%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 90%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>SQL (MySQL, PostgreSQL, SQL Server)</h4>
              <span>95%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 95%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Tableau & Power BI</h4>
              <span>90%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 90%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>JavaScript & Web Technologies</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Statistical Analysis</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
        </div>
      `,
      'data-engineering': `
        <div class="skills-progress">
          <div class="progress-item">
            <div class="progress-title">
              <h4>ETL/ELT Pipelines</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Data Warehousing</h4>
              <span>80%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 80%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Apache Airflow</h4>
              <span>75%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 75%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Database Design & Optimization</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>MongoDB & NoSQL</h4>
              <span>70%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 70%"></span>
            </div>
          </div>
        </div>
      `,
      'soft-skills': `
        <div class="skills-progress">
          <div class="progress-item">
            <div class="progress-title">
              <h4>Team Leadership</h4>
              <span>90%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 90%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Problem Solving</h4>
              <span>95%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 95%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Communication</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Project Management</h4>
              <span>90%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 90%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Strategic Planning</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
        </div>
      `,
      'supply-chain': `
        <div class="skills-progress">
          <div class="progress-item">
            <div class="progress-title">
              <h4>Warehouse Optimization</h4>
              <span>90%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 90%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Inventory Management</h4>
              <span>95%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 95%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Logistics Network Analysis</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Demand Forecasting</h4>
              <span>80%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 80%"></span>
            </div>
          </div>
          <div class="progress-item">
            <div class="progress-title">
              <h4>Fulfillment Optimization</h4>
              <span>85%</span>
            </div>
            <div class="progress-bar">
              <span style="width: 85%"></span>
            </div>
          </div>
        </div>
      `
    };
    
    // Set initial content
    if (skillsContent) {
      // Find the active button
      const activeButton = document.querySelector('.skill-category.active');
      if (activeButton) {
        const initialTarget = activeButton.getAttribute('data-target');
        // Set initial content if available
        if (categoryContent[initialTarget]) {
          skillsContent.innerHTML = categoryContent[initialTarget];
        }
      }
    }
    
    // Add click event to each button
    skillButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        skillButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the target category
        const target = this.getAttribute('data-target');
        
        // Update content if category exists
        if (categoryContent[target] && skillsContent) {
          // Add fade effect
          skillsContent.style.opacity = 0;
          
          // Update content after a short delay
          setTimeout(() => {
            skillsContent.innerHTML = categoryContent[target];
            
            // Animate progress bars
            const progressBars = skillsContent.querySelectorAll('.progress-bar span');
            progressBars.forEach(bar => {
              const width = bar.style.width;
              bar.style.width = '0%';
              
              setTimeout(() => {
                bar.style.width = width;
              }, 50);
            });
            
            // Fade back in
            skillsContent.style.opacity = 1;
          }, 300);
        }
      });
    });
    
    // Add transition style for smooth animation
    const style = document.createElement('style');
    style.textContent = '.skills-content { transition: opacity 0.3s ease; }';
    document.head.appendChild(style);
  });
  // Skills filtering functionality - similar to project filtering

document.addEventListener('DOMContentLoaded', function() {
  initSkillsFilter();
  animateVisibleSkills();
});

// Initialize skills filtering
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-categories .skill-category');
  const skillItems = document.querySelectorAll('.skill-item');
  
  if (!filterBtns.length || !skillItems.length) {
    console.error('Skills filter buttons or skill items not found');
    return;
  }
  
  // Show all skills initially with animation
  setTimeout(() => {
    skillItems.forEach(item => {
      item.classList.add('show');
    });
  }, 300);
  
  // Add click event to filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Log for debugging
      console.log('Skill filter clicked:', btn.getAttribute('data-filter'));
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Get the filter value
      const filter = btn.getAttribute('data-filter');
      
      // Fade out all items first
      skillItems.forEach(item => {
        item.classList.remove('show');
        item.classList.add('fade-out');
      });
      
      // After fade-out animation, show/hide items based on filter
      setTimeout(() => {
        skillItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden', 'fade-out');
            setTimeout(() => {
              item.classList.add('show');
            }, 50);
          } else {
            item.classList.add('hidden');
          }
        });
      }, 300);
    });
  });
}

// Skills filtering functionality - similar to project filtering

document.addEventListener('DOMContentLoaded', function() {
  initSkillsFilter();
  animateVisibleSkills();
});

// Initialize skills filtering
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-categories .skill-category');
  const skillItems = document.querySelectorAll('.skill-item');
  
  if (!filterBtns.length || !skillItems.length) {
    console.error('Skills filter buttons or skill items not found');
    return;
  }
  
  // Show all skills initially with animation
  setTimeout(() => {
    skillItems.forEach(item => {
      item.classList.add('show');
    });
  }, 300);
  
  // Add click event to filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Log for debugging
      console.log('Skill filter clicked:', btn.getAttribute('data-filter'));
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Get the filter value
      const filter = btn.getAttribute('data-filter');
      
      // Fade out all items first
      skillItems.forEach(item => {
        item.classList.remove('show');
        item.classList.add('fade-out');
      });
      
      // After fade-out animation, show/hide items based on filter
      setTimeout(() => {
        skillItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden', 'fade-out');
            setTimeout(() => {
              item.classList.add('show');
            }, 50);
          } else {
            item.classList.add('hidden');
          }
        });
      }, 300);
    });
  });
}

// Animate progress bars for visible skills
function animateVisibleSkills() {
  const skillItems = document.querySelectorAll('.skill-item:not(.hidden)');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.progress-bar span');
        
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('style').split('width:')[1].trim();
          bar.style.width = '0';
          
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 100);
        });
        
        // Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  // Observe each skill item
  skillItems.forEach(item => {
    observer.observe(item);
  });
}