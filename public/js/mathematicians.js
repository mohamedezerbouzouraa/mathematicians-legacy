const mathematicians = [
    { id: 'al_khwarizmi',
        name: 'Al-Khwarizmi',
        image: '/images/f1.jfif',
        era: 'Moyen Âge · v. 780–850',
        nationality: 'Persan',
        tagline: 'Le père de l\'algèbre',
        emoji: '📜',
        color: '#2d1b10',
        accentColor: '#fbbf24',
        description: 'Fondateur de l\'algèbre et introducteur des chiffres indiens en Occident.',
        history: [
            { year: '780', text: 'Naissance dans la région du Khwarezm.' },
            { year: '820', text: 'Prend la direction de la Maison de la Sagesse à Bagdad.' },
            { year: '825', text: 'Publie son ouvrage majeur sur le calcul par complétion.' }
        ],
        historyText: [
            'Son nom latinisé, Algoritmi, a donné le mot "algorithme".',
            'Il a transformé l\'algèbre en une science de la résolution d\'équations.'
        ],
        formulas: [
            { name: 'Méthode d\'Al-Jabr', eq: 'x² + 10x = 39', desc: 'Technique de restauration pour transformer les soustractions en additions.' },
            { name: 'Introduction du Zéro', eq: '0', desc: 'A popularisé l\'utilisation du zéro comme chiffre positionnel.' },
            { name: 'Réduction (Al-Muqabala)', eq: '5x = 2x + 6 → 3x = 6', desc: 'Simplification des termes semblables des deux côtés d\'une équation.' },
            { name: 'Algorithme de division', eq: 'a = bq + r', desc: 'Base du calcul arithmétique systématique.' }
        ],
        legacy: 'Sans ses travaux, l\'informatique n\'existerait pas.',
        quote: '« Le but est de rendre le calcul plus facile et plus utile. »',
        achievements: ['Invention du concept d\'Algèbre', 'Étymologie du mot Algorithme', 'Introduction des chiffres indo-arabes']
    },
    {
        id: 'wilson',
        name: 'John Wilson',
        image: '/images/x.jpeg',
        era: 'Siècle des Lumières · 1741–1793',
        nationality: 'Britannique',
        tagline: 'Le précurseur de l\'arithmétique modulaire',
        emoji: '🔢',
        color: '#101a28',
        accentColor: '#fbbf24',
        description: 'Mathématicien célèbre pour son théorème fondamental sur les nombres premiers.',
        history: [
            { year: '1741', text: 'Naissance à Applethwaite, Angleterre.' },
            { year: '1770', text: 'Énonce son célèbre théorème sur les factorielles et la congruence.' },
            { year: '1782', text: 'Nommé juge à la Cour des plaids communs.' }
        ],
        historyText: [
            'Bien qu\'il ait abandonné les mathématiques pour le droit, son nom reste gravé dans la théorie des nombres.',
            'Son théorème a été prouvé plus tard par Lagrange en 1771.'
        ],
        formulas: [
            { name: 'Théorème de Wilson', eq: '(p-1)! congru à -1 [p] <=> p premier', desc: 'Condition nécessaire et suffisante pour qu\'un nombre p soit premier.' },
            { name: 'Nombre de Wilson', eq: 'W(p) = \\frac{(p-1)! + 1}{p}', desc: 'Nombres entiers liés à la primalité de p.' },
            { name: 'Congruence de factorielle', eq: '4! \\equiv -1 \\pmod 5', desc: 'Exemple concret : 24 + 1 est divisible par 5.' },
            { name: 'Primalité', eq: 'p \\in \\mathbb{P}', desc: 'Test théorique pour identifier les nombres premiers.' }
        ],
        legacy: 'Son théorème est une pierre angulaire de l\'arithmétique moderne.',
        quote: '« Une propriété élégante qui définit l\'essence même des nombres premiers. »',
        achievements: ['Théorème de Wilson', 'Contributions à la théorie des congruences', 'Distinction en droit et mathématiques']
    },
    {
        id: 'newton',
        name: 'Isaac Newton',
        image: '/images/f2.png',
        era: 'Époque moderne · 1643–1727',
        nationality: 'Anglais',
        tagline: 'L\'architecte de l\'univers',
        emoji: '🍎',
        color: '#0f172a',
        accentColor: '#38bdf8',
        description: 'Co-inventeur du calcul infinitésimal et génie de la physique.',
        history: [
            { year: '1666', text: 'Année miraculeuse : lois de la gravité et optique.' },
            { year: '1687', text: 'Publication des Principia Mathematica.' }
        ],
        historyText: ['Il a unifié les lois de la Terre et du Ciel.'],
        formulas: [
            { name: 'Gravitation Universelle', eq: 'F = G \\frac{m_1 m_2}{d²}', desc: 'Force d\'attraction entre deux masses.' },
            { name: 'Deuxième loi du mouvement', eq: 'F = m \\cdot a', desc: 'Relation fondamentale entre force et accélération.' },
            { name: 'Binôme de Newton', eq: '(a+b)^n = \\sum \\binom{n}{k} a^k b^{n-k}', desc: 'Développement d\'une puissance de binôme.' },
            { name: 'Dérivée (Fluxion)', eq: '\\dot{x} = \\frac{dx}{dt}', desc: 'Étude du changement instantané de mouvement.' }
        ],
        legacy: 'Base de toute la mécanique classique.',
        quote: '« Si j\'ai vu plus loin, c\'est en montant sur les épaules de géants. »',
        achievements: ['Calcul infinitésimal', 'Lois du mouvement', 'Théorie de la gravitation']
    },
    {
        id: 'ramanujan',
        name: 'Srinivasa Ramanujan',
        image: '/images/f3.avif',
        era: 'Époque moderne · 1887–1920',
        nationality: 'Indien',
        tagline: 'Le génie autodidacte de Madras',
        emoji: '✨',
        color: '#1e1428',
        accentColor: '#c084fc',
        description: 'Génie autodidacte aux intuitions extraordinaires sur les nombres.',
        history: [
            { year: '1913', text: 'Correspondance historique avec G.H. Hardy.' },
            { year: '1918', text: 'Élu membre de la Royal Society.' }
        ],
        historyText: ['Il affirmait que ses formules lui étaient dictées par une déesse.'],
        formulas: [
            { name: 'Nombre Taxicab', eq: '1729', desc: 'Plus petit nombre somme de deux cubes de deux façons.' },
            { name: 'Série pour Pi', eq: '\\frac{1}{\\pi} = \\frac{2\\sqrt{2}}{9801} \\sum...', desc: 'Série convergeant extrêmement vite vers \\pi.' },
            { name: 'Partitions de n', eq: 'p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}', desc: 'Approximation du nombre de façons de décomposer un entier.' },
            { name: 'Sommation infinie', eq: '1+2+3... = -1/12', desc: 'Résultat célèbre dans l\'analyse complexe.' }
        ],
        legacy: 'Ses carnets sont encore une source majeure de recherche.',
        quote: '« Une équation n\'a aucun sens si elle n\'exprime pas une pensée de Dieu. »',
        achievements: ['3900 formules originales', 'Théorie des partitions']
    },
    {
        id: 'gauss',
        name: 'Carl Friedrich Gauss',
        image: '/images/f4.jpg',
        era: 'Époque moderne · 1777–1855',
        nationality: 'Allemand',
        tagline: 'Le prince des mathématiques',
        emoji: '👑',
        color: '#1a2010',
        accentColor: '#86efac',
        description: 'Contributions majeures en arithmétique, géodésie et statistiques.',
        history: [
            { year: '1777', text: 'Naissance à Brunswick.' },
            { year: '1801', text: 'Prédiction de la position de la planète Cérès.' }
        ],
        historyText: ['Un génie universel qui a marqué presque tous les domaines.'],
        formulas: [
            { name: 'Distribution Normale', eq: 'f(x) = e^{-x^2}', desc: 'La célèbre "courbe en cloche" des statistiques.' },
            { name: 'Somme arithmétique', eq: 'S = \\frac{n(n+1)}{2}', desc: 'Méthode pour additionner rapidement les entiers.' },
            { name: 'Théorème de Gauss (Flux)', eq: '\\iint E \\cdot dA = \\frac{Q}{\\varepsilon_0}', desc: 'Loi fondamentale de l\'électrostatique.' },
            { name: 'Congruence', eq: 'a \\equiv b \\pmod n', desc: 'Base de l\'arithmétique modulaire moderne.' }
        ],
        legacy: 'Surnommé "Princeps Mathematicorum".',
        quote: '« Les mathématiques sont la reine des sciences. »',
        achievements: ['Théorie des nombres', 'Distribution normale', 'Magnétisme']
    },
    {
        id: 'euler',
        name: 'Leonhard Euler',
        image: '/images/f5.jpg',
        era: 'Lumières · 1707–1783',
        nationality: 'Suisse',
        tagline: 'Le mathématicien le plus prolifique',
        emoji: '∞',
        color: '#0f1e2e',
        accentColor: '#38bdf8',
        description: 'Auteur de 800+ publications, créateur de la notation moderne.',
        history: [
            { year: '1727', text: 'Arrivée à Saint-Pétersbourg.' },
            { year: '1766', text: 'Perte totale de la vue, continue de produire de mémoire.' }
        ],
        historyText: ['On lui doit les symboles e, i, \\pi et \\Sigma.'],
        formulas: [
            { name: 'Identité d\'Euler', eq: 'e^{i\\pi} + 1 = 0', desc: 'Relie 0, 1, e, i, et \\pi de façon élégante.' },
            { name: 'Relation des Polyèdres', eq: 'S - A + F = 2', desc: 'Formule topologique pour les solides convexes.' },
            { name: 'Constante d\'Euler', eq: '\\gamma = \\lim (H_n - \\ln n)', desc: 'Lien entre harmoniques et logarithmes.' },
            { name: 'Droite d\'Euler', eq: 'G, H, O alignés', desc: 'Propriété géométrique remarquable du triangle.' }
        ],
        legacy: 'A posé les bases de l\'analyse complexe.',
        quote: '« Lisez Euler, c\'est notre maître à tous. »',
        achievements: ['Notation moderne', 'Théorie des graphes', 'Analyse complexe']
    },
    {
        id: 'riemann',
        name: 'Bernhard Riemann',
        image: '/images/f6.jpg',
        era: 'Époque moderne · 1826–1866',
        nationality: 'Allemand',
        tagline: 'L\'architecte de l\'espace-temps',
        emoji: '🌀',
        color: '#2d1010',
        accentColor: '#f87171',
        description: 'Pionnier de la géométrie différentielle et de l\'hypothèse de Riemann.',
        history: [
            { year: '1854', text: 'Conférence sur les fondements de la géométrie.' },
            { year: '1859', text: 'Publication sur la répartition des nombres premiers.' }
        ],
        historyText: ['Il a imaginé des espaces courbes à plusieurs dimensions.'],
        formulas: [
            { name: 'Fonction Zêta', eq: '\\zeta(s) = \\sum \\frac{1}{n^s}', desc: 'Indispensable pour l\'étude des nombres premiers.' },
            { name: 'Métrique de Riemann', eq: 'ds^2 = \\sum g_{ij} dx^i dx^j', desc: 'Définit la distance dans un espace courbé.' },
            { name: 'Intégrale de Riemann', eq: '\\int f(x) dx', desc: 'Définition classique de l\'aire sous une courbe.' },
            { name: 'Tenseur de Courbure', eq: 'R_{abcd}', desc: 'Mesure mathématique de la courbure de l\'espace.' }
        ],
        legacy: 'Fondement de la relativité d\'Einstein.',
        quote: '« Si je pouvais m\'éveiller dans 500 ans... »',
        achievements: ['Géométrie riemannienne', 'Hypothèse de Riemann']
    }];

