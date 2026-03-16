document.addEventListener('DOMContentLoaded', function () {

    const links = document.querySelectorAll('.link-item');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            createRipple(e, this);
        });
    });

    function createRipple(e, el) {
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        el.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    }

    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        let floating = true;
        setInterval(() => {
            if (!floating) return;
            profileImg.style.transition = 'transform 1s ease-in-out';
            profileImg.style.transform = 'translateY(-6px)';
            setTimeout(() => {
                profileImg.style.transform = 'translateY(0)';
            }, 1000);
        }, 2500);
    }
});
