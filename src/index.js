console.log('===== main');

// Main
document.getElementById('TestButton').addEventListener('click', () => {
    fetch('/test');
});

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration);
    }).catch((err) => {
        console.log('ServiceWorker registration failed: ', err);
    });
} else {
    console.error('Service Worker not working in this browser');
}
