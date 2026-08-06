# Handpainted Map Art Style Guide

Inspired by **SaGa Frontier 2** (1999): backgrounds were painted on canvas/paper, scanned, and used as full-screen walkable scenes — not tilemaps.

## Look & Feel

| Trait | Guidance |
| --- | --- |
| Medium | Watercolor / gouache on textured paper |
| Perspective | Slight bird's-eye or elevated 3/4 for towns; more frontal for interiors |
| Edges | Soft bleeds and pigment blooms; avoid hard vector outlines |
| Color | Muted earth tones — ochre, sage, dusty rose, cool gray-blue shadows |
| Lighting | Soft directional light; translucent washes for atmosphere |
| Detail | Enough landmarks to navigate; not photoreal |

## What SF2 Did Differently

1. **Full painted screens** — each location is one illustration, not a tileset.
2. **Characters walk on the painting** — collision is separate from the art.
3. **Storybook mood** — Germanic medieval fantasy, not anime neon or dark fantasy grit.
4. **Hotspots, not grids** — doors, exits, and examine points sit on the painted ground.

## Sample Palette Anchors

```
Ground / parchment   #C4A574  #E8DCC4
Foliage              #6B8F5E  #7A9E6E
Timber / roofs       #6B4A32  #B86B4A
Stone                #8A8A86  #8A8790
Water / sky          #7BA3B0  #A8C4C8
Shadow               #4A5548  #6E6A62
Lantern / warm light #E8B86A  #D4B896
```

## Production Pipeline

1. **Concept** — thumbnail composition: path, landmarks, exits.
2. **Paint** — traditional watercolor or digital brushes that mimic wet media.
3. **Scan / export** — target ~1536×1024 (or higher for remaster-style).
4. **Author data** — `data/maps/<id>.json` with spawn, walkable regions, hotspots.
5. **Collision** — start with polygons; later paint an alpha walk-mask.
6. **Preview** — drop into `tools/map-viewer` to check readability at game scale.

## Map Types in This Repo

| Type | Purpose | Sample |
| --- | --- | --- |
| `town` | Shops, inns, story hubs | Havenbrook, Millhaven |
| `field` | Travel + encounters | Whisperwood, Frostpass |
| `castle` | Court / dungeon hubs | Ironveil Castle |
| `overworld` | Region atlas linking screens | Westmarch |

## Do / Don't

**Do**
- Leave clear open ground for walking
- Use soft atmospheric depth (mist, distant washes)
- Keep exits readable (roads, gates, bridges)

**Don't**
- Cover the first read of the scene with UI chrome
- Use bright saturated “fantasy game” neon
- Rely on tile seams or repeating patterns in the hero background
