# World Map Design — **The Coil**

> **Status:** Draft for approval (pair with `docs/story.md`).  
> **Art direction:** SaGa Frontier 2 watercolor *technique* + FF7 steampunk/cyberpunk *subject*.  
> **Do not** start individual area screens until this map and the story bible are approved.

---

## World in one paragraph

**The Coil** is a ring-continent of megacity wards, scrap badlands, and sky-docks wrapped around **Aetherwell** — a planetary wound where the Helix Conglomerate drills **Volt** (living energy). Upper wards gleam with brass gardens and neon liturgy; undercities choke on steam and glow-rain. Beyond the ring: flooded bio-coasts, forge-volcano marches, and the haunted **Pale Grid** of dead corporate cathedrals.

---

## Cartographic read (how players use it)

Like SF2’s region sense + FF7’s “leave the city, see the wound”:

1. **Scenario Board** picks a chapter → drops you into a painted location screen.  
2. **Coil Atlas** (this overworld) is the painted hub linking wards — nodes + roads, not open 3D.  
3. Each **node** opens a cluster of handpainted screens (town / field / interior / dungeon).

```
                    [Skyhook Docks]
                           |
 [Glassmere] ---- [Lumen Spire] ---- [Pale Grid]
      |                 |                 |
 [Rust Marches] -- [Chromehaven] -- [Cinder Reaches]
                           |
                     [Aetherwell]
```

---

## Regions (8)

### 1. Lumen Spire (Helix capital ward)

- **FF7 echo:** Midgar plate — gardens above, vents below.  
- **Look:** White-brass towers, soft neon violet signage as watercolor blooms, sky-trains.  
- **Roles:** Ash’s exile home; board politics; Sol’s parade.  
- **Key screens (later):** Spire plaza, undercity steam market, Helix atrium, Vesper’s conservatory.

### 2. Chromehaven Undercity

- **FF7 echo:** Sector slums / Wall Market energy without copying layout.  
- **Look:** Stacked hab-blocks, cable bridges, amber window-washes, puddles of Volt-colored runoff.  
- **Roles:** Quill’s turf; Black Ledger mid-scenario; recruitment hub.  
- **Key screens:** Night bazaar, chop-shop garage, info-broker den, vertical alley climb.

### 3. Rust Marches

- **FF7 echo:** Wilderness between reactors — junkyard romance.  
- **Look:** Oxidized dunes of scrap, half-buried airframes, mushroomed coolant lakes (SF2 mushroom pop colors on cyber junk).  
- **Roles:** Nyx’s home digs; Pale Choir raids; Kernel shard discovery.  
- **Key screens:** Dig camp, canyon of chassis, sealed vault mouth, night storm ridge.

### 4. Glassmere

- **FF7 echo:** Costa-ish rest + ecological wrongness.  
- **Look:** Flooded streets, glass-and-brass piers, bioluminescent kelp, pink-cyan reflections.  
- **Roles:** Smuggler jobs; Neon Baptism; quieter character beats.  
- **Key screens:** Pier market, half-sunken tram, lighthouse relay, kelp farm.

### 5. Skyhook Docks

- **FF7 echo:** Rocket Town / airship fantasy as industrial skyport.  
- **Look:** Mooring towers, balloon-freighters, steam contrails as soft washes.  
- **Roles:** Iri’s ship; travel unlocks; Skyhook Debt scenario.  
- **Key screens:** Customs gantry, hangar bay, captain’s mess, storm launch platform.

### 6. Cinder Reaches

- **FF7 echo:** Nibelheim / Corel industrial heat.  
- **Look:** Ash-orange forge cities, pipe-spines up volcano flanks, slag rivers.  
- **Roles:** Labor revolt; warlord alliance; steel-craft lore.  
- **Key screens:** Foundry floor (cut-away SF2 interior), slag bridge, ash town, crater overlook.

### 7. Pale Grid

- **FF7 echo:** Shinra Mansion / Northern caves as data-gothic.  
- **Look:** Dead server-cathedrals, cable forests, pale green phosphor ghosts in watercolor.  
- **Roles:** Vault Mice; Ghost Frequency; Choir territory.  
- **Key screens:** Gate basilica, cable cloister, cold storage crypt, antenna spire.

### 8. Aetherwell (the wound)

- **FF7 echo:** Midgar reactors + Northern Crater combined.  
- **Look:** Concentric drill terraces into glowing cyan-amber depths; Helix fortresses on the rim.  
- **Roles:** Mid-game sabotage; finale Kernel chamber.  
- **Key screens:** Rim checkpoint, pipe catwalks, drill heart, Kernel sanctum.

---

## Travel & gating

| Unlock | When | Effect |
| --- | --- | --- |
| Spire ↔ Undercity | Prologue | Local only |
| Rust Marches | Prologue (Nyx) / Early (Ash) | Dig content |
| Glassmere + Skyhook | After 2 early scenarios | Airship travel begins |
| Cinder + Pale Grid | Mid Coil | Harder fields |
| Aetherwell Rim | Mid gate | Story dungeon access |
| Aetherwell Depths | Late | Finale |

Optional: **scrap monorail** and **smuggler ferries** as flavor transitions between painted screens (no open-world traversal).

---

## Atlas art brief (for the painted overworld)

- Medium: SF2-style sketch underdrawing + watercolor washes on parchment-toned paper.  
- Subject: ring of industrial wards around a glowing central well; brass cities; neon as soft pigment pops (cyan, magenta, amber) — not glossy CGI.  
- Roads: thin brown/graphite paths and pipe-lines linking nodes.  
- No UI chrome, no text labels on the painting itself (labels live in data).  
- Mood: beautiful and sick — storybook apocalypse.

Asset path (sample): `assets/maps/samples/overworld-coil-atlas/`

---

## Node → scenario map (summary)

| Node | Early | Mid | Late |
| --- | --- | --- | --- |
| Lumen Spire | E5 | M3 | L2 |
| Chromehaven | — | M4 | L1 |
| Rust Marches | E2 | M2 | — |
| Glassmere | E3 | — | — |
| Skyhook | E4 | — | — |
| Cinder | E1 | M5 | — |
| Pale Grid | E6 | M6 | — |
| Aetherwell | — | M1 | L3–L4 |

---

## Approval checklist

1. Eight-region Coil layout — keep / cut / rename?  
2. Central Aetherwell as the “mako wound” — keep?  
3. Atlas-as-painted-hub (not open world) — keep?  
4. Any region you want as the *first* area art after approval?
