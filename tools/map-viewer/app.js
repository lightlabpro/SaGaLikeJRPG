/**
 * Journey preview — walk the sample maps in suggested travel order.
 * Route: Havenbrook → Whisperwood → Frostpass → Ironveil → Westmarch → Millhaven
 */

const MAPS = {
  "town-havenbrook": {
    id: "town-havenbrook",
    name: "Havenbrook",
    type: "town",
    description:
      "A quiet market village built around a central well. Timber-framed shops ring a cobbled square.",
    preview: "../../assets/maps/samples/town-havenbrook/preview.jpg",
    mood: "warm afternoon, lived-in, welcoming",
    spawn: { x: 0.48, y: 0.72 },
    walkableRegions: [
      {
        polygon: [
          [0.28, 0.55],
          [0.72, 0.55],
          [0.78, 0.82],
          [0.22, 0.82],
        ],
      },
      {
        polygon: [
          [0.42, 0.35],
          [0.58, 0.35],
          [0.58, 0.55],
          [0.42, 0.55],
        ],
      },
    ],
    hotspots: [
      { id: "inn", label: "Wayfarer's Inn", type: "door", x: 0.22, y: 0.48 },
      { id: "shop", label: "Blade & Bolt", type: "shop", x: 0.72, y: 0.5 },
      { id: "well", label: "Village well", type: "examine", x: 0.5, y: 0.62 },
      {
        id: "exit-whisperwood",
        label: "Road to Whisperwood",
        type: "exit",
        x: 0.5,
        y: 0.3,
        target: "forest-whisperwood",
      },
    ],
  },
  "forest-whisperwood": {
    id: "forest-whisperwood",
    name: "Whisperwood",
    type: "field",
    description:
      "A winding forest path under a soft canopy. A creek and footbridge break the green hush.",
    preview: "../../assets/maps/samples/forest-whisperwood/preview.jpg",
    mood: "hushed, dappled light, soft mist",
    spawn: { x: 0.18, y: 0.7 },
    walkableRegions: [
      {
        polygon: [
          [0.08, 0.68],
          [0.35, 0.62],
          [0.55, 0.58],
          [0.78, 0.52],
          [0.92, 0.48],
          [0.92, 0.62],
          [0.75, 0.68],
          [0.5, 0.74],
          [0.3, 0.78],
          [0.08, 0.8],
        ],
      },
    ],
    hotspots: [
      {
        id: "exit-havenbrook",
        label: "To Havenbrook",
        type: "exit",
        x: 0.08,
        y: 0.72,
        target: "town-havenbrook",
      },
      {
        id: "exit-frostpass",
        label: "To Frostpass",
        type: "exit",
        x: 0.92,
        y: 0.52,
        target: "mountain-frostpass",
      },
      { id: "creek", label: "Shallow creek", type: "examine", x: 0.55, y: 0.58 },
    ],
  },
  "mountain-frostpass": {
    id: "mountain-frostpass",
    name: "Frostpass",
    type: "field",
    description:
      "A narrow alpine pass cut between cold stone cliffs. A weathered shrine marks the trail.",
    preview: "../../assets/maps/samples/mountain-frostpass/preview.jpg",
    mood: "cold wind, thin air, quiet grandeur",
    spawn: { x: 0.22, y: 0.72 },
    walkableRegions: [
      {
        polygon: [
          [0.1, 0.7],
          [0.35, 0.62],
          [0.55, 0.58],
          [0.75, 0.5],
          [0.9, 0.46],
          [0.9, 0.58],
          [0.7, 0.64],
          [0.5, 0.72],
          [0.3, 0.8],
          [0.1, 0.82],
        ],
      },
    ],
    hotspots: [
      {
        id: "exit-whisperwood",
        label: "To Whisperwood",
        type: "exit",
        x: 0.12,
        y: 0.76,
        target: "forest-whisperwood",
      },
      {
        id: "exit-ironveil",
        label: "Toward Ironveil",
        type: "exit",
        x: 0.88,
        y: 0.5,
        target: "castle-ironveil",
      },
      { id: "shrine", label: "Trail shrine", type: "examine", x: 0.42, y: 0.58 },
    ],
  },
  "castle-ironveil": {
    id: "castle-ironveil",
    name: "Ironveil Castle",
    type: "castle",
    description:
      "A stone courtyard behind ironwood gates. Training grounds and archways into the keep.",
    preview: "../../assets/maps/samples/castle-ironveil/preview.jpg",
    mood: "austere stone, soft afternoon gold",
    spawn: { x: 0.5, y: 0.78 },
    walkableRegions: [
      {
        polygon: [
          [0.22, 0.45],
          [0.78, 0.45],
          [0.82, 0.85],
          [0.18, 0.85],
        ],
      },
    ],
    hotspots: [
      {
        id: "exit-westmarch",
        label: "Main gate → Westmarch",
        type: "exit",
        x: 0.5,
        y: 0.38,
        target: "overworld-westmarch",
      },
      {
        id: "exit-frostpass",
        label: "Back to Frostpass",
        type: "exit",
        x: 0.2,
        y: 0.82,
        target: "mountain-frostpass",
      },
      { id: "keep", label: "Keep entrance", type: "door", x: 0.72, y: 0.48 },
      { id: "train", label: "Training yard", type: "examine", x: 0.28, y: 0.58 },
    ],
  },
  "overworld-westmarch": {
    id: "overworld-westmarch",
    name: "Westmarch",
    type: "overworld",
    description:
      "Regional atlas linking towns, forests, rivers, and the castle by painted roads.",
    preview: "../../assets/maps/samples/overworld-westmarch/preview.jpg",
    mood: "storybook atlas, soft parchment",
    spawn: { x: 0.62, y: 0.28 },
    walkableRegions: [],
    hotspots: [
      {
        id: "node-havenbrook",
        label: "Havenbrook",
        type: "location",
        x: 0.4,
        y: 0.58,
        target: "town-havenbrook",
      },
      {
        id: "node-whisperwood",
        label: "Whisperwood",
        type: "location",
        x: 0.58,
        y: 0.48,
        target: "forest-whisperwood",
      },
      {
        id: "node-ironveil",
        label: "Ironveil Castle",
        type: "location",
        x: 0.62,
        y: 0.28,
        target: "castle-ironveil",
      },
      {
        id: "node-frostpass",
        label: "Frostpass",
        type: "location",
        x: 0.7,
        y: 0.22,
        target: "mountain-frostpass",
      },
      {
        id: "node-millhaven",
        label: "Millhaven",
        type: "location",
        x: 0.28,
        y: 0.62,
        target: "riverside-millhaven",
      },
    ],
  },
  "riverside-millhaven": {
    id: "riverside-millhaven",
    name: "Millhaven",
    type: "town",
    description:
      "A riverside inn and mill at dusk. Soft lantern light, a water wheel, and a docked boat.",
    preview: "../../assets/maps/samples/riverside-millhaven/preview.jpg",
    mood: "golden hour, quiet water, rest",
    spawn: { x: 0.35, y: 0.7 },
    walkableRegions: [
      {
        polygon: [
          [0.18, 0.58],
          [0.55, 0.55],
          [0.62, 0.78],
          [0.15, 0.82],
        ],
      },
      {
        polygon: [
          [0.55, 0.62],
          [0.78, 0.6],
          [0.78, 0.72],
          [0.55, 0.74],
        ],
      },
    ],
    hotspots: [
      { id: "inn", label: "Millhaven Inn", type: "door", x: 0.32, y: 0.52 },
      { id: "mill", label: "Water mill", type: "examine", x: 0.68, y: 0.48 },
      { id: "boat", label: "Moored boat", type: "examine", x: 0.72, y: 0.68 },
      {
        id: "exit-havenbrook",
        label: "Road to Havenbrook",
        type: "exit",
        x: 0.12,
        y: 0.7,
        target: "town-havenbrook",
      },
      {
        id: "exit-westmarch",
        label: "Open Westmarch map",
        type: "exit",
        x: 0.5,
        y: 0.88,
        target: "overworld-westmarch",
      },
    ],
  },
};

