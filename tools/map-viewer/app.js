/**
 * Journey preview — walk sample maps in suggested travel order.
 * Style target: SaGa Frontier 2 sketch + watercolor screens.
 * Route: Havenbrook → Whisperwood → Frostpass → Ironveil → Westmarch → Millhaven
 * Side visit: Emberhall Forge (from Havenbrook door)
 */

const MAPS = {
  "town-havenbrook": {
    id: "town-havenbrook",
    name: "Havenbrook",
    type: "town",
    description:
      "A stone courtyard garden with a curved cobbled walk, tiered flower bed, and stairs up to an archway.",
    preview: "../../assets/maps/samples/town-havenbrook/preview.jpg",
    mood: "quiet courtyard, soft afternoon, storybook town",
    spawn: { x: 0.52, y: 0.72 },
    walkableRegions: [
      {
        polygon: [
          [0.3, 0.7],
          [0.62, 0.58],
          [0.72, 0.48],
          [0.78, 0.58],
          [0.58, 0.78],
          [0.28, 0.82],
        ],
      },
      {
        polygon: [
          [0.48, 0.38],
          [0.68, 0.34],
          [0.72, 0.48],
          [0.52, 0.52],
        ],
      },
    ],
    hotspots: [
      { id: "garden", label: "Garden bed", type: "examine", x: 0.28, y: 0.55 },
      {
        id: "forge-door",
        label: "Emberhall Forge",
        type: "door",
        x: 0.78,
        y: 0.62,
        target: "forge-emberhall",
      },
      {
        id: "exit-whisperwood",
        label: "Road to Whisperwood",
        type: "exit",
        x: 0.58,
        y: 0.32,
        target: "forest-whisperwood",
      },
    ],
  },
  "forge-emberhall": {
    id: "forge-emberhall",
    name: "Emberhall Forge",
    type: "interior",
    description:
      "A cut-away blacksmith workshop — glowing hearth, anvil, hanging tools. Classic SF2 shop-interior staging.",
    preview: "../../assets/maps/samples/forge-emberhall/preview.jpg",
    mood: "warm forge glow, cluttered craft, cut-away diorama",
    spawn: { x: 0.42, y: 0.72 },
    walkableRegions: [
      {
        polygon: [
          [0.18, 0.55],
          [0.78, 0.48],
          [0.88, 0.82],
          [0.12, 0.88],
        ],
      },
    ],
    hotspots: [
      { id: "anvil", label: "Anvil", type: "examine", x: 0.48, y: 0.68 },
      { id: "hearth", label: "Forge hearth", type: "examine", x: 0.52, y: 0.42 },
      {
        id: "exit-havenbrook",
        label: "Back to Havenbrook",
        type: "exit",
        x: 0.18,
        y: 0.78,
        target: "town-havenbrook",
      },
    ],
  },
  "forest-whisperwood": {
    id: "forest-whisperwood",
    name: "Whisperwood",
    type: "field",
    description:
      "A rocky canyon path with mossy ledges, a fallen log, and bright mushrooms.",
    preview: "../../assets/maps/samples/forest-whisperwood/preview.jpg",
    mood: "enclosed path, whimsical nature, soft washes",
    spawn: { x: 0.48, y: 0.78 },
    walkableRegions: [
      {
        polygon: [
          [0.28, 0.82],
          [0.55, 0.7],
          [0.62, 0.48],
          [0.58, 0.28],
          [0.7, 0.28],
          [0.72, 0.5],
          [0.68, 0.74],
          [0.42, 0.9],
        ],
      },
    ],
    hotspots: [
      {
        id: "exit-havenbrook",
        label: "To Havenbrook",
        type: "exit",
        x: 0.38,
        y: 0.88,
        target: "town-havenbrook",
      },
      {
        id: "exit-frostpass",
        label: "To Frostpass",
        type: "exit",
        x: 0.62,
        y: 0.24,
        target: "mountain-frostpass",
      },
      {
        id: "mushrooms",
        label: "Spotted mushrooms",
        type: "examine",
        x: 0.42,
        y: 0.55,
      },
    ],
  },
  "mountain-frostpass": {
    id: "mountain-frostpass",
    name: "Frostpass",
    type: "field",
    description:
      "A sketched stone trail climbing between cool rock walls, past a small shrine.",
    preview: "../../assets/maps/samples/mountain-frostpass/preview.jpg",
    mood: "thin air, soft mist, quiet climb",
    spawn: { x: 0.35, y: 0.75 },
    walkableRegions: [
      {
        polygon: [
          [0.18, 0.78],
          [0.4, 0.62],
          [0.55, 0.48],
          [0.72, 0.36],
          [0.82, 0.42],
          [0.6, 0.58],
          [0.42, 0.74],
          [0.22, 0.88],
        ],
      },
    ],
    hotspots: [
      {
        id: "exit-whisperwood",
        label: "To Whisperwood",
        type: "exit",
        x: 0.22,
        y: 0.84,
        target: "forest-whisperwood",
      },
      {
        id: "exit-ironveil",
        label: "Toward Ironveil",
        type: "exit",
        x: 0.78,
        y: 0.38,
        target: "castle-ironveil",
      },
      { id: "shrine", label: "Trail shrine", type: "examine", x: 0.48, y: 0.55 },
    ],
  },
  "castle-ironveil": {
    id: "castle-ironveil",
    name: "Ironveil Castle",
    type: "castle",
    description:
      "A stone courtyard with wide stairs and an arched gate — courtly hub after the mountain climb.",
    preview: "../../assets/maps/samples/castle-ironveil/preview.jpg",
    mood: "austere stone, soft wash, court quiet",
    spawn: { x: 0.48, y: 0.78 },
    walkableRegions: [
      {
        polygon: [
          [0.22, 0.55],
          [0.75, 0.48],
          [0.82, 0.85],
          [0.18, 0.88],
        ],
      },
    ],
    hotspots: [
      {
        id: "exit-westmarch",
        label: "Main gate → Westmarch",
        type: "exit",
        x: 0.55,
        y: 0.32,
        target: "overworld-westmarch",
      },
      {
        id: "exit-frostpass",
        label: "Back to Frostpass",
        type: "exit",
        x: 0.22,
        y: 0.82,
        target: "mountain-frostpass",
      },
      { id: "keep", label: "Keep entrance", type: "door", x: 0.7, y: 0.45 },
    ],
  },
  "overworld-westmarch": {
    id: "overworld-westmarch",
    name: "Westmarch",
    type: "overworld",
    description:
      "Hand-painted region atlas — towns, forests, rivers, and the castle linked by sketched roads.",
    preview: "../../assets/maps/samples/overworld-westmarch/preview.jpg",
    mood: "storybook atlas, soft parchment",
    spawn: { x: 0.55, y: 0.35 },
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
        x: 0.55,
        y: 0.48,
        target: "forest-whisperwood",
      },
      {
        id: "node-ironveil",
        label: "Ironveil Castle",
        type: "location",
        x: 0.58,
        y: 0.3,
        target: "castle-ironveil",
      },
      {
        id: "node-frostpass",
        label: "Frostpass",
        type: "location",
        x: 0.68,
        y: 0.22,
        target: "mountain-frostpass",
      },
      {
        id: "node-millhaven",
        label: "Millhaven",
        type: "location",
        x: 0.3,
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
      "A riverside inn and water mill — soft timber sketch lines, wheel, dock, and willow washes.",
    preview: "../../assets/maps/samples/riverside-millhaven/preview.jpg",
    mood: "golden hour, quiet water, rest",
    spawn: { x: 0.4, y: 0.7 },
    walkableRegions: [
      {
        polygon: [
          [0.2, 0.58],
          [0.55, 0.55],
          [0.62, 0.78],
          [0.18, 0.82],
        ],
      },
    ],
    hotspots: [
      { id: "inn", label: "Millhaven Inn", type: "door", x: 0.42, y: 0.5 },
      { id: "mill", label: "Water mill", type: "examine", x: 0.62, y: 0.48 },
      {
        id: "exit-havenbrook",
        label: "Road to Havenbrook",
        type: "exit",
        x: 0.18,
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

const JOURNEY = [
  {
    id: "town-havenbrook",
    blurb: "Climb the courtyard stairs — or peek into the forge.",
    nextTarget: "forest-whisperwood",
  },
  {
    id: "forest-whisperwood",
    blurb: "Follow the canyon path upward past the mushrooms.",
    nextTarget: "mountain-frostpass",
  },
  {
    id: "mountain-frostpass",
    blurb: "Keep climbing toward the castle gate.",
    nextTarget: "castle-ironveil",
  },
  {
    id: "castle-ironveil",
    blurb: "Pass the arch onto the region map.",
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

let journeyIndex = 0;
let currentMapId = JOURNEY[0].id;
let traveling = false;
let toastTimer = null;

function journeyStep() {
  return JOURNEY[journeyIndex];
}

function currentMap() {
  return MAPS[currentMapId];
}

function renderRoute() {
  routeEl.innerHTML = "";
  JOURNEY.forEach((step, i) => {
    const map = MAPS[step.id];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "route-item";
    if (i === journeyIndex && currentMapId === step.id) btn.classList.add("is-current");
    if (i < journeyIndex) btn.classList.add("is-done");
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
  if (!animate) party.style.transition = "none";
  else party.style.transition = "";
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
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * w, pts[i][1] * h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}

function suggestedTarget() {
  // On the journey step map, suggest next; on side visits, suggest return/exit home
  if (currentMapId === journeyStep().id) return journeyStep().nextTarget;
  const home = currentMap().hotspots.find((h) => h.type === "exit" && h.target);
  return home?.target || journeyStep().id;
}

function renderExits(map) {
  exitButtons.innerHTML = "";
  const suggested = suggestedTarget();
  const travelables = map.hotspots.filter(
    (h) => h.target && (h.type === "exit" || h.type === "location" || h.type === "door")
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
  currentMapId = mapId;

  const onRoute = JOURNEY.some((s) => s.id === mapId);
  const stepNo = onRoute
    ? JOURNEY.findIndex((s) => s.id === mapId) + 1
    : journeyIndex + 1;

  placeName.textContent = map.name;
  placeType.textContent = map.type;
  placeDesc.textContent = map.description;
  placeMood.textContent = map.mood;
  stepLabel.textContent = onRoute
    ? `${stepNo} / ${JOURNEY.length}`
    : `Side visit · ${map.name}`;
  hintEl.textContent = onRoute
    ? `${journeyStep().blurb} Click the glowing exit, or Continue.`
    : "Side location — use the exit to return, or Continue on the main route.";

  btnPrev.disabled = journeyIndex === 0 && onRoute;
  btnNext.textContent =
    journeyIndex === JOURNEY.length - 1 && onRoute ? "Start over →" : "Continue →";

  const onLoad = () => {
    drawOverlay(map);
    renderExits(map);
    const spawn = map.spawn || { x: 0.5, y: 0.7 };
    placeParty(spawn.x, spawn.y, false);
    if (fromHotspot) {
      const suggested = map.hotspots.find((h) => h.target === suggestedTarget());
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
  if (mapImage.getAttribute("src") === map.preview && mapImage.complete) onLoad();
  else mapImage.src = map.preview;

  renderRoute();
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

  const routeIdx = JOURNEY.findIndex((s) => s.id === targetId);
  if (routeIdx >= 0) journeyIndex = routeIdx;

  viewport.classList.remove("is-traveling");
  showPlace(targetId, { fromHotspot: hotspot });
  traveling = false;
}

function goToStep(index) {
  if (traveling) return;
  journeyIndex = Math.max(0, Math.min(JOURNEY.length - 1, index));
  showPlace(journeyStep().id);
}

async function continueJourney() {
  if (traveling) return;
  // If on a side visit, return to current journey step first
  if (currentMapId !== journeyStep().id) {
    await travelTo(journeyStep().id);
    return;
  }
  const step = journeyStep();
  const map = currentMap();
  const suggested = map.hotspots.find((h) => h.target === step.nextTarget);
  if (suggested) await travelTo(step.nextTarget, suggested);
  else {
    journeyIndex = Math.min(journeyIndex + 1, JOURNEY.length - 1);
    showPlace(journeyStep().id);
  }
}

btnPrev.addEventListener("click", () => {
  if (currentMapId !== journeyStep().id) {
    showPlace(journeyStep().id);
    return;
  }
  if (journeyIndex > 0) goToStep(journeyIndex - 1);
});

btnNext.addEventListener("click", () => continueJourney());

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    continueJourney();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (journeyIndex > 0) goToStep(journeyIndex - 1);
  }
});

window.addEventListener("resize", () => {
  drawOverlay(currentMap());
  renderExits(currentMap());
});

showPlace(JOURNEY[0].id);
