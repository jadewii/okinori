document.addEventListener('DOMContentLoaded', async () => {
  const pricingRoot = document.getElementById('pricing-root');
  const faqRoot = document.getElementById('faq-root');
  try{
    const [pricingRes, faqRes] = await Promise.all([
      fetch('data/pricing.json'),
      fetch('data/faq.json')
    ]);
    const pricing = await pricingRes.json();
    const faq = await faqRes.json();

    if (pricingRoot) {
      pricingRoot.innerHTML = pricing.plans.map(plan => `
        <article class="card price-card ${plan.featured ? 'featured' : ''}">
          <div class="kicker">${plan.label}</div>
          <h3>${plan.name}</h3>
          <div class="price">$${plan.price}<small> / month</small></div>
          <p class="muted">${plan.description}</p>
          <ul class="list">${plan.features.map(f => `<li>${f}</li>`).join('')}</ul>
          <div style="margin-top:18px"><a class="btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}" href="${plan.ctaUrl}">${plan.cta}</a></div>
        </article>
      `).join('');
    }

    if (faqRoot) {
      faqRoot.innerHTML = faq.items.map(item => `
        <details>
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>
      `).join('');
    }
  }catch(err){
    console.error(err);
    if (pricingRoot) pricingRoot.innerHTML = '<div class="card price-card"><h3>Pricing data unavailable</h3><p class="muted">Add Stripe later and keep this JSON-driven setup.</p></div>';
  }
});
