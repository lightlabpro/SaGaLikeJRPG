const MAPS = [
  {
    id: "town-havenbrook",
    name: "Havenbrook",
    type: "town",
    description:
      "A quiet market village built around a central well. Timber-framed shops ring a cobbled square.",
    preview: "../../assets/maps/samples/town-havenbrook/preview.jpg",
    thumbnail: "../../assets/maps/samples/town-havenbrook/thumbnail.jpg",
    mood: "warm afternoon, lived-in, welcoming",
    musicCue: "town-day",
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
      { id: "exit", label: "Road to Whisperwood", type: "exit", x: 0.5, y: 0.3 },
    ],
  },
  {
    id: "forest-whisperwood",
    name: "Whisperwood",
    type: "field",
    description:
      "A winding forest path under a soft canopy. A creek and footbridge break the green hush.",
    preview: "../../assets/maps/samples/forest-whisperwood/preview.jpg",
    thumbnail: "../../assets/maps/samples/forest-whisperwood/thumbnail.jpg",
    mood: "hushed, dappled light, soft mist",
    musicCue: "field-forest",
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
      { id: "west", label: "To Havenbrook", type: "exit", x: 0.08, y: 0.72 },
      { id: "east", label: "To Frostpass", type: "exit", x: 0.92, y: 0.52 },
      { id: "creek", label: "Shallow creek", type: "examine", x: 0.55, y: 0.58 },
    ],
  },
  {
    id: "castle-ironveil",
    name: "Ironveil Castle",
    type: "castle",
    description:
      "A stone courtyard behind ironwood gates. Training grounds and archways into the keep.",
    preview: "../../assets/maps/samples/castle-ironveil/preview.jpg",
    thumbnail: "../../assets/maps/samples/castle-ironveil/thumbnail.jpg",
    mood: "austere stone, soft afternoon gold",
    musicCue: "castle-court",
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
      { id: "gate", label: "Main gate", type: "exit", x: 0.5, y: 0.38 },
      { id: "keep", label: "Keep entrance", type: "door", x: 0.72, y: 0.48 },
      { id: "train", label: "Training yard", type: "examine", x: 0.28, y: 0.58 },
    ],
  },
  {
    id: "mountain-frostpass",
    name: "Frostpass",
    type: "field",
    description:
      "A narrow alpine pass cut between cold stone cliffs. A weathered shrine marks the trail.",
    preview: "../../assets/maps/samples/mountain-frostpass/preview.jpg",
    thumbnail: "../../assets/maps/samples/mountain-frostpass/thumbnail.jpg",
    mood: "cold wind, thin air, quiet grandeur",
    musicCue: "field-mountain",
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
      { id: "south", label: "To Whisperwood", type: "exit", x: 0.12, y: 0.76 },
      { id: "north", label: "Toward Ironveil", type: "exit", x: 0.88, y: 0.5 },
      { id: "shrine", label: "Trail shrine", type: "examine", x: 0.42, y: 0.58 },
    ],
  },
  {
    id: "overworld-westmarch",
    name: "Westmarch",
    type: "overworld",
    description:
      "Regional atlas linking towns, forests, rivers, and the castle by painted roads.",
    preview: "../../assets/maps/samples/overworld-westmarch/preview.jpg",
    thumbnail: "../../assets/maps/samples/overworld-westmarch/thumbnail.jpg",
    mood: "storybook atlas, soft parchment",
    musicCue: "overworld-theme",
    spawn: { x: 0.42, y: 0.58 },
    walkableRegions: [],
    hotspots: [
      { id: "havenbrook", label: "Havenbrook", type: "location", x: 0.4, y: 0.58 },
      { id: "whisperwood", label: "Whisperwood", type: "location", x: 0.58, y: 0.48 },
      { id: "ironveil", label: "Ironveil Castle", type: "location", x: 0.62, y: 0.28 },
      { id: "frostpass", label: "Frostpass", type: "location", x: 0.7, y: 0.22 },
      { id: "millhaven", label: "Millhaven", type: "location", x: 0.28, y: 0.62 },
    ],
  },
  {
    id: "riverside-millhaven",
    name: "Millhaven",
    type: "town",
    description:
      "A riverside inn and mill at dusk. Soft lantern light, a water wheel, and a docked boat.",
    preview: "../../assets/maps/samples/riverside-millhaven/preview.jpg",
    thumbnail: "../../assets/maps/samples/riverside-millhaven/thumbnail.jpg",
    mood: "golden hour, quiet water, rest",
    musicCue: "inn-evening",
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
      { id: "road", label: "Road to Havenbrook", type: "exit", x: 0.12, y: 0.7 },
    ],
  },
];

