# SaGaLikeJRPG

A SaGa Frontier 2–inspired JRPG prototype. Location screens use **handpainted watercolor backgrounds** (full illustrated scenes), not tilemaps — the same approach SF2 used when artists painted canvases, scanned them, and walked characters across the art.

## Quick start — journey preview

```bash
# from repo root
python3 -m http.server 8765
# open http://localhost:8765/tools/map-viewer/
```

Walk the suggested route in order:

**Havenbrook → Whisperwood → Frostpass → Ironveil → Westmarch → Millhaven**

Use **Continue**, click glowing exits on the map, the route list, or ←/→ keys.

## Sample maps

| ID | Name | Type |
| --- | --- | --- |
| `town-havenbrook` | Havenbrook | Town square |
| `forest-whisperwood` | Whisperwood | Forest field |
| `castle-ironveil` | Ironveil Castle | Castle courtyard |
| `mountain-frostpass` | Frostpass | Mountain pass |
| `overworld-westmarch` | Westmarch | Region atlas |
| `riverside-millhaven` | Millhaven | Riverside inn |

Art + previews live under `assets/maps/samples/`. Playable metadata (spawn, walk polygons, hotspots) lives under `data/maps/`.

Style target: soft brownish sketch underdrawing + translucent watercolor washes, elevated isometric staging, warm earth tones — closer to SaGa Frontier 2’s scanned painted screens than photoreal concept art.

## Repo layout

```
assets/          # Art, audio, UI
  maps/samples/  # Handpainted location backgrounds
  characters/    # Sprites / portraits (placeholder)
  ui/            # Menus, frames
  audio/         # Music & SFX
data/            # Game data (maps, tables) as JSON
docs/            # Art style guide & map pipeline
src/
  engine/        # Runtime / loop (stub)
  maps/          # Map loader (stub)
  game/          # Game-specific logic (stub)
tools/
  map-viewer/    # Local gallery for painted screens
  scripts/       # Utility scripts
```

## Docs

- [Art style guide](docs/art-style-guide.md) — watercolor look, palette, do/don't
- [Map pipeline](docs/map-pipeline.md) — from painting → JSON → playable screen

## Design notes

SaGa Frontier 2's identity came from scanned watercolor backdrops with a Germanic medieval storybook mood. These samples follow that idea:

1. One full painting per location screen  
2. Soft muted earth tones and pigment blooms  
3. Clear walkable ground and landmark exits  
4. Separate data for collision / hotspots  

Next building blocks: walk-mask painting, interior rooms off door hotspots, and a thin loader in `src/maps/`.
