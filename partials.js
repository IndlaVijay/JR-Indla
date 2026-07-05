(function () {
  function currentPage() {
    const path = window.location.pathname.split('/').pop();
    return path === '' ? 'index.html' : path;
  }

  const page = currentPage();

  const headerHTML = `
  <header class="navbar">
    <div class="logo">
      <a href="index.html" style="text-decoration:none;">
       <img src="images/logo1.png" alt="Logo" class="logo">
      </a>
    </div>
    <nav class="nav-links">
      <a href="index.html" class="${page === 'index.html' ? 'active' : ''}">Home</a>
      <a href="about.html" class="${page === 'about.html' ? 'active' : ''}">About Us</a>

      <div class="nav-item has-children">
        <button class="nav-link-btn">Services <span class="arrow"><i class="fa-solid fa-chevron-down"></i></span></button>
        <div class="submenu">
          <a href="#">Toxicology Risk Assessment</a>
          <a href="#">SEND Conversion</a>
          <a href="#">In-Vitro Research Services</a>
          <a href="#">Computer System Validation</a>
          <a href="#">Regulatory Publishing &amp; Submission</a>
        </div>
      </div>

      

      <a href="contact.html" class="${page === 'contact.html' ? 'active' : ''}">Contact us</a>
      <a href="blog.html" class="${page === 'blog.html' ? 'active' : ''}">Blog</a>
      

    </nav>
    <button class="nav-toggle" aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
</button>
  </header>

  <div class="nav-backdrop"></div>
  `;

  const footerHTML = `
  <footer class="footer footer-standalone">
    <div class="footer-col">
      <h5>Explore</h5>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="blog.html">Blog</a>
      <a href="privacy.html">Privacy and Policy</a>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <a href="#">Toxicology Risk Assessment</a>
      <a href="#">SEND Conversion</a>
      <a href="#">In-Vitro Research Services</a>
      <a href="#">Computer System Validation</a>
      <a href="#">Regulatory Publishing and Submission Services</a>
    </div>
    <div class="footer-col">
      <h5>Get in touch</h5>
      <p class="footer-contact"><i class="fas fa-envelope"></i> support@auxochromofours.com</p>
      <p class="footer-contact"><i class="fas fa-phone"></i> +91 7892052198</p>
      <h5 class="follow-heading">Follow us on</h5>
      <a href="#" class="social-icon"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div class="footer-col footer-address">
      <h5>Auxochromofours Solutions Private Limited</h5>
      <p>C342, 4th Floor, 1st Main Road, 1st Stage, Peenya, Bengaluru 560058, Karnataka, India</p>
      <div class="footer-map">
        <iframe
          src="https://maps.google.com/maps?q=Peenya%20Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" height="100" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
      </div>
    </div>
  </footer>
  `;

  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');

  if (headerMount) headerMount.innerHTML = headerHTML;
  if (footerMount) footerMount.innerHTML = footerHTML;
})();
