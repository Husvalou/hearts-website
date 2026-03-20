import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const headerTemplate = `
  <header class="header">
    <div class="logo-container" data-page="home">
      <img src="./1-removebg-preview.png" alt="Heart Resonance Logo" class="logo-image" style="height: 12rem;" />
      <span class="logo-title">Heart Resonance</span>
    </div>
    <button class="mobile-menu-btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav>
      <ul class="nav-menu">
        <li class="nav-item" data-page="maria">Maria HUIZAR</li>
        <li class="nav-item dropdown">
          <span class="dropdown-trigger">Séances</span>
          <div class="dropdown-content">
            <a href="#" data-page="voir-clair">Voir Clair en Soi</a>
            <a href="#" data-page="memoires-akashiques">Mémoires Akashiques</a>
            <a href="#" data-page="reiki">Séances de Reiki</a>
            <a href="#" data-page="reprogrammation">Reprogrammation des Mémoires Cellulaires</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <span class="dropdown-trigger">Tarifs</span>
          <div class="dropdown-content">
            <a href="#" data-page="tarifs">Toutes les formations</a>
            <a href="#" data-page="reiki-usui">Reiki Usui</a>
            <a href="#" data-page="memoires-akashiques-formations">Mémoires Akashiques</a>
            <a href="#" data-page="canalisation">Canalisation</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <span class="dropdown-trigger">Ateliers</span>
          <div class="dropdown-content">
            <a href="#" data-page="atelier-1">Atelier 1</a>
            <a href="#" data-page="atelier-2">Atelier 2</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <span class="dropdown-trigger">Livres</span>
          <div class="dropdown-content">
            <a href="#" data-page="livre-1">Livre 1</a>
            <a href="#" data-page="livre-2">Livre 2</a>
          </div>
        </li>
        <li class="nav-item" data-page="podcast">Podcast</li>
      </ul>
    </nav>
    <div class="mobile-menu-overlay"></div>
  </header>
`

const homePageTemplate = `
  ${headerTemplate}

  <div class="banner">
    <div class="banner-overlay"></div>
    <div class="banner-text">
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
            <img src="./HUIZAR-Maria.png" alt="Maria HUIZAR" />
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
`

const mariaPageTemplate = `
  ${headerTemplate}

  <main class="maria-page">
    <div class="maria-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="maria-hero">
      <div class="maria-image-wrapper">
        <img src="./HUIZAR-Maria.png" alt="Maria HUIZAR" class="maria-image" />
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
`

const voirClairPageTemplate = `
  ${headerTemplate}

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
`

const memoiresAkashiquesPageTemplate = `
  ${headerTemplate}

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
`

const reikiPageTemplate = `
  ${headerTemplate}

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
`

const reprogrammationPageTemplate = `
  ${headerTemplate}

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
`


const reikiUsuiPageTemplate = `
  ${headerTemplate}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>REIKI USUI</h1>
      <p class="seances-intro">
        Le Reiki est une pratique énergétique d'origine japonaise qui permet de canaliser l'énergie
        de vie universelle par imposition des mains. Il soutient l'équilibre global de la personne —
        physique, émotionnel, mental et énergétique — et favorise un état de détente, de présence
        et d'écoute plus consciente.
      </p>
      <p class="seances-intro">
        Au-delà de l'aspect énergétique, le Reiki développe une posture intérieure stable, une
        écoute fine et une relation plus claire à ce qui se joue dans l'instant.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Reiki — Niveau 1 | Ouverture et bases de la pratique</h2>
        <p>
          Initiation au Reiki et apprentissage des bases énergétiques. Ce premier niveau permet de se
          reconnecter à l'énergie Reiki, de pratiquer l'auto-traitement et de découvrir les premiers
          protocoles.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 420 €</strong></li>
          <li>Pré requis : avoir réalisé 4 séances de Reiki</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Reiki — Niveau 2 | Approfondissement et élargissement</h2>
        <p>
          Approfondissement de la pratique Reiki, travail avec les symboles, pratique à distance et
          élargissement du champ d'action. Ce niveau permet d'affiner la perception, le discernement
          et la posture d'accompagnement.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 620 €</strong></li>
          <li>Pré requis : avoir validé le Reiki niveau 1</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Reiki — Niveau 3 | Maîtrise personnelle et intégration</h2>
        <p>
          Travail de maîtrise personnelle et d'intégration profonde du Reiki dans la posture et la
          pratique. Ce niveau marque un engagement plus conscient et plus aligné.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 750 €</strong></li>
          <li>Pré requis : avoir validé les Reiki niveaux 1 et 2</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Maîtrise Reiki | Transmission</h2>
        <p>
          Transmission de la lignée Reiki, posture de maître et capacité à initier à son tour.
        </p>
        <ul>
          <li>Formation sur 1 journée</li>
          <li><strong>Tarif : 1 200 €</strong></li>
          <li>Pré requis : avoir validé les Reiki niveaux 1, 2 et 3</li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES FORMATIONS</h2>
        <ul>
          <li>En présentiel ou à distance</li>
          <li>En individuel ou en petit groupe</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`

