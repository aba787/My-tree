document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        link.addEventListener('click', function () {
            this.style.transform = 'scale(0.97)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });
});
