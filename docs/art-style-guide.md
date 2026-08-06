# Art Style Guide

**Technique:** SaGa Frontier 2 handpainted watercolor (sketch underdrawing + soft washes).  
**Subject:** Futuristic **steampunk industrial** (FF7-adjacent energy politics) — brass, iron, steam, smog, megacity wards. **Tone down cyberpunk neon**; use neon only as rare accents, not the atlas default. Not medieval fantasy.

The medieval sample maps in `assets/maps/samples/` were a **technique proof**. Final areas will use the same paint language on Coil locations after story + world map approval (`docs/story.md`, `docs/world-map.md`).

## Look & Feel

| Trait | Guidance |
| --- | --- |
| Underdrawing | Soft brownish / grey pencil or ink sketch under the paint |
| Medium | Translucent watercolor washes on textured paper |
| Edges | Soft bleeds; shapes from wash + sketch, not hard black outlines |
| Perspective | Fixed elevated isometric / 3/4 RPG diorama staging |
| Color | Warm brass beiges & oxidized browns; coal-smoke greys; muted teal water; soft amber forge / Volt glow |
| Accents | Forge hearths, coolant ponds, airship balloons — sparse saturated pops; avoid magenta neon wash |
| Lighting | Diffused washes; hearth orange vs. window/neon cool shafts on interiors |
| Interiors | Cut-away rooms with front wall removed (SF2 shop style) |

## Setting vocabulary (paint these, not castles)

- Megacity plates, pipe-spines, sky-trains, airship docks  
- Undercity bazaars, scrap dunes, flooded glass coasts  
- Drill terraces into a glowing planetary well  
- Dead server-cathedrals, cable forests  

## Anti-patterns

- Photoreal / glossy digital concept art  
- Medieval half-timber default (old samples only)  
- Anime cel neon without paper grain  
- Harsh pure-black outlines  
- Tile seams as the hero background  

## Sample palette anchors

```
Brass / stone path    #B8A078  #C4A882
Oxidized scrap        #A86B4A  #6B4A32
Volt cyan / amber     #5EB8C8  #E0A84A
Neon magenta pop      #C45A9A
Moss / bio-coast      #6E8B5E
Phosphor ghost green  #8ABA7A
Shadow (cool smoke)   #7A6A78
Hearth / forge        #E07030
```

## Pipeline

1. Approve story + Coil atlas (`docs/`).  
2. Paint atlas hub, then area screens per approved region order.  
3. Author `data/maps/<id>.json` (spawn, walk, hotspots).  
4. Preview in `tools/map-viewer`.  

See also: `docs/map-pipeline.md`.
