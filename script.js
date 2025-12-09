
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Add click tracking and animations
    const links = document.querySelectorAll('.link-item');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Get link type
            const linkType = this.dataset.link;
            
            // You can replace these with your actual links
            const linkUrls = {
                instagram: 'https://instagram.com/ada_77',
                tiktok: 'https://tiktok.com/@ada_77',
                youtube: 'https://youtube.com/@ada_77',
                twitter: 'https://twitter.com/ada_77',
                website: 'https://ada77.com',
                email: 'mailto:contact@ada77.com',
                shop: 'https://shop.ada77.com',
                github: 'https://github.com/ada77'
            };
            
            // Open link after animation
            setTimeout(() => {
                if (linkUrls[linkType]) {
                    window.open(linkUrls[linkType], '_blank');
                } else {
                    alert(`Update the ${linkType} link in script.js`);
                }
            }, 200);
        });
        
        // Add hover sound effect (optional)
        link.addEventListener('mouseenter', function() {
            // You can add a subtle hover sound here if desired
        });
    });
    
    // Profile image click handler
    const profileImg = document.getElementById('profile-img');
    profileImg.addEventListener('click', function() {
        // You can add profile image change functionality here
        console.log('Profile image clicked!');
    });
    
    // Add floating animation to profile image
    setInterval(() => {
        profileImg.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            profileImg.style.transform = 'translateY(0)';
        }, 1000);
    }, 3000);
    
    // Add entrance animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
    
    // Animate links one by one
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.4s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 300 + (index * 100));
    });
});

// Add some interactive particles (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#667eea';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0.6';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.zIndex = '-1';
    
    document.body.appendChild(particle);
    
    // Animate particle
    let pos = window.innerHeight;
    const speed = Math.random() * 2 + 1;
    
    const animate = () => {
        pos -= speed;
        particle.style.top = pos + 'px';
        
        if (pos < -10) {
            document.body.removeChild(particle);
        } else {
            requestAnimationFrame(animate);
        }
    };
    
    requestAnimationFrame(animate);
}

// Create particles occasionally
setInterval(createParticle, 2000);
