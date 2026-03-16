document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            const ripple = document.createElement('span');
            ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(95,82,122,0.12);transform:scale(0);width:${size}px;height:${size}px;left:${x}px;top:${y}px;pointer-events:none;`;
            ripple.style.animation = 'ripple-anim 0.45s ease-out';
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
});
