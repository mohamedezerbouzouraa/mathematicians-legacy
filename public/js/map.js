const mathematicians = [
    {   id: 'ramanujan',
        name: 'Srinivasa Ramanujan',
        era: 'Époque moderne · 1887–1920',
        tagline: 'Le génie autodidacte de Madras',
        emoji: '✨',
        accentColor: '#c084fc',
        bgColor: '#1e1428',
        country: 'Inde',
        city: 'Erode, Tamil Nadu',
        flag: '🇮🇳',
        dates: '1887 – 1920',
        description: 'Sans formation formelle, il redécouvrit seul des siècles de mathématiques et produisit plus de 3900 formules originales.',
        signatureFormula: { label: 'Somme de Ramanujan', eq: '1+2+3+··· = −1/12' },
        continent: 'Asie'
    },
    {
        id: 'gauss',
        name: 'Carl Friedrich Gauss',
        era: 'Époque moderne · 1777–1855',
        tagline: 'Le prince des mathématiques',
        emoji: '👑',
        accentColor: '#86efac',
        bgColor: '#1a2010',
        country: 'Allemagne',
        city: 'Brunswick, Basse-Saxe',
        flag: '🇩🇪',
        dates: '1777 – 1855',
        description: 'Enfant prodige devenu le plus grand mathématicien de son époque, auteur des Disquisitiones Arithmeticae et de la loi normale.',
        signatureFormula: { label: 'Distribution normale', eq: 'f(x) = e^(-(x-μ)²/2σ²) / σ√(2π)' },
        continent: 'Europe'
    },
    {
        id: 'euler',
        name: 'Leonhard Euler',
        era: 'Siècle des Lumières · 1707–1783',
        tagline: 'Le mathématicien le plus prolifique',
        emoji: '∞',
        accentColor: '#38bdf8',
        bgColor: '#0f1e2e',
        country: 'Suisse',
        city: 'Bâle, Confédération helvétique',
        flag: '🇨🇭',
        dates: '1707 – 1783',
        description: 'Auteur de plus de 800 publications, il inventa la notation mathématique moderne et produisit des résultats fondamentaux dans tous les domaines.',
        signatureFormula: { label: 'Identité d\'Euler', eq: 'e^(iπ) + 1 = 0' },
        continent: 'Europe'
    },
    {
        id: 'wilson',
        name: 'John Wilson',
        era: 'Siècle des Lumières · 1741–1793',
        tagline: 'Le théorème des nombres premiers',
        emoji: '🔢',
        accentColor: '#fbbf24',
        bgColor: '#1e1a10',
        country: 'Angleterre',
        city: 'Appleby-in-Westmorland, Cumbria',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        dates: '1741 – 1793',
        description: 'Juriste de profession, immortalisé par son théorème élégant sur les nombres premiers reliant factorielles et arithmétique modulaire.',
        signatureFormula: { label: 'Théorème de Wilson', eq: '(p − 1)! ≡ −1  (mod p)' },
        continent: 'Europe'
    },
    {
        id: 'laplace',
        name: 'Pierre-Simon Laplace',
        era: 'Révolution & Empire · 1749–1827',
        tagline: 'Le Newton français',
        emoji: '🌌',
        accentColor: '#818cf8',
        bgColor: '#0f1a2e',
        country: 'France',
        city: 'Beaumont-en-Auge, Normandie',
        flag: '🇫🇷',
        dates: '1749 – 1827',
        description: 'Maître de la mécanique céleste et fondateur des probabilités modernes. Son Traité de mécanique céleste dépasse l\'œuvre de Newton.',
        signatureFormula: { label: 'Équation de Laplace', eq: '∇²Φ = 0' },
        continent: 'Europe'
    }
];
const originGrid = document.getElementById('origin-grid');
mathematicians.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'origin-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.style.borderTopColor = m.accentColor;
    card.style.borderTopWidth = '2px';
    card.innerHTML = `
        <span class="origin-card-flag">${m.flag}</span>
        <div class="origin-card-country" style="color:${m.accentColor};">${m.country}</div>
        <div class="origin-card-name">${m.name}</div>
        <div class="origin-card-dates">${m.dates}</div>
        <div class="origin-card-dot" style="background:${m.accentColor};"></div>`;
    card.addEventListener('click', () => openDetail(m.id));
    originGrid.appendChild(card);
});

