import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <div class="logo-container">
      <span class="logo-title">Heart Resonance</span>
    </div>
    <nav>
      <ul class="nav-menu">
        <li>Maria HUIZAR</li>
        <li>Séances</li>
        <li>Formations</li>
        <li>Ateliers</li>
        <li>Livres</li>
        <li>Podcast</li>
        <li>Newsletter</li>
      </ul>
    </nav>
  </header>

  <div class="banner">
    <div class="banner-overlay"></div>
    <div class="banner-text">
      <h1>Heart Resonance</h1>
      <p class="subtitle">
        Un accompagnement pour se reconnecter à soi, écouter ce qui vibre juste,<br>
        et avancer avec plus de clarté et de présence.
      </p>
      <p class="quote">
        « Il ne s'agit pas de devenir quelqu'un d'autre. <br>Il s'agit de se souvenir de qui vous êtes. »
      </p>
    </div>
  </div>

  <section class="sections-overview">
    <div class="sections-container">
      <div class="section-item">
        <h3>Maria HUIZAR</h3>
        <p>Découvrez mon parcours, mon approche et ce qui m'anime dans l'accompagnement.</p>
      </div>
      <div class="section-item">
        <h3>Séances</h3>
        <p>La rencontre de soi. Un accompagnement personnalisé pour explorer votre propre vérité.</p>
      </div>
      <div class="section-item">
        <h3>Formations</h3>
        <p>Des programmes structurés pour approfondir votre pratique et développer de nouvelles compétences.</p>
      </div>
      <div class="section-item">
        <h3>Ateliers</h3>
        <p>Des moments de partage et d'exploration en groupe pour avancer ensemble.</p>
      </div>
      <div class="section-item">
        <h3>Livres</h3>
        <p>Des ressources écrites pour approfondir votre réflexion et votre pratique.</p>
      </div>
      <div class="section-item">
        <h3>Podcast</h3>
        <p>Des conversations et réflexions à écouter pour nourrir votre cheminement.</p>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="newsletter-content">
      <div class="newsletter-text">
        <h2>LAISSEZ-VOUS INSPIRER</h2>
        <p>
          Recevez dans la Newsletter des réflexions sur l'accompagnement, l'écoute de soi et le développement intérieur. Des partages d'expériences et des ressources pour avancer avec plus de clarté et de présence.
        </p>
      </div>
      <div class="newsletter-form">
        <input type="text" placeholder="PRÉNOM" class="newsletter-input" />
        <input type="email" placeholder="EMAIL" class="newsletter-input" />
        <button class="newsletter-button">S'INSCRIRE</button>
      </div>
    </div>
  </section>
`
