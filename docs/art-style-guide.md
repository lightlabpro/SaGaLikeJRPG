# Handpainted Map Art Style Guide

Inspired by **SaGa Frontier 2**: backgrounds are hand-painted watercolor illustrations with soft sketch underdrawing, scanned as full-screen walkable scenes — not tilemaps, not photoreal concept art.

## Look & Feel (match these SF2 traits)

| Trait | Guidance |
| --- | --- |
| Underdrawing | Soft brownish / grey pencil or ink sketch lines under the paint |
| Medium | Translucent watercolor washes on textured paper |
| Edges | Soft bleeds; shapes defined by wash + sketch, not hard black outlines |
| Perspective | Fixed elevated isometric / 3/4 RPG viewpoint (diorama staging) |
| Color | Warm earthy beiges, tans, browns; soft moss greens; cool lavender shadows |
| Accents | Small saturated pops (red mushrooms, pink flowers, forge glow) |
| Lighting | Soft diffused washes; warm hearth / cool window shafts on interiors |
| Interiors | Cut-away rooms with the front wall removed (shop / forge style) |

## What SF2 Did Differently

1. **Full painted screens** — each location is one illustration.
2. **Sprites on paintings** — characters are separate 2D sprites; collision is data.
3. **Sketch + wash** — hand-drawn line under watercolor, storybook Germanic fantasy.
4. **Hotspots, not grids** — doors and exits sit on the painted ground.

## Anti-patterns (avoid)

- Photoreal architecture, foliage, or lighting
- Clean modern digital illustration without paper grain / sketch lines
- Overly naive “children’s book blob” forms with no underdrawing
- Harsh pure-black outlines or anime cel shading
- Tile seams or repeating texture sheets as the hero background

## Sample Palette Anchors

```
Stone / path         #B8A078  #C4A882
Foliage / moss       #6E8B5E  #7A9E6E
Timber / roofs       #6B4A32  #B86B4A
Accent mushroom/red  #C43A3A
Accent flower        #7A5A9A  #C45A6A
Shadow (cool)        #7A6A78  #8A7A6A
Hearth glow          #E07030
Window light         #E8E4D8
```

## Production Pipeline

1. **Concept** — thumbnail: path, landmarks, exits.
2. **Sketch** — light brownish underdrawing.
3. **Wash** — watercolor / wet-media brushes; keep paper grain.
4. **Export** — ~1536×1024 (or higher).
5. **Author data** — `data/maps/<id>.json` spawn, walk regions, hotspots.
6. **Preview** — `tools/map-viewer` journey walkthrough.

## Map Types in This Repo

| Type | Purpose | Sample |
| --- | --- | --- |
| `town` | Courtyards, hubs | Havenbrook, Millhaven |
| `field` | Travel + encounters | Whisperwood, Frostpass |
| `castle` | Court hubs | Ironveil Castle |
| `interior` | Cut-away shops | Emberhall Forge |
| `overworld` | Region atlas | Westmarch |

## Do / Don't

**Do**
- Keep open walkable ground readable
- Use sketch + wash together
- Leave clear exits (stairs, archways, path mouths)

**Don't**
- Drift into photoreal or glossy digital painting
- Hide the path under clutter
- Put UI chrome into the background art
