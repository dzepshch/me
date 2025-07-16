// Telegram WebApp Integration
const tg = window.Telegram.WebApp;
tg.ready();

// Mock function to start a test (to be replaced with real logic)
function startTest(testId) {
    console.log(`Starting test: ${testId}`);
    tg.openLink(`https://yourdomain.com/test/${testId}`); // Replace with actual URL or SPA routing
}

// Highlight active nav item
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('onclick').includes('/tests')) {
            item.classList.add('active');
        }
    });
});