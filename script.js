const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});


/* =========================
   BUSINESS SCOPE MODAL
========================= */

function openScopeModal(pageUrl, title) {
  const modal = document.getElementById("scopeModal");
  const frame = document.getElementById("scopeFrame");
  const modalTitle = document.getElementById("scopeModalTitle");

  if (!modal || !frame || !modalTitle) return;

  modalTitle.textContent = title;
  frame.src = pageUrl;

  modal.classList.add("active");
  document.body.classList.add("scope-modal-open");
}

function closeScopeModal() {
  const modal = document.getElementById("scopeModal");
  const frame = document.getElementById("scopeFrame");

  if (!modal || !frame) return;

  modal.classList.remove("active");
  document.body.classList.remove("scope-modal-open");

  setTimeout(() => {
    frame.src = "";
  }, 250);
}

function printScopeContent() {
  const frame = document.getElementById("scopeFrame");

  if (!frame || !frame.contentWindow) return;

  frame.contentWindow.focus();
  frame.contentWindow.print();
}


/* =========================
   ABOUT HERO SLIDER
========================= */

let aboutSlideIndex = 0;
let aboutAutoSlide;

function getAboutSlides() {
  return document.querySelectorAll(".about-slide");
}

function getAboutDots() {
  return document.querySelectorAll(".about-dot");
}

function showAboutSlide(index) {
  const aboutSlides = getAboutSlides();
  const aboutDots = getAboutDots();

  if (!aboutSlides.length) return;

  if (index >= aboutSlides.length) {
    aboutSlideIndex = 0;
  } else if (index < 0) {
    aboutSlideIndex = aboutSlides.length - 1;
  } else {
    aboutSlideIndex = index;
  }

  aboutSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === aboutSlideIndex);
  });

  aboutDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === aboutSlideIndex);
  });
}

function goToAboutSlide(index) {
  showAboutSlide(index);
  resetAboutAutoSlide();
}

function startAboutAutoSlide() {
  if (!getAboutSlides().length) return;

  clearInterval(aboutAutoSlide);

  aboutAutoSlide = setInterval(() => {
    showAboutSlide(aboutSlideIndex + 1);
  }, 4200);
}

function resetAboutAutoSlide() {
  clearInterval(aboutAutoSlide);
  startAboutAutoSlide();
}


/* =========================
   RECENT ACTIVITIES / DISCUSSIONS
   FULL PHOTO + OVERLAY SLIDER
========================= */

