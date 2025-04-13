// Testimonials functionality and data

document.addEventListener('DOMContentLoaded', function() {
    loadTestimonials();
    initTestimonialSlider();
  });
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Dharmik's exceptional technical proficiency in data visualization is matched only by his natural ability to communicate complex concepts clearly to students. His dedication to student success and innovative dashboard solutions significantly enhanced our department's educational effectiveness",
      name: "Dr. Asmaa Elbadrawy",
      position: "Professor of Information Technology, Arizona State University"
      

    },
    {
      id: 2,
      text: "Dharmik's data analysis skills transformed our supply chain operations. His ability to identify cost-saving logistics routes led to a 15% reduction in shipping expenses while maintaining service levels.",
      name: "Dr. Brian Atkison",
      position: "Professor of Information Technology, Arizona State University"
    
    },
    {
      id: 3,
      text: "Dharmik consistently demonstrates both technical expertise and outstanding leadership. As founder of the Indian Cultural Association, he optimized resources, increased engagement, and demonstrated exceptional organizational skills.",
      name: "Christina",
      position: "Director of Student Affairs, Arizona State University"
    },
    {
      id: 4,
      text: "Dharmik's ETL pipeline implementation was transformative for our insurance claims processing. He not only reduced processing time significantly but also saved the company over $50,000 annually through his innovative approach.",
      name: "Siddharath Panchal",
      position: "CTO, Arth-I-Soft"
    }
  ];
  
  // Load testimonial data
  function loadTestimonials() {
    const testimonialSlider = document.getElementById('testimonialSlider');
    const testimonialControls = document.getElementById('testimonialControls');
    
    if (!testimonialSlider || !testimonialControls) return;
    
    testimonialSlider.innerHTML = '';
    testimonialControls.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
      // Create testimonial slide
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide';
      if (index === 0) slide.classList.add('active');
      
      slide.innerHTML = `
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
          <h4 class="testimonial-name">${testimonial.name}</h4>
          <p class="testimonial-position">${testimonial.position}</p>
        </div>
      `;
      
      testimonialSlider.appendChild(slide);
      
      // Create testimonial dot control
      const dot = document.createElement('div');
      dot.className = 'testimonial-dot';
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('data-slide', index);
      
      testimonialControls.appendChild(dot);
    });
  }
  
  // Initialize testimonial slider
  function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (!slides.length || !dots.length) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
    
    // Auto slide
    setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 5000);
  }