const gallery = document.getElementById("gallery");
const dialog = document.getElementById("viewer");
const viewerImage = document.getElementById("viewer-image");
const viewerTitle = document.getElementById("viewer-title");
const viewerDesc = document.getElementById("viewer-desc");
const viewerMeta = document.getElementById("viewer-meta");
const viewerHotspots = document.getElementById("viewer-hotspots");
const overlay = document.getElementById("overlay");
const showRegions = document.getElementById("show-regions");

let activeMap = null;
let activeFilter = "all";

function renderGallery() {
  const maps = MAPS.filter((m) => activeFilter === "all" || m.type === activeFilter);
  gallery.innerHTML = "";
  for (const map of maps) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card";
    btn.innerHTML = `
      <span class="card-frame">
        <span class="badge">${map.type}</span>
        <img src="${map.thumbnail}" alt="${map.name}" loading="lazy" />
      </span>
      <h2>${map.name}</h2>
      <p>${map.description}</p>
    `;
    btn.addEventListener("click", () => openMap(map));
    gallery.appendChild(btn);
  }
}

function openMap(map) {
  activeMap = map;
  viewerImage.src = map.preview;
  viewerImage.alt = `${map.name} handpainted map`;
  viewerTitle.textContent = map.name;
  viewerDesc.textContent = map.description;
  viewerMeta.innerHTML = `
    <li><strong>Type</strong> · ${map.type}</li>
    <li><strong>Mood</strong> · ${map.mood}</li>
    <li><strong>Music</strong> · ${map.musicCue}</li>
  `;
  viewerHotspots.innerHTML = map.hotspots
    .map((h) => `<span class="hotspot-chip">${h.type}: ${h.label}</span>`)
    .join("");
  showRegions.checked = false;
  overlay.classList.remove("is-visible");
  dialog.showModal();
  viewerImage.onload = () => drawOverlay();
}

function drawOverlay() {
  if (!activeMap) return;
  const img = viewerImage;
  const w = img.clientWidth;
  const h = img.clientHeight;
  overlay.width = w;
  overlay.height = h;
  overlay.style.width = `${w}px`;
  overlay.style.height = `${h}px`;
  const ctx = overlay.getContext("2d");
  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = "rgba(95, 115, 88, 0.28)";
  ctx.strokeStyle = "rgba(95, 115, 88, 0.85)";
  ctx.lineWidth = 2;
  for (const region of activeMap.walkableRegions) {
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

  for (const hs of activeMap.hotspots) {
    const x = hs.x * w;
    const y = hs.y * h;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(122, 78, 50, 0.85)";
    ctx.fill();
    ctx.strokeStyle = "#f4ebe0";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  if (activeMap.spawn) {
    const x = activeMap.spawn.x * w;
    const y = activeMap.spawn.y * h;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(142, 168, 176, 0.95)";
    ctx.fill();
    ctx.strokeStyle = "#2c261e";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeFilter = btn.dataset.filter;
    renderGallery();
  });
});

showRegions.addEventListener("change", () => {
  overlay.classList.toggle("is-visible", showRegions.checked);
  if (showRegions.checked) drawOverlay();
});

window.addEventListener("resize", () => {
  if (dialog.open && showRegions.checked) drawOverlay();
});

renderGallery();