const activityItems = [
  {
    image: "assets/Discussion1.png",
    alt: "Indonesia Energy Transition",
    type: "discussion",

    topicIcon: "fa-solid fa-bolt",
    topic: "Indonesia Energy Transition",

    title:
      "Indonesia's Renewable Energy Potential: From Fossil Fuel Dependence to a Sustainable Future",

    summary:
      "A discussion on Indonesia's transition from fossil fuel dependence to a cleaner and more sustainable energy future, highlighting current challenges, renewable energy potential, and the infrastructure needed to support the transition.",

    points: [
      "Energy demand, consumption trends, and the current fossil fuel-dominated energy mix.",
      "Opportunities for renewable energy development and the technical, economic, and policy challenges of the energy transition.",
      "How Indonesia's archipelagic geography influences energy infrastructure, accessibility, and renewable energy deployment."
    ],

    outcome: `
      <p>
        <strong>Discussion result:</strong>
        One interesting point raised during the discussion was Japan's energy transition
        experience. In the 1990s, Japan imported liquefied natural gas (LNG) from Indonesia
        as a cleaner alternative to coal.
      </p>

      <p>
        This highlights that, for Indonesia, LNG could serve as a practical transitional
        energy source while renewable energy capacity continues to expand. Compared with
        coal, LNG produces lower CO₂ emissions and significantly reduces SOₓ and NOₓ
        emissions, helping maintain reliable and affordable electricity during the transition.
      </p>

      <p>
        Japan's long-term strategy also demonstrates that LNG can play an important bridging
        role before renewable energy becomes the dominant source.
      </p>

      <p>
        For Indonesia, this approach is particularly relevant because 82% of electricity
        generation still comes from fossil fuels, despite the country's enormous renewable
        energy potential.
      </p>

      <p>
        The discussion emphasized that the main challenge is not the availability of renewable
        resources, but Indonesia's unique archipelagic geography. Renewable energy resources
        are often located far from major demand centers, making power transmission and grid
        integration technically challenging and costly.
      </p>

      <p>
        Therefore, accelerating Indonesia's energy transition will require not only greater
        investment in renewable energy but also stronger transmission networks, energy storage
        systems, and integrated grid infrastructure to ensure reliable and affordable
        electricity across the archipelago.
      </p>
    `
  },

  {
    image: "assets/training-ecoedu.jpeg",
    alt: "Training Support with EcoEdu.id",
    type: "activity",

    topicIcon: "fa-solid fa-person-chalkboard",
    topic: "Training Support with EcoEdu.id",

    title:
      "GIS and Hydraulic Modeling Training: QGIS, HEC-HMS, HEC-RAS 1D & 2D",

    summary:
      "Training support conducted together with EcoEdu.id to strengthen practical skills in watershed analysis, rainfall-runoff modeling, flood simulation, and integrated one-dimensional and two-dimensional hydraulic modeling.",

    points: [
      "QGIS training for spatial data preparation, watershed delineation, stream network analysis, terrain processing, and map visualization.",
      "HEC-HMS training for rainfall-runoff modeling, basin model setup, hydrologic parameter preparation, and discharge simulation.",
      "HEC-RAS 1D training for river geometry setup, cross-section preparation, boundary conditions, steady and unsteady flow simulation, and flood profile analysis.",
      "HEC-RAS 2D training for terrain-based computational mesh setup, 2D flow areas, boundary conditions, flood-depth mapping, velocity analysis, and inundation assessment.",
      "Integration of HEC-RAS 1D and 2D models to represent river-channel flow and floodplain inundation within a connected hydraulic system."
    ],

    outcome: `
      <p>
        <strong>Training result:</strong>
        The training introduced an integrated workflow beginning with spatial-data processing
        in QGIS, followed by watershed and hydrologic analysis in HEC-HMS, and hydraulic
        simulation using HEC-RAS.
      </p>

      <p>
        In the QGIS session, participants practiced preparing elevation and spatial datasets,
        delineating watersheds, extracting stream networks, organizing model inputs, and
        producing clear maps for hydrologic and hydraulic analysis.
      </p>

      <p>
        The HEC-HMS session focused on rainfall-runoff modeling, basin configuration,
        hydrologic parameterization, and the preparation of discharge hydrographs that can
        be used as hydraulic-model boundary conditions.
      </p>

      <p>
        The HEC-RAS sessions covered both 1D and 2D approaches. The 1D component focused on
        river cross-sections, flow boundaries, water-surface profiles, and river hydraulics,
        while the 2D component introduced computational meshes, terrain-based flood modeling,
        inundation depth, and velocity interpretation.
      </p>

      <p>
        The final part of the training demonstrated the integration of 1D and 2D domains,
        allowing the river channel and surrounding floodplain to be represented within one
        connected modeling framework. This workflow supports more comprehensive flood analysis
        and practical engineering assessment.
      </p>
    `
  }
];

let activityIndex = 0;
let activityAutoSlide;
let activityTouchStartX = null;


/* =========================
   RENDER ACTIVITY
========================= */

function renderActivity(index, immediate = false) {
  const slider = document.getElementById("activitySlider");
  const image = document.getElementById("activityImage");
  const topic = document.getElementById("activityTopic");
  const title = document.getElementById("activityTitle");
  const summary = document.getElementById("activitySummary");
  const readMore = document.getElementById("activityReadMore");
  const dots = document.querySelectorAll(".activity-dot");

  if (!slider || !activityItems.length) return;

  if (index >= activityItems.length) {
    activityIndex = 0;
  } else if (index < 0) {
    activityIndex = activityItems.length - 1;
  } else {
    activityIndex = index;
  }

  const item = activityItems[activityIndex];

  const applyItem = () => {

    if (image) {
      image.src = item.image;
      image.alt = item.alt;
    }

    if (topic) {
      topic.innerHTML =
        `<i class="${item.topicIcon}"></i> ${item.topic}`;
    }

    if (title) {
      title.textContent = item.title;
    }

    if (summary) {
      summary.textContent = item.summary;
    }

    if (readMore) {

      const label =
        item.type === "activity"
          ? "Read full activity"
          : "Read full discussion";

      readMore.innerHTML = `
        ${label}
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      `;
    }

    dots.forEach((dot, dotIndex) => {

      dot.classList.toggle(
        "active",
        dotIndex === activityIndex
      );

      dot.setAttribute(
        "aria-current",
        dotIndex === activityIndex ? "true" : "false"
      );

    });

    slider.classList.remove("is-fading");
  };


  if (immediate) {
    applyItem();
    return;
  }


  slider.classList.add("is-fading");

  window.setTimeout(
    applyItem,
    220
  );
}


/* =========================
   SLIDER CONTROLS
========================= */

function goToActivity(index) {
  renderActivity(index);
  resetActivityAutoSlide();
}


function previousActivity() {
  renderActivity(activityIndex - 1);
  resetActivityAutoSlide();
}


function nextActivity() {
  renderActivity(activityIndex + 1);
  resetActivityAutoSlide();
}


/* =========================
   AUTO SLIDE
========================= */

