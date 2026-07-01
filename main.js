// --- Preload Fonts ---
document.fonts.ready.then(() => {
  document.getElementById('app')?.classList.add('fonts-loaded');
});

// --- Data Architecture ---
const projectsData = [
  {
    id: "alpha",
    title: "Project Alpha",
    description: "Generative audio-visual installation using WebGL and WebAudio.",
    staticImage: "https://picsum.photos/seed/1/400/300",
    animatedImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    github: "https://github.com/placeholder",
    demo: "https://example.com",
    photos: ["https://picsum.photos/seed/1a/800/450", "https://picsum.photos/seed/1b/800/450", "https://picsum.photos/seed/1c/800/450"]
  },
  {
    id: "beta",
    title: "Project Beta",
    description: "Real-time particle simulation for live performances.",
    staticImage: "https://picsum.photos/seed/2/400/300",
    animatedImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    github: "https://github.com/placeholder",
    demo: "https://example.com",
    photos: ["https://picsum.photos/seed/2a/800/450", "https://picsum.photos/seed/2b/800/450"]
  },
  {
    id: "gamma",
    title: "Project Gamma",
    description: "Interactive projection mapping on geometric sculptures.",
    staticImage: "https://picsum.photos/seed/3/400/300",
    animatedImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    github: "https://github.com/placeholder",
    demo: "https://example.com",
    photos: ["https://picsum.photos/seed/3a/800/450", "https://picsum.photos/seed/3b/800/450", "https://picsum.photos/seed/3c/800/450"]
  },
  {
    id: "delta",
    title: "Project Delta",
    description: "Data physicalization using custom robotics.",
    staticImage: "https://picsum.photos/seed/4/400/300",
    animatedImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    github: "https://github.com/placeholder",
    demo: "https://example.com",
    photos: ["https://picsum.photos/seed/4a/800/450", "https://picsum.photos/seed/4b/800/450"]
  },
  {
    id: "epsilon",
    title: "Project Epsilon",
    description: "Immersive VR experience exploring algorithmic architecture.",
    staticImage: "https://picsum.photos/seed/5/400/300",
    animatedImage: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif",
    github: "https://github.com/placeholder",
    demo: "https://example.com",
    photos: ["https://picsum.photos/seed/5a/800/450", "https://picsum.photos/seed/5b/800/450", "https://picsum.photos/seed/5c/800/450"]
  }
];


// --- Modal Elements ---
const modalPortfolioList = document.getElementById('modal-portfolio-list');
const modalProjectDetails = document.getElementById('modal-project-details');
const modalShowreel = document.getElementById('modal-showreel');
const modalContact = document.getElementById('modal-contact');

function openModal(modal) {
  modal.classList.remove('hidden');
}

function closeModal(modal) {
  modal.classList.add('hidden');
  const video = document.getElementById('showreel-video');
  if (modal === modalShowreel && video) {
    video.pause();
  }
}

// --- DOM Generation ---
const mainCarouselTrack = document.getElementById('main-carousel-track');
const portfolioListContainer = document.getElementById('portfolio-list-container');

function generateDOM() {
  if (!mainCarouselTrack || !portfolioListContainer) return;
  
  let carouselHTML = '';
  let listHTML = '';
  
  projectsData.forEach(project => {
    // Generate Carousel Item
    carouselHTML += `
      <div class="carousel-item project-trigger" data-id="${project.id}" 
           style="--static: url('${project.staticImage}'); --animated: url('${project.animatedImage}');">
      </div>
    `;
    
    // Generate Portfolio List Item
    listHTML += `
      <div class="portfolio-list-item project-trigger" data-id="${project.id}">
        <img src="${project.staticImage}" alt="${project.title}" class="portfolio-list-thumb">
        <div class="portfolio-list-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </div>
    `;
  });
  
  // Duplicate for infinite carousel effect
  mainCarouselTrack.innerHTML = carouselHTML + carouselHTML;
  portfolioListContainer.innerHTML = listHTML;
}

generateDOM();

// --- Preload Critical Assets ---
const imagesToPreload = [];
projectsData.forEach(p => {
  imagesToPreload.push(p.staticImage);
  imagesToPreload.push(p.animatedImage);
});

Promise.all(imagesToPreload.map(url => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // Resolve even on error
    img.src = url;
  });
})).then(() => {
  document.getElementById('linear-carousel')?.classList.add('loaded');
});

// --- Project Details Modal Logic ---
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalDesc = document.getElementById('project-modal-desc');
const projectModalTrack = document.getElementById('project-modal-track');
const projectModalGithub = document.getElementById('project-modal-github');
const projectModalDemo = document.getElementById('project-modal-demo');
let currentModalSlide = 0;
let maxModalSlides = 0;

function updateModalCarousel() {
  if (projectModalTrack) {
    projectModalTrack.style.transform = `translateX(-${currentModalSlide * 100}%)`;
  }
}

document.getElementById('modal-prev')?.addEventListener('click', () => {
  if (currentModalSlide > 0) { currentModalSlide--; updateModalCarousel(); }
});
document.getElementById('modal-next')?.addEventListener('click', () => {
  if (currentModalSlide < maxModalSlides - 1) { currentModalSlide++; updateModalCarousel(); }
});

