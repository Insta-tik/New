// components/footer.js

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.innerHTML = `
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} Insta-Tik. All rights reserved.</p>
      <nav class="footer-nav">
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="social-media">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  `;

  return footer;
}

// Add the footer to the DOM
document.body.appendChild(createFooter());
