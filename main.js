document.getElementById('keyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userKey = document.getElementById('userKey').value;

    fetch('https://cryptofinder-ten.vercel.app/api/validate-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: userKey })
    })
    .then(response => response.json())
    .then(data => {
        if (data.valid) {
            // Redirect to blockchain.html
            window.location.href = data.redirect;
        } else {
            document.getElementById('message').innerText = 'Invalid or expired key.';
            window.location.href = data.redirect;
        }
    });
});
