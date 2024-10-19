document.addEventListener('DOMContentLoaded', () => {
    const connectWalletBtn = document.getElementById('connectWalletBtn');

    connectWalletBtn.addEventListener('click', () => {
        console.log('Connecting wallet...');
        // Call the connect function from the 67143e6ac39ccec100eade1f.js file
        if (typeof window.connectWallet === 'function') {
            window.connectWallet();
        } else {
            console.error('connectWallet function not found. Make sure 67143e6ac39ccec100eade1f.js is loaded correctly.');
        }
    });
});