/** Suggested tour order — the path we recommend walking first. */
const JOURNEY = [
  {
    id: "town-havenbrook",
    blurb: "Leave the square by the north road.",
    nextTarget: "forest-whisperwood",
  },
  {
    id: "forest-whisperwood",
    blurb: "Follow the path east across the creek.",
    nextTarget: "mountain-frostpass",
  },
  {
    id: "mountain-frostpass",
    blurb: "Climb north toward the castle.",
    nextTarget: "castle-ironveil",
  },
  {
    id: "castle-ironveil",
    blurb: "Pass the main gate onto the region map.",
    nextTarget: "overworld-westmarch",
  },
  {
    id: "overworld-westmarch",
    blurb: "Travel the painted road to Millhaven.",
    nextTarget: "riverside-millhaven",
  },
  {
    id: "riverside-millhaven",
    blurb: "Rest by the water — or return to Havenbrook.",
    nextTarget: "town-havenbrook",
  },
];

const routeEl = document.getElementById("route");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const hintEl = document.getElementById("hint");
const stepLabel = document.getElementById("step-label");
const placeName = document.getElementById("place-name");
const placeType = document.getElementById("place-type");
const placeDesc = document.getElementById("place-desc");
const placeMood = document.getElementById("place-mood");
const mapImage = document.getElementById("map-image");
const overlay = document.getElementById("overlay");
const exitButtons = document.getElementById("exit-buttons");
const party = document.getElementById("party");
const viewport = document.getElementById("viewport");
const toast = document.getElementById("toast");

