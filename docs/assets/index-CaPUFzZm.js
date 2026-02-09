(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const a=document.querySelector("#app"),c=`
  <header class="header">
    <div class="logo-container" data-page="home">
      <img src="./1-removebg-preview.png" alt="Heart Resonance Logo" class="logo-image" />
      <span class="logo-title">Heart Resonance</span>
    </div>
    <nav>
      <ul class="nav-menu">
        <li class="nav-item" data-page="maria">Maria HUIZAR</li>
        <li class="nav-item">Séances</li>
        <li class="nav-item">Formations</li>
        <li class="nav-item">Ateliers</li>
        <li class="nav-item">Livres</li>
        <li class="nav-item" data-page="podcast">Podcast</li>
        <li class="nav-item">Newsletter</li>
      </ul>
    </nav>
  </header>
`,d=`
  ${c}

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
        <div class="section-content">
          <div class="section-image">
            <img src="./HUIZAR-Maria.jpg" alt="Maria HUIZAR" />
          </div>
          <div class="section-text">
            <h3>Maria HUIZAR</h3>
            <p>Découvrez mon parcours, mon approche et ce qui m'anime dans l'accompagnement.</p>
          </div>
        </div>
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
          Recevez dans la Newsletter des réflexions sur l'accompagnement, l'écoute de soi et le développement intérieur.
          Des partages d'expériences et des ressources pour avancer avec plus de clarté et de présence.
        </p>
      </div>
      <div class="newsletter-form">
        <input type="text" placeholder="PRÉNOM" class="newsletter-input" />
        <input type="email" placeholder="EMAIL" class="newsletter-input" />
        <button class="newsletter-button">S'INSCRIRE</button>
      </div>
    </div>
  </section>
`,p=`
  ${c}

  <main class="maria-page">
    <div class="maria-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="maria-hero">
      <div class="maria-image-wrapper">
        <img src="./HUIZAR-Maria.jpg" alt="Maria HUIZAR" class="maria-image" />
      </div>
      <div class="maria-intro">
        <h1>Ma présentation</h1>
        <h2>Maria HUIZAR</h2>
        <p class="maria-intro-text">
          Quand tout devient confus, ce n’est pas que vous ne voyez pas clair.<br />
          C’est que vous percevez beaucoup de choses en même temps.<br />
          Mon accompagnement commence là.
        </p>
      </div>
    </section>

    <section class="maria-body">
      <div class="maria-content">
        <h3>Mon parcours</h3>
        <p>Je m’appelle Maria.</p>
        <p>
          Depuis longtemps, j’accompagne des personnes dans des moments où tout se mélange à l’intérieur. Des moments où l’on ressent beaucoup, où l’on comprend beaucoup, mais où il devient difficile de faire la différence entre intuition, émotion, fatigue intérieure et histoire personnelle.
        </p>
        <p>
          Mon parcours s’est construit au contact direct de l’humain, dans des contextes très différents, souvent exigeants. J’ai été animatrice de radio, où j’ai créé et animé des émissions de radio, des espaces de parole et d’écoute. J’y ai appris à accueillir ce qui se dit, mais aussi ce qui ne se dit pas, à écouter au-delà des mots et à laisser une place aux émotions sans chercher à les contrôler.
        </p>
        <p>
          J’ai ensuite travaillé comme professeure puis conseillère principale d’éducation pendant plus de quinze ans. J’ai accompagné des milliers d’adolescents, dans des périodes de construction, de débordement émotionnel, de silence, parfois de colère. Être là au quotidien, tenir une présence quand tout vacille, accompagner sans savoir à l’avance quoi répondre : ces années ont profondément forgé ma posture.
        </p>
        <p>
          En parallèle, j’ai formé et accompagné des publics très variés : des jeunes, des militaires, des agents de service hôtelier, mais aussi des professionnels engagés dans des métiers à forte responsabilité ou à forte charge émotionnelle. Mon travail portait sur le développement des compétences psychosociales, et en particulier sur la gestion des émotions, la posture relationnelle et la capacité à rester stable dans des contextes exigeants.
        </p>

        <h3>Aujourd’hui</h3>
        <p>
          Très tôt, en dehors de tout cadre institutionnel, des personnes sont venues me voir pour comprendre ce qu’elles vivaient, mettre de la clarté sur leurs ressentis, sortir de la confusion intérieure. Dès 2014, l’accompagnement faisait déjà partie de ma vie. En 2016, j’ai donné un cadre professionnel à ce qui existait déjà naturellement.
        </p>
        <p>
          Aujourd’hui, je suis coach de vie, thérapeute (au sens non médical du terme), lectrice des mémoires akashiques et praticienne en clairvoyance consciente. J’aide à voir clair, non pas pour dire quoi faire ou prédire l’avenir, mais pour éclairer ce qui se joue ici et maintenant : les schémas, les dynamiques, les zones de tension ou de bascule. J’ai notamment accompagné depuis 2016 des médecins, des thérapeutes, des praticiens des médecines douces, des sportifs de haut niveau, ainsi que des entrepreneurs et chefs d’entreprise.
        </p>
        <p>
          Mon accompagnement est un espace où l’on peut ralentir, déposer ce qui est trop lourd, et retrouver un lien plus juste avec soi-même. J’accompagne des adultes, des particuliers, ainsi que des praticiens du bien-être et des professionnels qui ressentent le besoin d’affiner leur perception et de se faire confiance dans ce qu’ils perçoivent.
        </p>
        <p>
          Ce que je propose est avant tout une rencontre. Un temps pour se retrouver. Et laisser émerger une clarté plus juste.
        </p>

        <hr class="maria-separator" />

        <p class="maria-disclaimer">
          Le terme « thérapeute » est ici entendu comme un accompagnement de la personne dans une démarche de conscience, de discernement et de développement personnel.
          Il ne désigne pas un professionnel de santé et ne se substitue en aucun cas à un suivi médical, psychologique ou psychothérapeutique.
        </p>
      </div>

      <aside class="maria-aside">
        <div class="maria-card">
          <h4>En quelques mots</h4>
          <ul>
            <li>Coach de vie</li>
            <li>Thérapeute (sens non médical)</li>
            <li>Lectrice des mémoires akashiques</li>
            <li>Praticienne en clairvoyance consciente</li>
          </ul>
        </div>

        <div class="maria-card">
          <h4>Qui j’accompagne</h4>
          <p>
            Adultes, particuliers, praticiens du bien-être, professionnels à forte charge émotionnelle ou responsabilité
            qui ressentent le besoin d’affiner leur perception et de se faire confiance.
          </p>
        </div>
      </aside>
    </section>
  </main>
`,u=`
  ${c}

  <main class="podcast-page">
    <div class="podcast-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="podcast-layout">
      <div class="podcast-main">
        <h1>Heart Resonance, le podcast</h1>
        <p class="podcast-intro">
          Heart Resonance, le podcast est un espace de transmission et de présence.
          Un endroit où l’on peut s’arrêter un instant, quand le mental fatigue, quand quelque
          chose en soi demande à être entendu autrement.
        </p>
        <div class="podcast-content">
          <p>
            Ce podcast explore le passage du contrôle vers une conscience plus large, plus vivante,
            et la manière dont ce mouvement peut s’inscrire, simplement, dans le quotidien.
          </p>
          <p>
            L’intention n’est pas d’expliquer. Encore moins de convaincre. Chaque épisode ouvre un espace.
            On écoute, on ressent, on observe ce qui bouge — parfois subtilement, parfois plus franchement.
            Rien à croire. Juste laisser faire l’expérience.
          </p>
          <p>
            Ce qui se transforme ne vient pas d’une volonté. Cela arrive quand on cesse de diriger.
          </p>
          <p>
            Heart Resonance prolonge la posture de mon accompagnement et de mes transmissions.
            Même présence. Même attention.
            Une voix, un rythme, une invitation à revenir à soi, sans effort.
          </p>
        </div>
      </div>

      <aside class="podcast-aside">
        <div class="podcast-card">
          <h2>Écouter le podcast</h2>
          <p>
            Retrouvez Heart Resonance sur Spotify.
          </p>
          <div class="podcast-embed">
            <iframe
              data-testid="embed-iframe"
              style="border-radius:12px"
              src="https://open.spotify.com/embed/show/5I6swJXizcNQGlT66vDVIS?utm_source=generator&t=0"
              width="100%"
              height="352"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </aside>
    </section>
  </main>
`;function t(i){a.classList.remove("page-fade"),a.offsetWidth,i==="home"?a.innerHTML=d:i==="maria"?a.innerHTML=p:a.innerHTML=u,m(),window.scrollTo({top:0,behavior:"instant"}),a.classList.add("page-fade")}function m(){document.querySelector('.logo-container[data-page="home"]')?.addEventListener("click",e=>{e.preventDefault(),t("home")}),document.querySelector('.nav-item[data-page="maria"]')?.addEventListener("click",e=>{e.preventDefault(),t("maria")}),document.querySelector(".btn-back-home")?.addEventListener("click",e=>{e.preventDefault(),t("home")}),document.querySelector('.nav-item[data-page="podcast"]')?.addEventListener("click",e=>{e.preventDefault(),t("podcast")})}t("home");
