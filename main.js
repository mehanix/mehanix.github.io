// --- Preload Fonts ---
document.fonts.ready.then(() => {
  document.getElementById('app')?.classList.add('fonts-loaded');
});

// --- Data Architecture ---
const projectsData = [
  {
    id: "arcada",
    title: "Arcada",
    description: "An open-source floor planner app for designing rooms and houses.",
    staticImage: "./assets/projects/arcada/screenshot1.png",
    animatedImage: "./assets/projects/arcada/screenshot1.png",
    github: "https://github.com/mehanix/arcada",
    demo: "https://arcada.nicoleta.cc",
    photos: ["./assets/projects/arcada/screenshot1.png", "./assets/projects/arcada/logo.png", "./assets/projects/arcada/add-wall.gif", "./assets/projects/arcada/edit-walls.gif", "./assets/projects/arcada/edit-furniture.gif", "./assets/projects/arcada/add-door.gif", "./assets/projects/arcada/measure-tool.gif"]
  },
  {
    id: "learnanatomy",
    title: "learnAnatomy",
    description: "Educational software designed for high school students that helps them learn the structure of the human skeleton in 3D.",
    staticImage: "./assets/projects/learnAnatomy/screenshot2.png",
    animatedImage: "./assets/projects/learnAnatomy/screenshot2.png",
    github: "https://github.com/mehanix/learnAnatomy",
    demo: "https://github.com/mehanix/learnAnatomy",
    photos: ["https://www.youtube.com/watch?v=4brnc9oPYC8", "./assets/projects/learnAnatomy/screenshot1.png", "./assets/projects/learnAnatomy/screenshot2.png", "./assets/projects/learnAnatomy/screenshot3.png"]
  },
  {
    id: "ripple",
    title: "Ripple",
    description: "A cross-platform mobile app that aims to help you get into the habit of learning new things every day.",
    staticImage: "./assets/projects/ripple/logo.png",
    animatedImage: "./assets/projects/ripple/screenshot1.jpg",
    github: "https://github.com/mehanix/Ripple",
    demo: "https://github.com/mehanix/Ripple",
    photos: ["./assets/projects/ripple/demo.mp4", "./assets/projects/ripple/logo.png", "./assets/projects/ripple/screenshot1.jpg", "./assets/projects/ripple/gHdR8z3.jpg", "./assets/projects/ripple/sK0bcDZ.jpg"]
  },
  {
    id: "pancaketower",
    title: "Pancake Tower",
    description: "A puzzle game with level creation support where the player has to perform different tasks across two gamemodes: Puzzle and Maze.",
    staticImage: "./assets/projects/pancaketower/ss1.png",
    animatedImage: "./assets/projects/pancaketower/menu.gif",
    github: "https://github.com/mehanix/PancakeTower",
    demo: "https://github.com/mehanix/PancakeTower",
    photos: ["./assets/projects/pancaketower/menu.gif", "./assets/projects/pancaketower/ss1.png", "./assets/projects/pancaketower/ss2.png", "./assets/projects/pancaketower/ss3.png"]
  },
  {
    id: "downbeat",
    title: "Downbeat",
    description: "A small playable virtual piano written in C++ using SFML. Record, save, load and play songs.",
    staticImage: "./assets/projects/downbeat/screenshot1.png",
    animatedImage: "./assets/projects/downbeat/screenshot1.png",
    github: "https://github.com/mehanix/Downbeat",
    demo: "https://github.com/mehanix/Downbeat",
    photos: ["./assets/projects/downbeat/screenshot1.png"]
  },
  {
    id: "caverun",
    title: "Cave Run",
    description: "A hardware game written in C++ for Arduino with an 8x8 LED matrix. Escape as many rooms as you can in 60 seconds by collecting keys and using your radar to avoid buried bombs!",
    staticImage: "./assets/projects/caverun/build.png",
    animatedImage: "./assets/projects/caverun/build.png",
    github: "https://github.com/mehanix/Cave-Run",
    demo: "https://github.com/mehanix/Cave-Run",
    photos: ["https://www.youtube.com/watch?v=kI80q4XZILo", "./assets/projects/caverun/logo.png", "./assets/projects/caverun/instructions.png", "./assets/projects/caverun/build.png"]
  },
  {
    id: "bubblemancer",
    title: "BubbleMancer",
    description: "A Global Game Jam 2024 game where a BubbleMancer climbs the ancient Wizard Spire to prove his peers wrong.",
    staticImage: "./assets/projects/bubblemancer/image_0.png",
    animatedImage: "./assets/projects/bubblemancer/image_1.png",
    github: "https://github.com/mehanix/bubblemancer",
    demo: "https://globalgamejam.org/games/2024/bubblemancer-4-0",
    photos: ["./assets/projects/bubblemancer/image_0.png", "./assets/projects/bubblemancer/image_1.png", "./assets/projects/bubblemancer/image_2.png", "./assets/projects/bubblemancer/image_3.png", "./assets/projects/bubblemancer/image_4.png", "./assets/projects/bubblemancer/image_5.png"]
  },
  {
    id: "dhrw",
    title: "DHRW ~ Visual Data Pipelines",
    description: "A proof-of-concept for a low-code, IaaS platform to let you visually create data processing pipelines and deploy them to the cloud via Docker containers.",
    staticImage: "./assets/projects/dhrw/image_0.png",
    animatedImage: "./assets/projects/dhrw/image_1.png",
    containImage: true,
    github: "https://github.com/mehanix/dhrw",
    demo: "https://www.youtube.com/watch?v=6WjEC7rRUQU",
    photos: ["https://www.youtube.com/watch?v=6WjEC7rRUQU", "./assets/projects/dhrw/image_0.png", "./assets/projects/dhrw/image_1.png", "./assets/projects/dhrw/image_2.png", "./assets/projects/dhrw/image_3.png", "./assets/projects/dhrw/image_4.png", "./assets/projects/dhrw/image_5.png", "./assets/projects/dhrw/image_6.png", "./assets/projects/dhrw/image_7.png", "./assets/projects/dhrw/image_8.png", "./assets/projects/dhrw/image_9.png", "./assets/projects/dhrw/image_10.jpg"]
  },
  {
    id: "blackout",
    title: "Blackout",
    description: "A randomly-generated maze game where you need to escape dark mazes, while equipped with only a lantern.",
    staticImage: "./assets/projects/blackout/image_0.png",
    animatedImage: "./assets/projects/blackout/image_0.png",
    github: "https://github.com/mehanix/Blackout",
    demo: "https://www.youtube.com/watch?v=1fq4Lg6IOio",
    photos: ["https://www.youtube.com/watch?v=1fq4Lg6IOio", "./assets/projects/blackout/image_0.png"]
  },
  {
    id: "tidycobra",
    title: "TidyCobra",
    description: "A Python-based utility that automates the sorting of your files into designated folders like Pictures, Music, Documents, etc., keeping your folders organized.",
    staticImage: "./assets/projects/tidycobra/ui_1.png",
    animatedImage: "./assets/projects/tidycobra/ui_1.png",
    containImage: true,
    github: "https://github.com/mehanix/tidycobra",
    demo: "https://github.com/mehanix/tidycobra",
    photos: ["./assets/projects/tidycobra/ui_1.png", "./assets/projects/tidycobra/ui_2.png", "./assets/projects/tidycobra/banner.png"]
  }
];