document.querySelectorAll('.marker-group').forEach(marker => {
    marker.addEventListener('click', () => {
        const id = marker.getAttribute('data-id');
        openDetail(id);
    });
});

function openDetail(id) {
    const m = mathematicians.find(x => x.id === id);
    if (!m) return;

    document.getElementById('detail-content').innerHTML = `
        <span class="detail-emoji">${m.emoji}</span>
        <div class="detail-era" style="color:${m.accentColor};">${m.era}</div>
        <div class="detail-name">${m.name}</div>
        <div class="detail-tagline">${m.tagline}</div>

        <div class="detail-divider"></div>

        <div class="detail-location">
            <div class="detail-location-icon" style="background:${m.bgColor}; font-size:20px;">${m.flag}</div>
            <div>
                <div class="detail-location-text">${m.country}</div>
                <div class="detail-location-sub">${m.city}</div>
            </div>
        </div>

        <div class="detail-desc">${m.description}</div>

        <div class="detail-formula-preview" style="border-left:3px solid ${m.accentColor};">
            <div class="detail-formula-label" style="color:${m.accentColor};">${m.signatureFormula.label}</div>
            <div class="detail-formula-eq">${m.signatureFormula.eq}</div>
        </div>

        <a href="/mathematicians/${m.id}" class="detail-btn"
           style="color:${m.accentColor}; border-color:${m.accentColor}44; background:${m.accentColor}0d;">
            Voir la fiche complète →
        </a>`;

    document.getElementById('detail-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';

    document.querySelectorAll('.marker-group').forEach(g => {
        g.style.opacity = g.getAttribute('data-id') === id ? '1' : '0.35';
    });
}

function closeDetail() {
    document.getElementById('detail-overlay').classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.marker-group').forEach(g => {
        g.style.opacity = '1';
    });
}

document.getElementById('detail-close').addEventListener('click', closeDetail);
document.getElementById('detail-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('detail-overlay')) closeDetail();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
});

const svg = document.getElementById('world-map');
let scale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let panStart = { x: 0, y: 0 };

const MIN_SCALE = 0.9;
const MAX_SCALE = 4;

function applyTransform() {
    svg.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

document.getElementById('zoom-in').addEventListener('click', () => {
    scale = Math.min(MAX_SCALE, scale * 1.3);
    applyTransform();
});
document.getElementById('zoom-out').addEventListener('click', () => {
    scale = Math.max(MIN_SCALE, scale / 1.3);
    applyTransform();
});
document.getElementById('zoom-reset').addEventListener('click', () => {
    scale = 1;
    panX = 0;
    panY = 0;
    applyTransform();
});

svg.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.85 : 1.18;
    scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * delta));
    applyTransform();
}, { passive: false });

const mapContainer = document.getElementById('map-container');

mapContainer.addEventListener('mousedown', e => {
    if (e.target.closest('.marker-group') || e.target.closest('.zoom-controls')) return;
    isDragging = true;
    dragStart = { x: e.clientX, y: e.clientY };
    panStart = { x: panX, y: panY };
    mapContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    panX = panStart.x + (e.clientX - dragStart.x);
    panY = panStart.y + (e.clientY - dragStart.y);
    applyTransform();
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    mapContainer.style.cursor = 'grab';
});

let lastTouchDist = 0;
mapContainer.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
        isDragging = true;
        dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        panStart = { x: panX, y: panY };
    } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDist = Math.sqrt(dx * dx + dy * dy);
    }
}, { passive: true });

mapContainer.addEventListener('touchmove', e => {
    if (e.touches.length === 1 && isDragging) {
        panX = panStart.x + (e.touches[0].clientX - dragStart.x);
        panY = panStart.y + (e.touches[0].clientY - dragStart.y);
        applyTransform();
    } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ratio = dist / lastTouchDist;
        scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale * ratio));
        lastTouchDist = dist;
        applyTransform();
    }
    e.preventDefault();
}, { passive: false });

mapContainer.addEventListener('touchend', () => { isDragging = false; });