const memoiresAkashiquesFormationsPageTemplate = `
  ${headerTemplate}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>LECTURES DES MÉMOIRES AKASHIQUES</h1>
      <p class="seances-intro">
        Les mémoires akashiques sont un espace de conscience où sont inscrites les expériences, les
        schémas et les dynamiques de l'âme. Y accéder permet de mettre en lumière ce qui est à
        l'œuvre, de voir clair dans des situations complexes et de développer une clairvoyance
        consciente.
      </p>
      <p class="seances-intro">
        L'ouverture des registres offre un éclairage profond, dans le respect du rythme et du
        chemin de chacun.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Niveau 1 | Accès et bases de la lecture</h2>
        <p>
          Initiation aux lectures akashiques. Apprentissage de l'ouverture de ses propres registres et
          des bases de la lecture consciente.
        </p>
        <ul>
          <li>Durée : 12 heures</li>
          <li><strong>Tarif : 450 €</strong></li>
          <li>Pré requis : avoir réalisé au moins une séance individuelle avec moi</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Niveau 2 | Pratique approfondie et professionnalisation</h2>
        <p>
          Niveau destiné aux personnes souhaitant devenir lectrices ou lecteurs des mémoires
          akashiques et en faire leur activité, ainsi qu'aux thérapeutes et accompagnants désirant
          consolider leur posture.
        </p>
        <p>
          Ce niveau permet d'approfondir la pratique, d'affiner le discernement et d'accompagner
          avec clarté et responsabilité.
        </p>
        <ul>
          <li>Durée : 18 heures</li>
          <li><strong>Tarif : 1 050 €</strong></li>
          <li>Pré requis : avoir validé le niveau 1 et réalisé au moins une séance individuelle avec moi</li>
        </ul>
      </div>
      
      <div class="seance-card">
        <h2>Niveau 3 | Maîtrise et approche thérapeutique</h2>
        <p>
          Niveau avancé destiné aux praticiens et thérapeutes expérimentés. Il aborde
          l'accompagnement lorsque la compréhension seule ne suffit plus : sanation lorsque cela est
          juste, registres de la thérapie, registres du patient (avec permission), et approche de
          l'Hôpital de Lumière.
        </p>
        <p>
          Ce niveau demande une grande stabilité intérieure, une posture éthique claire et une
          responsabilité accrue.
        </p>
        <ul>
          <li>Durée : définie selon le profil du participant</li>
          <li><strong>Tarif : 1 750 €</strong></li>
          <li>Pré requis : avoir validé les niveaux 1 et 2 et réalisé au moins une séance individuelle avec moi</li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES FORMATIONS</h2>
        <ul>
          <li>En présentiel ou à distance</li>
          <li>En individuel ou en petit groupe</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`

