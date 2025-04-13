// Contact section functionality and data

document.addEventListener('DOMContentLoaded', function() {
  loadContactInfo();
  initContactForm();
});

// Contact info data
const contactInfo = [
  {
    id: 1,
    title: "Email",
    content: "dshah125@asu.edu",
    icon: "fas fa-envelope",
    isLink: true,
    linkPrefix: "mailto:"
  },
  {
    id: 2,
    title: "Phone",
    content: "+1-602-565-4409",
    icon: "fas fa-phone",
    isLink: true,
    linkPrefix: "tel:"
  },
  {
    id: 3,
    title: "Location",
    content: "Arizona, USA",
    icon: "fas fa-map-marker-alt",
    isLink: false
  },
  {
    id: 4,
    title: "LinkedIn",
    content: "linkedin.com/in/dharmik-shah",
    icon: "fab fa-linkedin-in",
    isLink: true,
    linkPrefix: "https://www."
  }
];

// Load contact info
function loadContactInfo() {
  const contactInfoElement = document.getElementById('contactInfo');
  if (!contactInfoElement) return;
  
  contactInfoElement.innerHTML = '';
  
  contactInfo.forEach(info => {
    const contactItem = document.createElement('div');
    contactItem.className = 'contact-item';
    
    let contentHTML = '';
    if (info.isLink) {
      contentHTML = `<a href="${info.linkPrefix}${info.content}" target="_blank">${info.content}</a>`;
    } else {
      contentHTML = `<p>${info.content}</p>`;
    }
    
    contactItem.innerHTML = `
      <div class="contact-icon">
        <i class="${info.icon}"></i>
      </div>
      <div class="contact-text">
        <h3>${info.title}</h3>
        ${contentHTML}
      </div>
    `;
    
    contactInfoElement.appendChild(contactItem);
  });

  // Add animation to contact items
  setTimeout(() => {
    const items = document.querySelectorAll('.contact-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 100);
    });
  }, 300);
}

// Initialize contact form
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form fields
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      showFormNotification('Please fill in all fields', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // In a real application, this would send the form data to a server
    // For demonstration, we'll just log the form data and show a success message
    console.log('Form submitted:', { name, email, subject, message });
    
    showFormNotification('Thank you for your message! I will get back to you soon.', 'success');
    form.reset();
  });

  // Add animation to form fields
  const formControls = document.querySelectorAll('.form-control');
  formControls.forEach((control, index) => {
    control.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    control.addEventListener('blur', function() {
      if (this.value === '') {
        this.parentElement.classList.remove('focused');
      }
    });
  });
}

// Show form notification
function showFormNotification(message, type) {
  // Check if notification already exists and remove it
  const existingNotification = document.querySelector('.form-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `form-notification ${type}`;
  notification.textContent = message;
  
  // Add notification to form
  const form = document.querySelector('.contact-form');
  form.appendChild(notification);
  
  // Auto remove notification after 5 seconds
  setTimeout(() => {
    notification.classList.add('hide');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}