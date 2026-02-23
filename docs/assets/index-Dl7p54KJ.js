(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function p(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(a){if(a.ep)return;a.ep=!0;const i=p(a);fetch(a.href,i)}})();const e=document.querySelector("#app"),n=`
  <header class="header">
    <div class="logo-container" data-page="home">
      <img src="./1-removebg-preview.png" alt="Heart Resonance Logo" class="logo-image" />
      <span class="logo-title">Heart Resonance</span>
    </div>
    <nav>
      <ul class="nav-menu">
        <li class="nav-item" data-page="maria">Maria HUIZAR</li>
        <li class="nav-item dropdown" data-page="seances">
          Séances
          <div class="dropdown-content">
            <a href="#" data-page="voir-clair">Voir Clair en Soi</a>
            <a href="#" data-page="memoires-akashiques">Mémoires Akashiques</a>
            <a href="#" data-page="reiki">Séances de Reiki</a>
            <a href="#" data-page="reprogrammation">Reprogrammation des Mémoires Cellulaires</a>
          </div>
        </li>
        <li class="nav-item dropdown" data-page="formations">
          Formations
          <div class="dropdown-content">
            <a href="#" data-page="formation-1">Formation 1</a>
            <a href="#" data-page="formation-2">Formation 2</a>
          </div>
        </li>
        <li class="nav-item dropdown" data-page="ateliers">
          Ateliers
          <div class="dropdown-content">
            <a href="#" data-page="atelier-1">Atelier 1</a>
            <a href="#" data-page="atelier-2">Atelier 2</a>
          </div>
        </li>
        <li class="nav-item dropdown" data-page="livres">
          Livres
          <div class="dropdown-content">
            <a href="#" data-page="livre-1">Livre 1</a>
            <a href="#" data-page="livre-2">Livre 2</a>
          </div>
        </li>
        <li class="nav-item" data-page="podcast">Podcast</li>
        <li class="nav-item">Newsletter</li>
      </ul>
    </nav>
  </header>
`,m=`
  ${n}

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
`,v=`
  ${n}

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
`,h=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>SÉANCES – VOIR CLAIR EN SOI</h1>
      <p class="seances-intro">
        Les séances sont des temps d'écoute et de lecture intérieure. Elles s'adressent aux
        personnes qui sentent que quelque chose se joue, sans toujours parvenir à le comprendre
        clairement.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          On commence par voir. Puis, à partir de ce qui a émergé, les ajustements se font
          naturellement.
        </p>
        <p>
          Je propose des séances individuelles d'accompagnement, appuyées sur la clairvoyance
          consciente, la canalisation et la lecture des mémoires akashiques.
        </p>
        <h2>Ce que permettent ces séances :</h2>
        <ul>
          <li>d'éclairer une situation confuse ou bloquée</li>
          <li>de mieux comprendre ce qui se joue en profondeur</li>
          <li>d'ajuster sa posture face à ce qui est vécu</li>
        </ul>
        <p>Chaque séance s'adapte à la personne et au moment.</p>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séances individuelles</li>
          <li>En présentiel ou à distance</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`,g=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>MÉMOIRES AKASHIQUES</h1>
      <p class="seances-intro">
        Le travail avec les mémoires akashiques permet d'accéder à une autre forme de
        compréhension, plus intuitive et plus globale.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          Il est particulièrement aidant lorsque l'analyse mentale tourne en boucle ou ne permet plus
          d'avancer.
        </p>
        <p>
          En posant un autre regard sur une situation, il devient possible de sortir de certaines
          impasses intérieures avec plus de clarté.
        </p>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séances individuelles</li>
          <li>En présentiel ou à distance</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`,f=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>SÉANCES DE REIKI</h1>
      <p class="seances-intro">
        Le Reiki que je pratique soutient les processus de prise de conscience et d'intégration.
        Il permet parfois à ce qui était resté en arrière-plan de remonter à la surface, dans un cadre
        sécurisant et respectueux du rythme de la personne.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          Les séances de Reiki sont des temps d'accompagnement énergétique réalisés par apposition
          des mains. Elles soutiennent l'équilibre global de la personne, en agissant sur les plans
          physique, émotionnel, énergétique et intérieur.
        </p>
        <p>
          Le Reiki agit sans intention mentale ni contrôle, là où l'énergie en a besoin.
        </p>
        
        <h2>Déroulement d'une séance :</h2>
        <p>
          La séance se déroule dans un cadre calme et sécurisant.
          La personne est allongée et reste habillée.
          Le travail se fait par un contact doux ou à proximité du corps, selon les zones et les besoins.
        </p>
        
        <h2>Une séance de Reiki peut favoriser :</h2>
        <ul>
          <li>une détente profonde</li>
          <li>un apaisement émotionnel</li>
          <li>un relâchement des tensions</li>
          <li>un recentrage intérieur</li>
          <li>une meilleure circulation de l'énergie</li>
        </ul>
        
        <p>
          Ces séances ne sont pas uniquement proposées dans une recherche de détente ou de bien-être.
          Le travail énergétique peut permettre de mettre en lumière certains liens entre ce que la
          personne vit dans son corps, son histoire et ses dynamiques intérieures.
        </p>
        
        <h2>POUR QUOI RECEVOIR UNE SÉANCE DE REIKI</h2>
        <ul>
          <li>une période de fatigue, de stress ou de surcharge</li>
          <li>un état émotionnel intense</li>
          <li>une phase de transition ou de transformation</li>
          <li>un besoin de soutien énergétique</li>
          <li>un travail personnel ou thérapeutique en cours</li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séances individuelles</li>
          <li>En présentiel ou à distance</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`,b=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>REPROGRAMMATION DES MÉMOIRES CELLULAIRES</h1>
      <p class="seances-intro">
        La reprogrammation des mémoires cellulaires intervient lorsqu'un réajustement en
        profondeur est nécessaire.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>
          Elle accompagne les changements intérieurs lorsque la personne sent que le moment est
          juste pour elle.
        </p>
        <p>
          Ce travail se fait sans forcer, dans le respect de ce qui est prêt à évoluer.
        </p>
        <p>
          La reprogrammation des mémoires cellulaires est un travail énergétique et conscient qui
          vise à libérer certaines empreintes inscrites dans le corps.
        </p>
        
        <h2>Ces mémoires peuvent être liées à :</h2>
        <ul>
          <li>des expériences passées</li>
          <li>des chocs émotionnels</li>
          <li>des héritages transgénérationnels</li>
          <li>des schémas répétitifs profondément ancrés</li>
        </ul>
        
        <p>
          Le travail se fait par l'écoute, la présence et l'accompagnement énergétique, afin de
          permettre au corps de relâcher ce qui n'a plus lieu d'être et de retrouver un fonctionnement
          plus juste.
        </p>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES SÉANCES</h2>
        <ul>
          <li>Séances individuelles</li>
          <li>En présentiel ou à distance</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`,q=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>FORMATIONS</h1>
      <p class="seances-intro">
        Découvrez nos formations pour approfondir votre pratique et développer de nouvelles compétences.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Formation 1</h2>
        <p>Contenu de la première formation à détailler...</p>
      </div>
      <div class="seance-card">
        <h2>Formation 2</h2>
        <p>Contenu de la deuxième formation à détailler...</p>
      </div>
    </section>
  </main>
