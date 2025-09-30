// Default/local projects data (fallback if Google Sheet fetch fails)
const projectsData = [


    {
        id: 1,
        title: "Into the Deep Robot",
        teamName: "Marlbots",
        teamNumber: "3526",
        program: "FTC",
        season: "2024-25",
        country: "California",
        description: '',
        tags: ["FTC", "Into the Deep", "Advanced Mechanisms"],
        links: [
            {text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/e572c65123251ef45b66f39e/w/f34b2f76e28714ad4e8fabda/e/53a251850136ccbe839f52d5?renderMode=0&uiState=68487e49a0494d1fc0b81a6f"}
        ]
    },
    {
        id: 2,
        title: "Centerstage Robot",
        teamName: "Marlbots",
        teamNumber: "3526",
        program: "FTC",
        season: "2023-24",
        country: "California",
        description: '',
        tags: ["FTC", "Centerstage", "Precision Scoring"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/e90c60b27e433977608b9152/w/59237bb6890d87eb1fd8994c/e/752f3b7b2968df845d6e46fe?renderMode=0&uiState=68488124e97b2d1c16e4f9d9", icon: "fas fa-cube" }
        ]
        
    },
    {
        id: 3,
        title: "Powerplay Robot",
        teamName: "Marlbots",
        teamNumber: "3526",
        program: "FTC",
        season: "2022-23",
        country: "California",
        description: "",
        tags: ["FTC", "Powerplay", "Power Management"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/1da9466f4ce20e1dd363e947/w/5f345e29b57b59c6e597a831/e/56d6b5b9e0591e7cd6478ee9?renderMode=0&uiState=68487fe6738b5b327a021919", icon: "fas fa-cube" }
        ]
    },
    {
        id: 4,
        title: "Into the Deep Robot",
        teamName: "Asteria",
        teamNumber: "14917",
        program: "FTC",
        season: "2024-25",
        country: "California",
        description: "Advanced FTC robot design for underwater-themed competition challenges.",
        tags: ["FTC", "Into the Deep", "Advanced Design"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/170256185392c6aba00470ce/w/0cfbfe8478157d854f3f8a02/e/e6c65e2262ac2eac51b47f25", icon: "fas fa-cube" }
        ]
    },
    {
        id: 5,
        title: "Into the Deep Robot",
        teamName: "CosmicSpark",
        teamNumber: "16093",
        program: "FTC",
        season: "2024-25",
        country: "Beijing, China",
        description: "International FTC team's innovative robot design for Into the Deep season.",
        tags: ["FTC", "Into the Deep", "International"],
        links: [
            { text: "OnShape CAD", url: "https://cad.onshape.com/documents/c32e62fa8f9af654031f9b3c/w/2eab644d6a609b795ce9a77a/e/536f9659549c434f5e0964c3", icon: "fas fa-cube" }
        ]
    },
    {
        id: 6,
        title: "Into the Deep Robot",
        teamName: "Bilorda",
        teamNumber: "28313",
        program: "FTC",
        season: "2024-25",
        country: "Kazakhstan",
        description: "Kazakhstan FTC team's robot design featuring unique engineering solutions.",
        tags: ["FTC", "Into the Deep", "Unique Engineering"],
        links: [
            { text: "Google Drive", url: "https://drive.google.com/file/d/1o1S0sibZfOB8pSwWLc75GxJvxh2aKdH4/view?usp=sharing", icon: "fab fa-google-drive" }
        ]
    },
    {
        id: 7,
        title: "Into the Deep Robot",
        teamName: "Steam Wanderer",
        teamNumber: "9513",
        program: "FTC",
        season: "2024-25",
        country: "Indonesia",
        description: "Indonesian FTC team's innovative robot design for underwater challenges.",
        tags: ["FTC", "Into the Deep", "Innovative Design"],
        links: [
            { text: "OnShape CAD", url: "https://cad.onshape.com/documents/a080e33adb86f752eda2db0d/w/fa722723c4ec84c3256b1a7b/e/c246c7b98c62703770172f31", icon: "fas fa-cube" }
        ]
    },
    {
        id: 8,
        title: "Into the Deep Robot",
        teamName: "Gear Gurus",
        teamNumber: "7238",
        program: "FTC",
        season: "2024-25",
        country: "Romoland, California",
        description: "California FTC team specializing in precision gear mechanisms and drivetrains.",
        tags: ["FTC", "Into the Deep", "Gear Mechanisms"],
        links: [
            { text: "Google Drive", url: "https://drive.google.com/drive/folders/18JVktEYcFQx-_DtrzhA60dKceSzz2HPM?usp=sharing", icon: "fab fa-google-drive" }
        ]
    },
    {
        id: 9,
        title: "Reefscape Robot",
        teamName: "FRC Gryffingear",
        teamNumber: "5012",
        program: "FTC",
        season: "2024-25",
        country: "Palmdale, California",
        description: "FTC robot for Reefscape season with advanced scoring mechanisms.",
        tags: ["FTC", "Reefscape", "Advanced Scoring"],
        links: [
            { text: "OnShape CAD", url: "https://cad.onshape.com/documents/f2823d606f50281ed95feaf6/w/f9ed0af4f276e511a5dd41fa/e/1d7fb63b33b3ae711826e788", icon: "fas fa-cube" }
        ]
    },
    {
        id: 10,
        title: "Into the Deep Robot",
        teamName: "MoVal Robotics",
        teamNumber: "17600",
        program: "FTC",
        season: "2024-25",
        country: "Moreno Valley, CA",
        description: "Moreno Valley FTC team's robot design for Into the Deep competition.",
        tags: ["FTC", "Into the Deep", "Competition Ready"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/03dfa5ebab4f6179fdf0cd17/w/514335ceb8eced7fde7747f7/e/ef759f56c0a024601169fca2", icon: "fas fa-cube" }
        ]
    },
    {
        id: 11,
        title: "Ultimate Goal Robot",
        teamName: "Overlord of Nonsense",
        teamNumber: "17517",
        program: "FTC",
        season: "2020",
        country: "Saint-Petersberg, Russia",
        description: "Russian FTC team's robot design for Ultimate Goal season with creative engineering.",
        tags: ["FTC", "Ultimate Goal", "Creative Engineering"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/4nbEtTq", icon: "fas fa-cube" }
        ]
    },
    {
        id: 12,
        title: "Ultimate Goal Robot",
        teamName: "Aperture in Reasons",
        teamNumber: "18742",
        program: "FTC",
        season: "2020",
        country: "Saint-Petersberg, Russia",
        description: "Russian FTC team's innovative robot design for Ultimate Goal competition.",
        tags: ["FTC", "Ultimate Goal", "Innovative Design"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/4prEBjc", icon: "fas fa-cube" }
        ]
    },
    {
        id: 13,
        title: "Freight Frenzy Robot",
        teamName: "Workshop of Eternal Nonsense",
        teamNumber: "17517",
        program: "FTC",
        season: "2021",
        country: "Saint-Petersberg, Russia",
        description: "Russian FTC team's robot design for Freight Frenzy season with cargo handling systems.",
        tags: ["FTC", "Freight Frenzy", "Cargo Handling"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/46py5ks", icon: "fas fa-cube" }
        ]
    },
    {
        id: 14,
        title: "Powerplay Robot",
        teamName: "Aperture in Reasons",
        teamNumber: "18742",
        program: "FTC",
        season: "2022-23",
        country: "Saint-Petersberg, Russia",
        description: "Russian FTC team's robot design for Powerplay season with advanced power systems.",
        tags: ["FTC", "Powerplay", "Power Systems"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/41UQUdI", icon: "fas fa-cube" }
        ]
    },
    {
        id: 15,
        title: "Centerstage Robot",
        teamName: "Aperture in Reasons",
        teamNumber: "18742",
        program: "FTC",
        season: "2023-24",
        country: "Saint-Petersberg, Russia",
        description: "Russian FTC team's robot design for Centerstage season with precision mechanisms.",
        tags: ["FTC", "Centerstage", "Precision Mechanisms"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/3YGdFQV", icon: "fas fa-cube" }
        ]
    }
];

// Google Sheet config (GViz JSON)
const GOOGLE_SHEET_ID = '1snp1ROWqbTpuxhxcNPTm7MDR_iuvI27wdZBAFR_GkDY';
const GOOGLE_GID = '0';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&gid=${GOOGLE_GID}`;
// Placeholder thumbnail (Onshape logo)
const PLACEHOLDER_THUMBNAIL = 'https://www.cadsharp.com/wp-content/uploads/2023/09/Onshape-logo-outline.png';

// Holds the complete dataset (either fetched or fallback)
let allProjects = [];

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);

async function initializeProjects() {
    try {
        const fetched = await fetchProjectsFromSheet();
        if (Array.isArray(fetched) && fetched.length > 0) {
            allProjects = fetched;
        } else {
            allProjects = projectsData;
        }
    } catch (err) {
        allProjects = projectsData;
    }

    renderProjects(allProjects);
    setupProjectFilters();
}

async function fetchProjectsFromSheet() {
    const res = await fetch(GVIZ_URL, { cache: 'no-store' });
    const text = await res.text();
    // Strip GViz JSONP wrapper
    const json = JSON.parse(text.replace(/^.*setResponse\(/, '').replace(/\);?\s*$/, ''));
    const table = json.table;
    if (!table || !table.rows) return [];

    // Map columns by header label (case-insensitive)
    const cols = table.cols.map(c => (c && c.label ? c.label.trim().toLowerCase() : ''));

    const getVal = (row, idx) => {
        const cell = row.c[idx];
        if (!cell) return '';
        if (cell.f) return String(cell.f);
        if (cell.v === null || cell.v === undefined) return '';
        return String(cell.v);
    };

    // Expected columns: TEAM NAME, TEAM #, COUNTRY/STATE (if US), CAD FILE LINK, SEASON (OF CAD FILE)
    // Optional: PROGRAM, DESCRIPTION, TAGS (comma sep), THUMBNAIL
    const idxTeamName = cols.indexOf('team name');
    const idxTeamNum = cols.indexOf('team #');
    const idxCountry = cols.findIndex(c => c.startsWith('country')); // country/state (if US)
    const idxCadLink = cols.findIndex(c => c.includes('cad file'));
    const idxSeason = cols.findIndex(c => c.startsWith('season'));
    const idxProgram = cols.indexOf('program');
    const idxDescription = cols.indexOf('description');
    const idxTags = cols.indexOf('tags');
    const idxThumb = cols.indexOf('thumbnail');

    const projects = [];
    table.rows.forEach((row, i) => {
        if (!row || !row.c) return;
        const teamName = idxTeamName >= 0 ? getVal(row, idxTeamName) : '';
        const teamNumber = idxTeamNum >= 0 ? getVal(row, idxTeamNum) : '';
        const country = idxCountry >= 0 ? getVal(row, idxCountry) : '';
        const cadLink = idxCadLink >= 0 ? getVal(row, idxCadLink) : '';
        const season = idxSeason >= 0 ? getVal(row, idxSeason) : '';
        const program = idxProgram >= 0 ? getVal(row, idxProgram) : 'FTC';
        const description = idxDescription >= 0 ? getVal(row, idxDescription) : '';
        const tagsRaw = idxTags >= 0 ? getVal(row, idxTags) : '';
        const thumbnail = idxThumb >= 0 ? getVal(row, idxThumb) : '';

        // Skip rows without essential fields
        if (!teamName && !teamNumber && !cadLink) return;

        const links = cadLink
            ? [{ text: 'CAD Link', url: cadLink, icon: 'fas fa-cube' }]
            : [];
        const tags = tagsRaw
            ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean)
            : [];

        projects.push({
            id: i + 1,
            title: season ? `${season} Robot` : `${teamName || 'Team'} Robot`,
            teamName,
            teamNumber: String(teamNumber),
            program,
            season,
            country,
            description: description || `${program} robot from ${teamName || 'team'} ${teamNumber || ''}`.trim(),
            tags,
            links,
            thumbnail
        });
    });

    return projects;
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    const noResults = document.getElementById('no-results');
    
    if (!projectsGrid) return;
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    projectsGrid.innerHTML = projects.map(project => {
        const primaryLink = (project.links && project.links[0] && project.links[0].url) ? project.links[0].url : '';
        const clickableClass = primaryLink ? ' clickable' : '';
        return `
        <div class="project-card${clickableClass}" ${primaryLink ? `data-link="${primaryLink}"` : ''}>
            <div class="project-thumb">
                <img src="${project.thumbnail || PLACEHOLDER_THUMBNAIL}" alt="${project.teamName || 'Project'} thumbnail" loading="lazy" />
            </div>
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-team">${project.teamName} #${project.teamNumber}</p>
                    ${project.country ? `<p class="project-location">${project.country}</p>` : ''}
                </div>
                <span class="project-season">${project.season}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                <span class="project-tag program-tag">${project.program}</span>
                <span class="project-tag season-tag">${project.season}</span>
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                        ${link.icon ? `<i class="${link.icon}"></i>` : ''}
                        ${link.text || 'Open CAD'}
                    </a>
                `).join('')}
            </div>
        </div>
    `;}).join('');

    // Make entire card clickable to open primary CAD link, except when clicking on inner anchors
    const cards = projectsGrid.querySelectorAll('.project-card.clickable');
    cards.forEach(card => {
        const href = card.getAttribute('data-link');
        if (!href) return;
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return; // allow normal link clicks inside
            window.open(href, '_blank', 'noopener');
        });
    });
}

