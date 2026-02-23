const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function() {
    sidebar.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    sidebar.style.display = 'none';
});