const canalisationPageTemplate = `
  ${headerTemplate}

  <main class="seances-page">
    <div class="seances-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="seances-hero">
      <h1>CANALISATION ET DIALOGUE INTÉRIEUR</h1>
      <p class="seances-intro">
        Apprendre à canaliser et dialoguer avec son Soi
      </p>
      <p class="seances-intro">
        Formation destinée aux personnes souhaitant développer leur capacité de canalisation,
        apprendre à dialoguer avec leur Soi et affiner leur écoute intérieure.
      </p>
    </section>

    <section class="seances-content">
      <div class="seance-card">
        <h2>Détails de la formation</h2>
        <ul>
          <li>Formation en groupe</li>
          <li>Groupe minimum : 5 personnes</li>
          <li>Durée : 3 heures par séance</li>
          <li>Plusieurs séances possibles selon l'avancement du groupe</li>
          <li><strong>Tarif : 100 € / 3 heures / personne</strong></li>
        </ul>
      </div>
    </section>

    <section class="seances-cadre">
      <div class="cadre-content">
        <h2>CADRE DES FORMATIONS</h2>
        <ul>
          <li>En présentiel ou à distance</li>
          <li>En groupe (minimum 3 personnes)</li>
          <li>Sur rendez-vous</li>
          <li>Cadre confidentiel et respectueux</li>
        </ul>
      </div>
    </section>
  </main>
`

const ateliersPageTemplate = `
  ${headerTemplate}

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
`

const atelier1PageTemplate = `
  ${headerTemplate}

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
`

const atelier2PageTemplate = `
  ${headerTemplate}

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
`

const livresPageTemplate = `
  ${headerTemplate}

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
`

const livre1PageTemplate = `
  ${headerTemplate}

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
`

const livre2PageTemplate = `
  ${headerTemplate}

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
`

