document.addEventListener('DOMContentLoaded', async () => {
  const appsRoot = document.getElementById('member-apps');
  try{
    const res = await fetch('../data/apps.json');
    const data = await res.json();
    if (appsRoot) {
      appsRoot.innerHTML = data.apps.map(app => `
        <article class="card app-card">
          <div class="inline-badge">${app.status}</div>
          <h3>${app.name}</h3>
          <p class="muted">${app.description}</p>
          <div class="row"><span>Type</span><strong>${app.type}</strong></div>
          <div class="row"><span>Path</span><strong>${app.path}</strong></div>
          <div style="margin-top:18px"><a class="btn btn-primary" href="../${app.path}">Open ${app.name}</a></div>
        </article>
      `).join('');
    }
  }catch(err){
    console.error(err);
  }
});