`,L=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>FORMATION 1</h1>
      <p class="seances-intro">
        Découvrez les détails de cette formation.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé de la formation 1...</p>
      </div>
    </section>
  </main>
`,R=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>FORMATION 2</h1>
      <p class="seances-intro">
        Découvrez les détails de cette formation.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé de la formation 2...</p>
      </div>
    </section>
  </main>
`,E=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>ATELIERS</h1>
      <p class="seances-intro">
        Des moments de partage et d'exploration en groupe pour avancer ensemble.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Atelier 1</h2>
        <p>Contenu du premier atelier à détailler...</p>
      </div>
      <div class="seance-card">
        <h2>Atelier 2</h2>
        <p>Contenu du deuxième atelier à détailler...</p>
      </div>
    </section>
  </main>
`,S=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>ATELIER 1</h1>
      <p class="seances-intro">
        Découvrez les détails de cet atelier.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé de l'atelier 1...</p>
      </div>
    </section>
  </main>
`,I=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>ATELIER 2</h1>
      <p class="seances-intro">
        Découvrez les détails de cet atelier.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé de l'atelier 2...</p>
      </div>
    </section>
  </main>
`,k=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LIVRES</h1>
      <p class="seances-intro">
        Des ressources écrites pour approfondir votre réflexion et votre pratique.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Livre 1</h2>
        <p>Contenu du premier livre à détailler...</p>
      </div>
      <div class="seance-card">
        <h2>Livre 2</h2>
        <p>Contenu du deuxième livre à détailler...</p>
      </div>
    </section>
  </main>
`,A=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LIVRE 1</h1>
      <p class="seances-intro">
        Découvrez les détails de ce livre.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé du livre 1...</p>
      </div>
    </section>
  </main>
`,C=`
  ${n}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LIVRE 2</h1>
      <p class="seances-intro">
        Découvrez les détails de ce livre.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <p>Contenu détaillé du livre 2...</p>
      </div>
    </section>
  </main>
`,y=`
  ${n}

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
`;function o(s){e.classList.remove("page-fade"),e.offsetWidth,s==="home"?e.innerHTML=m:s==="maria"?e.innerHTML=v:s==="voir-clair"?e.innerHTML=h:s==="memoires-akashiques"?e.innerHTML=g:s==="reiki"?e.innerHTML=f:s==="reprogrammation"?e.innerHTML=b:s==="formations"?e.innerHTML=q:s==="formation-1"?e.innerHTML=L:s==="formation-2"?e.innerHTML=R:s==="ateliers"?e.innerHTML=E:s==="atelier-1"?e.innerHTML=S:s==="atelier-2"?e.innerHTML=I:s==="livres"?e.innerHTML=k:s==="livre-1"?e.innerHTML=A:s==="livre-2"?e.innerHTML=C:e.innerHTML=y,M(),window.scrollTo({top:0,behavior:"instant"}),e.classList.add("page-fade")}function M(){document.querySelector('.logo-container[data-page="home"]')?.addEventListener("click",t=>{t.preventDefault(),o("home")}),document.querySelector('.nav-item[data-page="maria"]')?.addEventListener("click",t=>{t.preventDefault(),o("maria")}),document.querySelector(".btn-back-home")?.addEventListener("click",t=>{t.preventDefault(),o("home")}),document.querySelector('.nav-item[data-page="seances"]')?.addEventListener("click",t=>{t.preventDefault(),o("seances")}),document.querySelector('.nav-item[data-page="podcast"]')?.addEventListener("click",t=>{t.preventDefault(),o("podcast")});const i=document.querySelector(".dropdown"),r=document.querySelector(".dropdown-content");i?.addEventListener("mouseenter",()=>{r?.classList.add("show")}),i?.addEventListener("mouseleave",()=>{r?.classList.remove("show")}),document.querySelectorAll(".dropdown-content a").forEach(t=>{t.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation();const c=t.getAttribute("data-page");c&&o(c)})}),document.querySelectorAll(".dropdown").forEach(t=>{t.addEventListener("click",d=>{d.preventDefault();const c=t.getAttribute("data-page");c&&o(c)})})}o("home");