// Event Delegation for all .project-trigger elements
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.project-trigger');
  if (trigger) {
    const projectId = trigger.getAttribute('data-id');
    const project = projectsData.find(p => p.id === projectId);
    
    if (project) {
      if (projectModalTitle) projectModalTitle.textContent = project.title;
      if (projectModalDesc) projectModalDesc.textContent = project.description;
      if (projectModalGithub) projectModalGithub.href = project.github;
      if (projectModalDemo) projectModalDemo.href = project.demo;
      
      if (projectModalTrack) {
        maxModalSlides = project.photos.length;
        currentModalSlide = 0;
        projectModalTrack.innerHTML = project.photos.map(url => `<img src="${url}" alt="Project photo">`).join('');
        updateModalCarousel();
      }
      openModal(modalProjectDetails);
    }
  }
});

// --- Buttons & Closers ---
document.getElementById('btn-portfolio')?.addEventListener('click', () => openModal(modalPortfolioList));
document.getElementById('btn-showreel')?.addEventListener('click', () => {
  openModal(modalShowreel);
  document.getElementById('showreel-video')?.play();
});
document.getElementById('btn-contact')?.addEventListener('click', () => openModal(modalContact));

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', (e) => closeModal(e.target.closest('.modal')));
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('.modal:not(.hidden)').forEach(closeModal);
});

// --- cables.gl Lazy Loading ---
const cablesPatches = [
  '/cables/visual1/js/patch.js', // The original visual
  '/cables/visual2/js/patch.js', // Birth of a star
];
let currentPatchIndex = Math.floor(Math.random() * cablesPatches.length);
let currentLoadedPatchUrl = null;

function showError(initiator, ...args) {
  console.error("[" + initiator + "]", ...args);
}

function loadCablesPatch(patchUrl) {
  const container = document.getElementById('cables-canvas-container');
  
  // 1. Fade out current canvas
  container.classList.remove('loaded');
  
  setTimeout(() => {
    // 2. Properly dispose of previous WebGL context and event loops
    if (window.CABLES && window.CABLES.patch) {
      try {
        if (typeof window.CABLES.patch.dispose === 'function') {
          window.CABLES.patch.dispose();
        } else if (typeof window.CABLES.patch.pause === 'function') {
          window.CABLES.patch.pause();
        }
      } catch (e) {
        console.warn("Could not gracefully dispose cables instance:", e);
      }
    }

    // 3. Destroy old canvas
    container.innerHTML = '<canvas id="glcanvas" tabindex="1"></canvas>';
    
    // 3. Reusable Initialization Logic
    const initCables = () => {
      const glcanvas = document.getElementById('glcanvas');
      if (glcanvas) glcanvas.addEventListener('touchmove', (e) => e.preventDefault(), {passive: false});
      
      const assetPrefix = patchUrl.replace('js/patch.js', '');
      
      if (window.CABLES && window.CABLES.Patch) {
        CABLES.patch = new CABLES.Patch({
            patch: CABLES.exportedPatch,
            "prefixAssetPath": assetPrefix,
            "assetPath": "assets/",
            "jsPath": "js/",
            "glCanvasId": "glcanvas",
            "glCanvasResizeToWindow": true,
            "onError": showError,
            "onPatchLoaded": function(patch) {},
            "onFinishedLoading": function(patch) {
              container.classList.add('loaded'); // Fade back in!
            },
            "canvas": {"alpha":true, "premultipliedAlpha":true }
        });
      }
    };

    // 4. Check if we actually need to download a new script
    if (currentLoadedPatchUrl === patchUrl) {
      // The script is already in memory! Just restart the canvas immediately.
      initCables();
    } else {
      // We need to fetch a new script
      // IMPORTANT: Wipe the global CABLES object so the new bundled script 
      // doesn't think it's already loaded and abort execution!
      window.CABLES = undefined;
      
      const script = document.createElement('script');
      script.src = patchUrl;
      
      let isInitialized = false;
      const initCablesWrapper = () => {
        if (isInitialized) return;
        isInitialized = true;
        currentLoadedPatchUrl = patchUrl;
        initCables();
      };

      const initListener = function() {
        document.removeEventListener("CABLES.jsLoaded", initListener);
        initCablesWrapper();
      };
      
      document.addEventListener("CABLES.jsLoaded", initListener);
      
      script.onload = () => {
        // Fallback: If it loaded from cache, CABLES.jsLoaded might not fire correctly.
        setTimeout(() => initCablesWrapper(), 50);
      };
      
      document.body.appendChild(script);
      
      script.onerror = () => {
        console.warn(`Patch ${patchUrl} not found. Skipping.`);
      }
    }
  }, 400); // Wait 0.4s for fade out transition
}

// Initial Load
loadCablesPatch(cablesPatches[currentPatchIndex]);

// Button listener
document.getElementById('btn-change-bg')?.addEventListener('click', () => {
  currentPatchIndex = (currentPatchIndex + 1) % cablesPatches.length;
  loadCablesPatch(cablesPatches[currentPatchIndex]);
});