// --- Modal Elements ---
const modalPortfolioList = document.getElementById('modal-portfolio-list');
const modalProjectDetails = document.getElementById('modal-project-details');
const modalShowreel = document.getElementById('modal-showreel');
const modalContact = document.getElementById('modal-contact');

function openModal(modal) {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
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
      <div class="carousel-item project-trigger ${project.containImage ? 'contain-img' : ''}" data-id="${project.id}">
        <img class="carousel-img static" src="${project.staticImage}" alt="${project.title}">
        <img class="carousel-img animated" src="${project.animatedImage}" alt="${project.title} animated">
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

let carouselHalfWidth = 0;
let currentTranslate = 0;
let isDragging = false;
let startX = 0;
let prevTranslate = 0;
let isHovering = false;
let isDraggingFlag = false;

function updateCarouselWidth() {
  if (mainCarouselTrack) {
    // The track contains 2 duplicated sets of items.
    carouselHalfWidth = mainCarouselTrack.scrollWidth / 2;
  }
}

function autoScroll() {
  if (!isDragging && !isHovering && !document.body.classList.contains('modal-open')) {
    currentTranslate -= 0.8; // scroll speed
  }
  
  if (carouselHalfWidth > 0) {
    // Wrap around for infinite effect
    if (currentTranslate <= -carouselHalfWidth) {
      currentTranslate += carouselHalfWidth;
    } else if (currentTranslate > 0) {
      currentTranslate -= carouselHalfWidth;
    }
  }
  
  if (mainCarouselTrack) {
    mainCarouselTrack.style.transform = `translateX(${currentTranslate}px)`;
  }
  requestAnimationFrame(autoScroll);
}

Promise.all(imagesToPreload.map(url => {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // Resolve even on error
    img.src = url;
  });
})).then(() => {
  document.getElementById('linear-carousel')?.classList.add('loaded');
  updateCarouselWidth();
  window.addEventListener('resize', updateCarouselWidth);
  requestAnimationFrame(autoScroll);
});

const carouselContainer = document.getElementById('linear-carousel');
if (carouselContainer) {
  // Touch Events for Mobile
  carouselContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    isDraggingFlag = false;
    startX = e.touches[0].pageX;
    prevTranslate = currentTranslate;
  }, { passive: true });

  carouselContainer.addEventListener('touchend', () => {
    isDragging = false;
    isHovering = false;
  });

  carouselContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const walk = (e.touches[0].pageX - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      isDraggingFlag = true;
    }
    currentTranslate = prevTranslate + walk;
  }, { passive: true });

  // Mouse Events for Desktop
  carouselContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    isDraggingFlag = false;
    startX = e.pageX;
    prevTranslate = currentTranslate;
  });

  carouselContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    isHovering = false;
  });

  carouselContainer.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  carouselContainer.addEventListener('mouseup', () => {
    isDragging = false;
    // reset flag slightly later so click event (which fires after mouseup) is caught
    setTimeout(() => {
      isDraggingFlag = false;
    }, 50);
  });

  carouselContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const walk = (e.pageX - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      isDraggingFlag = true;
      e.preventDefault(); // Prevent text selection/image dragging when dragging
    }
    currentTranslate = prevTranslate + walk;
  });
}

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
  if (isDraggingFlag) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
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
        projectModalTrack.innerHTML = project.photos.map(url => {
          if (url.includes('youtube.com') || url.includes('youtu.be')) {
            let videoId = "";
            if (url.includes('youtube.com/watch?v=')) {
              videoId = url.split('v=')[1].split('&')[0];
            } else if (url.includes('youtu.be/')) {
              videoId = url.split('.be/')[1].split('?')[0];
            }
            if(videoId) {
              return `<iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%; aspect-ratio: 16/9;"></iframe>`;
            }
          } else if (url.endsWith('.mp4') || url.endsWith('.webm')) {
            return `<video src="${url}" controls autoplay muted loop></video>`;
          }
          return `<img src="${url}" alt="Project photo">`;
        }).join('');
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
  '/cables/visual1/js/patch.js' // The original visual
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