function startActivityAutoSlide() {

  const slider =
    document.getElementById("activitySlider");

  if (!slider || activityItems.length < 2)
    return;

  clearInterval(activityAutoSlide);

  activityAutoSlide =
    setInterval(() => {

      renderActivity(
        activityIndex + 1
      );

    }, 6500);
}


function stopActivityAutoSlide() {
  clearInterval(activityAutoSlide);
}


function resetActivityAutoSlide() {
  stopActivityAutoSlide();
  startActivityAutoSlide();
}


/* =========================
   SETUP ACTIVITY SLIDER
========================= */

function setupActivitySlider() {

  const slider =
    document.getElementById("activitySlider");

  const dotsWrap =
    document.getElementById("activityDots");


  if (
    !slider ||
    !dotsWrap ||
    !activityItems.length
  ) return;


  /* CREATE DOTS */

  dotsWrap.innerHTML =
    activityItems

      .map(
        (_, index) => `
          <button
            class="activity-dot${index === 0 ? " active" : ""}"
            type="button"
            onclick="goToActivity(${index})"
            aria-label="Show activity ${index + 1}"
            aria-current="${index === 0 ? "true" : "false"}"
          ></button>
        `
      )

      .join("");


  /* PAUSE ON HOVER */

  slider.addEventListener(
    "mouseenter",
    stopActivityAutoSlide
  );

  slider.addEventListener(
    "mouseleave",
    startActivityAutoSlide
  );


  /* PAUSE WHEN KEYBOARD FOCUS */

  slider.addEventListener(
    "focusin",
    stopActivityAutoSlide
  );

  slider.addEventListener(
    "focusout",
    startActivityAutoSlide
  );


  /* MOBILE SWIPE */

  slider.addEventListener(
    "touchstart",
    event => {

      activityTouchStartX =
        event.changedTouches[0].clientX;

    },
    {
      passive: true
    }
  );


  slider.addEventListener(
    "touchend",
    event => {

      if (
        activityTouchStartX === null
      ) return;


      const endX =
        event.changedTouches[0].clientX;


      const distance =
        endX -
        activityTouchStartX;


      if (
        Math.abs(distance) > 50
      ) {

        if (distance < 0) {

          nextActivity();

        } else {

          previousActivity();

        }

      }


      activityTouchStartX = null;

    },
    {
      passive: true
    }
  );


  renderActivity(
    0,
    true
  );

  startActivityAutoSlide();
}


/* =========================
   ACTIVITY MODAL
========================= */

function openActivityModal() {

  const item =
    activityItems[activityIndex];


  const modal =
    document.getElementById("activityModal");

  const modalTopic =
    document.getElementById("activityModalTopic");

  const modalTitle =
    document.getElementById("activityModalTitle");

  const modalSummary =
    document.getElementById("activityModalSummary");

  const modalPoints =
    document.getElementById("activityModalPoints");

  const modalContent =
    document.getElementById("activityModalContent");


  if (
    !modal ||
    !item
  ) return;


  if (modalTopic) {

    modalTopic.innerHTML =
      `<i class="${item.topicIcon}"></i> ${item.topic}`;

  }


  if (modalTitle) {

    modalTitle.textContent =
      item.title;

  }


  if (modalSummary) {

    modalSummary.textContent =
      item.summary;

  }


  if (modalPoints) {

    modalPoints.innerHTML =
      item.points

        .map(
          point =>
            `<li>${point}</li>`
        )

        .join("");

  }


  if (modalContent) {

    modalContent.innerHTML =
      item.outcome;

  }


  stopActivityAutoSlide();


  modal.classList.add(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );


  const closeButton =
    modal.querySelector(
      ".activity-modal-close"
    );


  closeButton?.focus();

}


/* =========================
   CLOSE ACTIVITY MODAL
========================= */

function closeActivityModal() {

  const modal =
    document.getElementById(
      "activityModal"
    );


  if (
    !modal ||
    !modal.classList.contains(
      "active"
    )
  ) return;


  modal.classList.remove(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );


  startActivityAutoSlide();


  document
    .getElementById(
      "activityReadMore"
    )
    ?.focus();

}


/* =========================
   PAGE INITIALIZATION
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* ABOUT HERO */

    if (
      getAboutSlides().length
    ) {

      showAboutSlide(0);

      startAboutAutoSlide();

    }


    /* ACTIVITY */

    setupActivitySlider();

  }
);


/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
  "keydown",
  event => {

    /* ESC CLOSE MODALS */

    if (
      event.key === "Escape"
    ) {

      closeScopeModal();

      closeActivityModal();

    }


    /* ARROW NAVIGATION */

    if (
      document.activeElement &&
      document
        .getElementById(
          "activitySlider"
        )
        ?.contains(
          document.activeElement
        )
    ) {

      if (
        event.key === "ArrowLeft"
      ) {

        previousActivity();

      }


      if (
        event.key === "ArrowRight"
      ) {

        nextActivity();

      }

    }

  }
);