let stepIndex = 0;
let traveling = false;
let toastTimer = null;

function currentStep() {
  return JOURNEY[stepIndex];
}

function currentMap() {
  return MAPS[currentStep().id];
}

function renderRoute() {
  routeEl.innerHTML = "";
  JOURNEY.forEach((step, i) => {
    const map = MAPS[step.id];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "route-item";
    if (i === stepIndex) btn.classList.add("is-current");
    if (i < stepIndex) btn.classList.add("is-done");
    btn.innerHTML = `
      <span class="route-index">${i + 1}</span>
      <span class="route-copy">
        <strong>${map.name}</strong>
        <span>${map.type} · ${step.blurb}</span>
      </span>
    `;
    btn.addEventListener("click", () => goToStep(i));
    routeEl.appendChild(btn);
  });
}

function showToast(message) {
  toast.hidden = false;
  toast.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

function placeParty(x, y, animate = false) {
  if (!animate) {
    party.style.transition = "none";
  } else {
    party.style.transition = "";
  }
  party.style.left = `${x * 100}%`;
  party.style.top = `${y * 100}%`;
  if (!animate) {
    void party.offsetWidth;
    party.style.transition = "";
  }
}

function drawOverlay(map) {
  const w = overlay.clientWidth || viewport.clientWidth;
  const h = overlay.clientHeight || viewport.clientHeight;
  overlay.width = w;
  overlay.height = h;
  const ctx = overlay.getContext("2d");
  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = "rgba(95, 115, 88, 0.18)";
  ctx.strokeStyle = "rgba(95, 115, 88, 0.55)";
  ctx.lineWidth = 2;
  for (const region of map.walkableRegions || []) {
    const pts = region.polygon;
    if (!pts?.length) continue;
    ctx.beginPath();
    ctx.moveTo(pts[0][0] * w, pts[0][1] * h);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(pts[i][0] * w, pts[i][1] * h);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

function renderExits(map) {
  exitButtons.innerHTML = "";
  const suggested = currentStep().nextTarget;
  const travelables = map.hotspots.filter(
    (h) => h.target && (h.type === "exit" || h.type === "location")
  );

  for (const hs of travelables) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "exit-btn";
    btn.style.left = `${hs.x * 100}%`;
    btn.style.top = `${hs.y * 100}%`;
    btn.dataset.suggested = String(hs.target === suggested);
    btn.innerHTML = `<span class="sr">${hs.label}</span><span class="exit-label">${hs.label}</span>`;
    btn.title = hs.label;
    btn.addEventListener("click", () => travelTo(hs.target, hs));
    exitButtons.appendChild(btn);
  }
}

function showPlace(mapId, { fromHotspot = null } = {}) {
  const map = MAPS[mapId];
  if (!map) return;

  placeName.textContent = map.name;
  placeType.textContent = map.type;
  placeDesc.textContent = map.description;
  placeMood.textContent = map.mood;
  stepLabel.textContent = `${stepIndex + 1} / ${JOURNEY.length}`;
  hintEl.textContent = `${currentStep().blurb} Click the glowing exit, or Continue.`;

  btnPrev.disabled = stepIndex === 0;
  btnNext.textContent =
    stepIndex === JOURNEY.length - 1 ? "Start over →" : "Continue →";

  const onLoad = () => {
    drawOverlay(map);
    renderExits(map);
    const spawn = map.spawn || { x: 0.5, y: 0.7 };
    placeParty(spawn.x, spawn.y, false);
    if (fromHotspot) {
      const suggested = map.hotspots.find((h) => h.target === currentStep().nextTarget);
      if (suggested) {
        requestAnimationFrame(() =>
          placeParty(
            spawn.x + (suggested.x - spawn.x) * 0.15,
            spawn.y + (suggested.y - spawn.y) * 0.15,
            true
          )
        );
      }
    }
  };

  mapImage.onload = onLoad;
  mapImage.alt = `${map.name} handpainted map`;
  if (mapImage.getAttribute("src") === map.preview && mapImage.complete) {
    onLoad();
  } else {
    mapImage.src = map.preview;
  }

  renderRoute();
}

function findStepIndexForMap(mapId) {
  const idx = JOURNEY.findIndex((s) => s.id === mapId);
  return idx >= 0 ? idx : stepIndex;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function travelTo(targetId, hotspot = null) {
  if (traveling || !targetId || !MAPS[targetId]) return;
  traveling = true;
  viewport.classList.add("is-traveling");

  if (hotspot) {
    placeParty(hotspot.x, hotspot.y, true);
    showToast(`Traveling to ${MAPS[targetId].name}…`);
    await wait(720);
  } else {
    showToast(`Continuing to ${MAPS[targetId].name}…`);
    await wait(420);
  }

  stepIndex = findStepIndexForMap(targetId);
  viewport.classList.remove("is-traveling");
  showPlace(targetId, { fromHotspot: hotspot });
  traveling = false;
}

function goToStep(index) {
  if (traveling) return;
  stepIndex = Math.max(0, Math.min(JOURNEY.length - 1, index));
  showPlace(currentStep().id);
}

async function continueJourney() {
  if (traveling) return;
  const step = currentStep();
  const map = currentMap();
  const suggested = map.hotspots.find((h) => h.target === step.nextTarget);

  if (suggested) {
    await travelTo(step.nextTarget, suggested);
    return;
  }

  stepIndex = Math.min(stepIndex + 1, JOURNEY.length - 1);
  showPlace(currentStep().id);
}

btnPrev.addEventListener("click", () => {
  if (stepIndex > 0) goToStep(stepIndex - 1);
});

btnNext.addEventListener("click", () => {
  continueJourney();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    continueJourney();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (stepIndex > 0) goToStep(stepIndex - 1);
  }
});

window.addEventListener("resize", () => {
  drawOverlay(currentMap());
  renderExits(currentMap());
});

showPlace(JOURNEY[0].id);
