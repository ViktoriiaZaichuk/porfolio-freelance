document.addEventListener('DOMContentLoaded', function() {

    /* Smooth navigation scroll */
    document.querySelectorAll('.nav-button a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
    
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
    
          gsap.to(window, {duration: 1, scrollTo: targetElement});
        });
      });
});