const grid = document.getElementById('grid');
mathematicians.forEach(m => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openModal(m.id);

    const visualContent = m.image
        ? `<img src="${m.image}" class="card-img" alt="${m.name}">`
        : `<div class="card-img-fallback" style="background:${m.color};">
              <span style="font-size:72px;line-height:1;">${m.emoji}</span>
           </div>`;

    card.innerHTML = `
        ${visualContent}
        <div class="card-body">
            <div class="card-era">${m.era}</div>
            <div class="card-name">${m.name}</div>
            <div class="card-desc">${m.description}</div>
            <div class="card-btn" style="color:${m.accentColor};border-color:${m.accentColor}44;background:${m.accentColor}0d;">
                Découvrir →
            </div>
        </div>`;
    grid.appendChild(card);
});
function openModal(id) {
    const m = mathematicians.find(x => x.id === id);
    if (!m) return;

    const modalVisual = m.image
        ? `<img src="${m.image}" class="modal-portrait" alt="${m.name}">`
        : `<div class="modal-portrait-fallback" style="background:${m.color};">
              <span>${m.emoji}</span>
           </div>`;

    document.getElementById('modal-header').innerHTML = `
        ${modalVisual}
        <div class="modal-info">
            <div class="modal-era" style="color:${m.accentColor};">${m.era} · ${m.nationality}</div>
            <div class="modal-name">${m.name}</div>
            <div class="modal-tagline">${m.tagline}</div>
        </div>`;

    const tabs = ['Histoire', 'Formules', 'Héritage'];
    document.getElementById('modal-tabs').innerHTML = tabs.map((t, i) =>
        `<button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="switchTab(${i},this)" style="${i === 0 ? `color:${m.accentColor};border-bottom-color:${m.accentColor};` : ''}">${t}</button>`
    ).join('');

    const timelineHtml = m.history.map(h => `
        <div class="timeline-item">
            <div class="timeline-year" style="color:${m.accentColor};">${h.year}</div>
            <div class="timeline-text">${h.text}</div>
        </div>`).join('');

    const formulasHtml = m.formulas.map(f => `
        <div class="formula-card" style="border-left-color:${m.accentColor};">
            <div class="formula-name" style="color:${m.accentColor};">${f.name}</div>
            <div class="formula-eq">${f.eq}</div>
            <div class="formula-desc">${f.desc}</div>
        </div>`).join('');

    const legacyHtml = `
        <div class="legacy-quote">${m.quote}</div>
        <ul class="legacy-list">${m.achievements.map(a => `<li style="color:var(--text-primary);">${a}</li>`).join('')}</ul>
        <p style="margin-top:24px;font-size:1rem;color:var(--text-secondary);font-style:italic;line-height:1.7;">${m.legacy}</p>`;

    document.getElementById('modal-content').innerHTML = `
        <div class="tab-panel active" id="tab-0">
            <div class="history-text">${m.historyText.map(p => `<p>${p}</p>`).join('')}</div>
            <div class="timeline">${timelineHtml}</div>
        </div>
        <div class="tab-panel" id="tab-1">
            <div class="formula-grid">${formulasHtml}</div>
        </div>
        <div class="tab-panel" id="tab-2">${legacyHtml}</div>`;

    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchTab(idx, btn) {
    document.querySelectorAll('.tab-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach((b, i) => {
        b.classList.toggle('active', i === idx);
        b.style.color = i === idx ? btn.style.color || 'var(--accent-teal)' : '';
        b.style.borderBottomColor = i === idx ? btn.style.color || 'var(--accent-teal)' : '';
    });
}

function closeModal(e, force) {
    if (force || e.target === document.getElementById('overlay')) {
        document.getElementById('overlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal(null, true);
});
