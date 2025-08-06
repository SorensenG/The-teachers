const links = {
    'AC/DC': 'https://www.youtube.com/watch?v=pAgnJDJN4VA',
    'Aerosmith': 'https://www.youtube.com/watch?v=SSbBvKaM6sk',
    'Alice in Chains': 'https://www.youtube.com/watch?v=TAqZb52sgpU',
    'Black Sabbath': 'https://www.youtube.com/watch?v=0qanF-91aJo',
    'Bon Jovi': 'https://www.youtube.com/watch?v=lDK9QqIzhwk',
    'Deep Purple': 'https://www.youtube.com/watch?v=ikGyZh0VbPQ',
    'Grand Funk': 'https://www.youtube.com/watch?v=2dVqZk0gqL4',
    'Guns N\'Roses': 'https://www.youtube.com/watch?v=1w7OgIMMRc4',
    'Kiss': 'https://www.youtube.com/watch?v=ZhIsAZO5gl0',
    'Led Zeppelin': 'https://www.youtube.com/watch?v=xbhCPt6PZIU',
    'Metallica': 'https://www.youtube.com/watch?v=CD-E-LDc384',
    'Nirvana': 'https://www.youtube.com/watch?v=hTWKbfoikeg',
    'Pearl Jam': 'https://www.youtube.com/watch?v=qM0zINtulhM',
    'Queen': 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    'Rage Against The Machine': 'https://www.youtube.com/watch?v=bWXazVhlyxQ',
    'Scorpions': 'https://www.youtube.com/watch?v=NvS351QKFV4',
    'Temple of the Dog': 'https://www.youtube.com/watch?v=VUb450Alpps',
    'The Beatles': 'https://www.youtube.com/watch?v=45cYwDMibGo',
    'The Cranberries': 'https://www.youtube.com/watch?v=6Ejga4kJUts',
    'U2': 'https://www.youtube.com/watch?v=ftjEcrrf7r0',
    'Van Halen': 'https://www.youtube.com/watch?v=SwYN7mTi6HM',
    'Alanis Morissette': 'https://www.youtube.com/watch?v=NPcyTyilmYY',
    'Alien Ant Farm': 'https://www.youtube.com/watch?v=LJ2t4jfVTiU&ab_channel=AlienAntFarmVEVO',
    'Arctic Monkeys': 'https://www.youtube.com/watch?v=bpOSxM0rNPM',
    'Audioslave': 'https://www.youtube.com/watch?v=7QU1nvuxaMA',
    'Coldplay': 'https://www.youtube.com/watch?v=RB-RcX5DS5A',
    'Evanescence': 'https://www.youtube.com/watch?v=3YxaaGgTQYM',
    'Foo Fighters': 'https://www.youtube.com/watch?v=eBG7P-K-r1Y',
    'Green Day': 'https://www.youtube.com/watch?v=NU9JoFKlaZ0',
    'Imagine Dragons': 'https://www.youtube.com/watch?v=fKopy74weus',
    'Jet': 'https://www.youtube.com/watch?v=tuK6n2Lkza0',
    'Kings of Leon': 'https://www.youtube.com/watch?v=gnhXHvRoUd0',
    'Lenny Kravitz': 'https://www.youtube.com/watch?v=EvuL5jyCHOw',
    'Linkin Park': 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
    'Måneskin': 'https://www.youtube.com/watch?v=Z3J_MCbwaJ0',
    'Muse': 'https://www.youtube.com/watch?v=w8KQmps-Sog',
    'Paramore': 'https://www.youtube.com/watch?v=A63VwWz1ij0',
    'Red Hot Chili Peppers': 'https://www.youtube.com/watch?v=Mr_uHJPUlO8',
    'System of a Down': 'https://www.youtube.com/watch?v=CSvFpBOe8eY',
    'The Killers': 'https://www.youtube.com/watch?v=gGdGFtwCNBE',
    'The White Stripes': 'https://www.youtube.com/watch?v=0J2QdDbelmY',
    'Adele': 'https://www.youtube.com/watch?v=hLQl3WQQoQ0',
    'Backstreet Boys': 'https://www.youtube.com/watch?v=6M6samPEMpM',
    'Benson Boone': 'https://www.youtube.com/watch?v=Gqqv38ZY7nE',
    'Bruno Mars': 'https://www.youtube.com/watch?v=SR6iYWJxHqs',
    'Elton John': 'https://www.youtube.com/watch?v=ZGoWtY_h4xo',
    'Eminem': 'https://www.youtube.com/watch?v=_Yhyp-_hX2s',
    'Eurythmics': 'https://www.youtube.com/watch?v=qeMFqkcPYcg',
    'Harry Styles': 'https://www.youtube.com/watch?v=beY5Cfp1rj4',
    'Lady Gaga': 'https://www.youtube.com/watch?v=qrO4YZeyl0I',
    'Maroon 5': 'https://www.youtube.com/watch?v=XPpTgCho5ZA',
    'Michael Jackson': 'https://www.youtube.com/watch?v=sOnqjkJTMaA',
    'The Weeknd': 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    'Barão Vermelho': 'https://www.youtube.com/watch?v=5AlZ6bYQmY0',
    'Capital Inicial': 'https://www.youtube.com/watch?v=FZ6ry3IZ-Ro',
    'Charlie Brown Jr': 'https://www.youtube.com/watch?v=eLt5xwNl0ec',
    'Cidade Negra': 'https://www.youtube.com/watch?v=Y7LxG-beyOQ',
    'Detonautas': 'https://www.youtube.com/watch?v=wLQwPOds5zI',
    'CPM 22': 'https://www.youtube.com/watch?v=aFhWwNFwVE4',
    'Gabriel, O Pensador': 'https://www.youtube.com/watch?v=pAwXW-tde_g',
    'Jota Quest': 'https://www.youtube.com/watch?v=eXYi5A4fZzM',
    'Legião Urbana': 'https://www.youtube.com/watch?v=rpjFBzMlJ9k',
    'LS Jack': 'https://www.youtube.com/watch?v=wWv14zcRuwI',
    'Mamonas Assassinas': 'https://www.youtube.com/watch?v=fLaIFk-g3ns',
    'Natiruts': 'https://www.youtube.com/watch?v=4K2X3zE6HfM',
    'NX Zero': 'https://www.youtube.com/watch?v=gU1Fyrlj6wM',
    'O Rappa': 'https://www.youtube.com/watch?v=xrBO3tR1rxo',
    'O Surto': 'https://www.youtube.com/watch?v=UNYZSozZfm8',
    'Paralamas': 'https://www.youtube.com/watch?v=gaE2qDuQdHs',
    'Raimundos': 'https://www.youtube.com/watch?v=BlFQ38WJChk',
    'Skank': 'https://www.youtube.com/watch?v=JGqtoXU9g6c',
    'Tihuana': 'https://www.youtube.com/watch?v=-Oxb-f0w1lc',
    'Titãs': 'https://www.youtube.com/watch?v=WLmK7JYlgd0',
    'Vitor Kley': 'https://www.youtube.com/watch?v=KbXnniP9GIo'

};




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Add scroll effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.song-item').forEach(item => {
        const name = item.textContent.trim();
        if (links[name]) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                window.open(links[name], '_blank');
            });
        }
    });
});
// Play button animation
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);

        // Simulate play action
        if (this.style.background.includes('linear-gradient')) {
            this.style.background = '#4CAF50';
            this.innerHTML = '⏸';
            setTimeout(() => {
                this.style.background = 'linear-gradient(45deg, #FFD700, #FFA500)';
                this.innerHTML = '';
            }, 3000);
        }
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
