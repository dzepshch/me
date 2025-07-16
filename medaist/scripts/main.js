// Telegram WebApp Integration
const tg = window.Telegram.WebApp;
tg.ready();

// Mock navigation function (to be replaced with real routing)
function navigateTo(path) {
    tg.openLink(`https://yourdomain.com${path}`); // Replace with actual URL or SPA routing
    console.log(`Navigating to ${path}`);
}

// Get user info from Telegram
const user = tg.initDataUnsafe?.user;
if (user) {
    console.log(`Welcome, ${user.first_name}!`);
} else {
    console.log("User data not available");
}