// ELEMENTS
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// OPEN SIDEBAR
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
});

// CLOSE SIDEBAR
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}

const teamRows = document.querySelectorAll(".team-row");

const revealTeam = () => {
  const triggerBottom = window.innerHeight * 0.85;

  teamRows.forEach(row => {
    const boxTop = row.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      row.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealTeam);
revealTeam();


const clientCards = document.querySelectorAll(".client-card");

const revealClients = () => {
  const trigger = window.innerHeight * 0.85;

  clientCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealClients);
revealClients();

function filterProjects(type, btn) {
  const cards = document.querySelectorAll('.portfolio-card');
  const buttons = document.querySelectorAll('.portfolio-filters button');

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  cards.forEach(card => {
    if (type === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(type) ? 'block' : 'none';
    }
  });
}

function openPoster(imageSrc) {
  document.getElementById("posterModal").style.display = "flex";
  document.getElementById("posterImage").src = imageSrc;
}

function closePoster() {
  document.getElementById("posterModal").style.display = "none";
}



const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // Progress animation
      const progress = entry.target.querySelector(".progress");
      if (progress) {
        const value = progress.dataset.value;
        let angle = 0;
        const interval = setInterval(() => {
          angle += 4;
          progress.style.background =
            `conic-gradient(#a53dbb ${angle}deg, #eee 0deg)`;
          if (angle >= value * 3.6) clearInterval(interval);
        }, 15);
      }
    }
  });
}, { threshold: 0.3 });

animatedItems.forEach(item => observer.observe(item));