const tarifsPageTemplate = `
  ${headerTemplate}

  <main class="tarifs-page">
    <div class="tarifs-back">
      <button class="btn-back-home" data-page="home">← Retour à l'accueil</button>
    </div>

    <section class="tarifs-hero">
      <h1>FORMATIONS – HEART RESONANCE</h1>
      <p class="tarifs-intro">
        Les formations proposées s'adressent aux personnes qui souhaitent voir clair dans des
        situations complexes, développer leur clairvoyance consciente et affiner leur posture
        intérieure, pour elles-mêmes ou dans une pratique d'accompagnement.
      </p>
      <p class="tarifs-intro">
        Elles sont conçues comme des chemins progressifs, alliant compréhension, pratique et
        intégration. Elles peuvent se dérouler en présentiel ou à distance, en individuel ou en petit
        groupe, selon la formation concernée.
      </p>
    </section>

    <section class="tarifs-content">
      <div class="tarifs-grid">
        <div class="tarif-card">
          <h2>REIKI USUI</h2>
          <p>
            Le Reiki est une pratique énergétique d'origine japonaise qui permet de canaliser l'énergie
            de vie universelle par imposition des mains. Il soutient l'équilibre global de la personne —
            physique, émotionnel, mental et énergétique — et favorise un état de détente, de présence
            et d'écoute plus consciente.
          </p>
          <p>
            Au-delà de l'aspect énergétique, le Reiki développe une posture intérieure stable, une
            écoute fine et une relation plus claire à ce qui se joue dans l'instant.
          </p>
          
          <div class="formation-item">
            <h3>Reiki — Niveau 1 | Ouverture et bases de la pratique</h3>
            <p>
              Initiation au Reiki et apprentissage des bases énergétiques. Ce premier niveau permet de se
              reconnecter à l'énergie Reiki, de pratiquer l'auto-traitement et de découvrir les premiers
              protocoles.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 420 €</strong></li>
              <li>Pré requis : avoir réalisé 4 séances de Reiki</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Reiki — Niveau 2 | Approfondissement et élargissement</h3>
            <p>
              Approfondissement de la pratique Reiki, travail avec les symboles, pratique à distance et
              élargissement du champ d'action. Ce niveau permet d'affiner la perception, le discernement
              et la posture d'accompagnement.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 620 €</strong></li>
              <li>Pré requis : avoir validé le Reiki niveau 1</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Reiki — Niveau 3 | Maîtrise personnelle et intégration</h3>
            <p>
              Travail de maîtrise personnelle et d'intégration profonde du Reiki dans la posture et la
              pratique. Ce niveau marque un engagement plus conscient et plus aligné.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 750 €</strong></li>
              <li>Pré requis : avoir validé les Reiki niveaux 1 et 2</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Maîtrise Reiki | Transmission</h3>
            <p>
              Transmission de la lignée Reiki, posture de maître et capacité à initier à son tour.
            </p>
            <ul class="formation-details">
              <li>Formation sur 1 journée</li>
              <li><strong>Tarif : 1 200 €</strong></li>
              <li>Pré requis : avoir validé les Reiki niveaux 1, 2 et 3</li>
            </ul>
          </div>
        </div>

        <div class="tarif-card">
          <h2>LECTURES DES MÉMOIRES AKASHIQUES</h2>
          <p>
            Les mémoires akashiques sont un espace de conscience où sont inscrites les expériences, les
            schémas et les dynamiques de l'âme. Y accéder permet de mettre en lumière ce qui est à
            l'œuvre, de voir clair dans des situations complexes et de développer une clairvoyance
            consciente.
          </p>
          <p>
            L'ouverture des registres offre un éclairage profond, dans le respect du rythme et du
            chemin de chacun.
          </p>
          
          <div class="formation-item">
            <h3>Niveau 1 | Accès et bases de la lecture</h3>
            <p>
              Initiation aux lectures akashiques. Apprentissage de l'ouverture de ses propres registres et
              des bases de la lecture consciente.
            </p>
            <ul class="formation-details">
              <li>Durée : 12 heures</li>
              <li><strong>Tarif : 450 €</strong></li>
              <li>Pré requis : avoir réalisé au moins une séance individuelle avec moi</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Niveau 2 | Pratique approfondie et professionnalisation</h3>
            <p>
              Niveau destiné aux personnes souhaitant devenir lectrices ou lecteurs des mémoires
              akashiques et en faire leur activité, ainsi qu'aux thérapeutes et accompagnants désirant
              consolider leur posture.
            </p>
            <p>
              Ce niveau permet d'approfondir la pratique, d'affiner le discernement et d'accompagner
              avec clarté et responsabilité.
            </p>
            <ul class="formation-details">
              <li>Durée : 18 heures</li>
              <li><strong>Tarif : 1 050 €</strong></li>
              <li>Pré requis : avoir validé le niveau 1 et réalisé au moins une séance individuelle avec moi</li>
            </ul>
          </div>
          
          <div class="formation-item">
            <h3>Niveau 3 | Maîtrise et approche thérapeutique</h3>
            <p>
              Niveau avancé destiné aux praticiens et thérapeutes expérimentés. Il aborde
              l'accompagnement lorsque la compréhension seule ne suffit plus : sanation lorsque cela est
              juste, registres de la thérapie, registres du patient (avec permission), et approche de
              l'Hôpital de Lumière.
            </p>
            <p>
              Ce niveau demande une grande stabilité intérieure, une posture éthique claire et une
              responsabilité accrue.
            </p>
            <ul class="formation-details">
              <li>Durée : définie selon le profil du participant</li>
              <li><strong>Tarif : 1 750 €</strong></li>
              <li>Pré requis : avoir validé les niveaux 1 et 2 et réalisé au moins une séance individuelle avec moi</li>
            </ul>
          </div>
        </div>

        <div class="tarif-card">
          <h2>CANALISATION ET DIALOGUE INTÉRIEUR</h2>
          <p>
            Apprendre à canaliser et dialoguer avec son Soi
          </p>
          <p>
            Formation destinée aux personnes souhaitant développer leur capacité de canalisation,
            apprendre à dialoguer avec leur Soi et affiner leur écoute intérieure.
          </p>
          <ul class="formation-details">
            <li>Formation en groupe</li>
            <li>Groupe minimum : 5 personnes</li>
            <li>Durée : 3 heures par séance</li>
            <li>Plusieurs séances possibles selon l'avancement du groupe</li>
            <li><strong>Tarif : 100 € / 3 heures / personne</strong></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="tarifs-fil-conducteur">
      <div class="fil-content">
        <h2>FIL CONDUCTEUR DES FORMATIONS</h2>
        <ul>
          <li>Voir clair dans des situations complexes</li>
          <li>Développer une clairvoyance consciente</li>
          <li>Affiner la perception sans surinterprétation</li>
          <li>Accompagner avec justesse, présence et discernement</li>
        </ul>
      </div>
    </section>

    <section class="tarifs-seances">
      <div class="seances-content">
        <h2>Tarifs séances</h2>
        <div class="seances-grid">
          <div class="seance-tarif">
            <h3>Séance voir clair en soi</h3>
            <p class="tarif-price">60 €</p>
            <p class="tarif-duration">1 h</p>
          </div>
          <div class="seance-tarif">
            <h3>Séance de Reiki</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
          <div class="seance-tarif">
            <h3>Lecture des mémoires akashiques</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
          <div class="seance-tarif">
            <h3>Reprogrammation des mémoires cellulaires</h3>
            <p class="tarif-price">80 €</p>
            <p class="tarif-duration">1 h 15</p>
          </div>
        </div>
      </div>
    </section>
  </main>
`

