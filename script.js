document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Only initialize hamburger menu if elements exist
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('nav-open');
        });

        // Close menu when clicking a link
        const navLinksAll = document.querySelectorAll('.nav-links a');
        navLinksAll.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('nav-open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (navLinks.classList.contains('active') &&
                !hamburger.contains(event.target) && 
                !navLinks.contains(event.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('nav-open');
            }
        });
    }

    // Pop-up functionality (only on desktop)
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    // Check if not mobile and modal exists
    if (window.innerWidth > 992 && modal && closeBtn) {
        // Show modal after 5 seconds
        setTimeout(() => {
            modal.style.display = 'block';
        }, 5000);

        // Close modal when clicking the X
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
}); 