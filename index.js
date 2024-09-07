async function fetchStatus() {
    const response = await fetch('status.json');
    const data = await response.json();
    const container = document.getElementById('status-container');
    container.innerHTML = '';

    data.forEach(site => {
        const div = document.createElement('div');
        div.className = `status ${site.status}`;
        div.innerHTML = `
        <h2>${site.url}</h2>
        <p>Status: ${site.status === 'up' ? '🟢 Up' : '🔴 Down'}</p>
        <p>Last checked: ${new Date(site.timestamp).toLocaleString()}</p>
        `;
        container.appendChild(div);
    });
}

fetchStatus();
setInterval(fetchStatus, 60000); // Refresh every minute