const podcastPageTemplate = `
  ${headerTemplate}

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
`

type Page = 'home' | 'maria' | 'seances' | 'voir-clair' | 'memoires-akashiques' | 'reiki' | 'reprogrammation' | 'tarifs' | 'reiki-usui' | 'memoires-akashiques-formations' | 'canalisation' | 'ateliers' | 'atelier-1' | 'atelier-2' | 'livres' | 'livre-1' | 'livre-2' | 'podcast'

function render(page: Page) {
  // reset animation
  app.classList.remove('page-fade')
  // force reflow to restart animation each time
  void app.offsetWidth

  if (page === 'home') {
    app.innerHTML = homePageTemplate
  } else if (page === 'maria') {
    app.innerHTML = mariaPageTemplate
  } else if (page === 'voir-clair') {
    app.innerHTML = voirClairPageTemplate
  } else if (page === 'memoires-akashiques') {
    app.innerHTML = memoiresAkashiquesPageTemplate
  } else if (page === 'reiki') {
    app.innerHTML = reikiPageTemplate
  } else if (page === 'reprogrammation') {
    app.innerHTML = reprogrammationPageTemplate
  } else if (page === 'tarifs') {
    app.innerHTML = tarifsPageTemplate
  } else if (page === 'reiki-usui') {
    app.innerHTML = reikiUsuiPageTemplate
  } else if (page === 'memoires-akashiques-formations') {
    app.innerHTML = memoiresAkashiquesFormationsPageTemplate
  } else if (page === 'canalisation') {
    app.innerHTML = canalisationPageTemplate
  } else if (page === 'ateliers') {
    app.innerHTML = ateliersPageTemplate
  } else if (page === 'atelier-1') {
    app.innerHTML = atelier1PageTemplate
  } else if (page === 'atelier-2') {
    app.innerHTML = atelier2PageTemplate
  } else if (page === 'livres') {
    app.innerHTML = livresPageTemplate
  } else if (page === 'livre-1') {
    app.innerHTML = livre1PageTemplate
  } else if (page === 'livre-2') {
    app.innerHTML = livre2PageTemplate
  } else {
    app.innerHTML = podcastPageTemplate
  }

  attachNavigation()
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

  // run fade-in animation
  app.classList.add('page-fade')
}

