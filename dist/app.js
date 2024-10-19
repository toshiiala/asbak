document.addEventListener('DOMContentLoaded', () => {
    const connectWalletBtn = document.getElementById('connectWalletBtn');

    connectWalletBtn.addEventListener('click', () => {
        connectWalletBtn.classList.add('open');
        // The 67143e6ac39ccec100eade1f.js script is expected to handle the wallet connection
    });
});