function setupProjectFilters() {
    const teamNameFilter = document.getElementById('team-name-filter');
    const teamNumberFilter = document.getElementById('team-number-filter');
    const programFilter = document.getElementById('program-filter');
    const seasonFilter = document.getElementById('season-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (!teamNameFilter) return;
    
    // Add event listeners to all filter inputs
    [teamNameFilter, teamNumberFilter, programFilter, seasonFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('input', filterProjects);
        }
    });
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}

function filterProjects() {
    const teamNameFilter = document.getElementById('team-name-filter');
    const teamNumberFilter = document.getElementById('team-number-filter');
    const programFilter = document.getElementById('program-filter');
    const seasonFilter = document.getElementById('season-filter');
    
    if (!teamNameFilter) return;
    
    const teamName = teamNameFilter.value.toLowerCase().trim();
    const teamNumber = teamNumberFilter.value.toLowerCase().trim();
    const program = programFilter.value;
    const season = seasonFilter.value;
    
    const filteredProjects = (allProjects && allProjects.length ? allProjects : projectsData).filter(project => {
        const matchesTeamName = !teamName || project.teamName.toLowerCase().includes(teamName);
        const matchesTeamNumber = !teamNumber || project.teamNumber.includes(teamNumber);
        const matchesProgram = !program || project.program === program;
        const matchesSeason = !season || project.season === season;
        
        return matchesTeamName && matchesTeamNumber && matchesProgram && matchesSeason;
    });
    
    renderProjects(filteredProjects);
}

function clearFilters() {
    const teamNameFilter = document.getElementById('team-name-filter');
    const teamNumberFilter = document.getElementById('team-number-filter');
    const programFilter = document.getElementById('program-filter');
    const seasonFilter = document.getElementById('season-filter');
    
    if (teamNameFilter) teamNameFilter.value = '';
    if (teamNumberFilter) teamNumberFilter.value = '';
    if (programFilter) programFilter.value = '';
    if (seasonFilter) seasonFilter.value = '';
    
    renderProjects(allProjects && allProjects.length ? allProjects : projectsData);
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.category-card, .team-member, .stat, .project-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00d4ff' : type === 'error' ? '#ff6b35' : '#7b68ee'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.category-card, .team-member, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Close notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});