function attachNavigation() {
  const logo = document.querySelector<HTMLElement>('.logo-container[data-page="home"]')
  logo?.addEventListener('click', (event) => {
    event.preventDefault()
    render('home')
  })

  const mariaItem = document.querySelector<HTMLElement>('.nav-item[data-page="maria"]')
  mariaItem?.addEventListener('click', (event) => {
    event.preventDefault()
    render('maria')
  })

  const backHomeButton = document.querySelector<HTMLElement>('.btn-back-home')
  backHomeButton?.addEventListener('click', (event) => {
    event.preventDefault()
    render('home')
  })

  const seancesItem = document.querySelector<HTMLElement>('.nav-item[data-page="seances"]')
  seancesItem?.addEventListener('click', (event) => {
    event.preventDefault()
    render('seances')
  })

  const podcastItem = document.querySelector<HTMLElement>('.nav-item[data-page="podcast"]')
  podcastItem?.addEventListener('click', (event) => {
    event.preventDefault()
    render('podcast')
  })

  const tarifsItem = document.querySelector<HTMLElement>('.nav-item[data-page="tarifs"]')
  tarifsItem?.addEventListener('click', (event) => {
    event.preventDefault()
    render('tarifs')
  })

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector<HTMLElement>('.mobile-menu-btn')
  const navMenu = document.querySelector<HTMLElement>('.nav-menu')
  const overlay = document.querySelector<HTMLElement>('.mobile-menu-overlay')
  
  // Function to get scrollbar width
  function getScrollbarWidth(): number {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)
    
    const inner = document.createElement('div')
    outer.appendChild(inner)
    
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
    outer.parentNode?.removeChild(outer)
    
    return scrollbarWidth
  }
  
  // Store scrollbar width
  const scrollbarWidth = getScrollbarWidth()
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
  
  if (mobileMenuBtn && navMenu && overlay) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenuBtn.classList.contains('open')
      
      if (isOpen) {
        mobileMenuBtn.classList.remove('open')
        navMenu.classList.remove('mobile-open')
        overlay.classList.remove('show')
        document.body.classList.remove('menu-open')
      } else {
        mobileMenuBtn.classList.add('open')
        navMenu.classList.add('mobile-open')
        overlay.classList.add('show')
        document.body.classList.add('menu-open')
      }
    })
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('open')
      navMenu.classList.remove('mobile-open')
      overlay.classList.remove('show')
      document.body.classList.remove('menu-open')
    })
  }

  // Dropdown menu functionality
  const dropdowns = document.querySelectorAll<HTMLElement>('.dropdown')
  
  dropdowns.forEach(dropdown => {
    const content = dropdown.querySelector<HTMLElement>('.dropdown-content')
    let timeout: number
    
    // Show dropdown on hover (desktop only)
    if (window.innerWidth > 600) {
      dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout)
        content?.classList.add('show')
      })
      
      dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          content?.classList.remove('show')
        }, 300)
      })
      
      content?.addEventListener('mouseenter', () => {
        clearTimeout(timeout)
      })
      
      content?.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          content?.classList.remove('show')
        }, 300)
      })
    }
    
    // Mobile dropdown toggle
    const trigger = dropdown.querySelector<HTMLElement>('.dropdown-trigger')
    trigger?.addEventListener('click', (event) => {
      if (window.innerWidth <= 600) {
        event.preventDefault()
        event.stopPropagation()
        
        // Toggle current dropdown
        const isCurrentlyOpen = content?.classList.contains('show')
        
        // Close all other dropdowns first
        document.querySelectorAll<HTMLElement>('.dropdown-content').forEach(otherContent => {
          if (otherContent !== content) {
            otherContent.classList.remove('show')
          }
        })
        
        // Remove open class from all triggers
        document.querySelectorAll<HTMLElement>('.dropdown-trigger').forEach(otherTrigger => {
          if (otherTrigger !== trigger) {
            otherTrigger.classList.remove('open')
          }
        })
        
        // Toggle current dropdown
        if (isCurrentlyOpen) {
          content?.classList.remove('show')
          trigger?.classList.remove('open')
        } else {
          content?.classList.add('show')
          trigger?.classList.add('open')
        }
      }
    })
  })
  
  // Handle dropdown item clicks
  const dropdownItems = document.querySelectorAll<HTMLElement>('.dropdown-content a')
  dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      const targetPage = item.getAttribute('data-page')
      if (targetPage) {
        // Close all dropdowns before navigation
        document.querySelectorAll<HTMLElement>('.dropdown-content').forEach(dropdown => {
          dropdown.classList.remove('show')
        })
        // Close mobile menu and remove body lock
        if (window.innerWidth <= 600) {
          mobileMenuBtn?.classList.remove('open')
          navMenu?.classList.remove('mobile-open')
          overlay?.classList.remove('show')
          document.body.classList.remove('menu-open')
        }
        render(targetPage as Page)
      }
    })
  })
  
  // Also handle regular nav items clicks
  const navItems = document.querySelectorAll<HTMLElement>('.nav-item:not(.dropdown)')
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 600) {
        // Close mobile menu and remove body lock
        mobileMenuBtn?.classList.remove('open')
        navMenu?.classList.remove('mobile-open')
        overlay?.classList.remove('show')
        document.body.classList.remove('menu-open')
      }
    })
  })
}

render('home')
