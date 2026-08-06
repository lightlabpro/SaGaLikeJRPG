# Map Pipeline

How painted maps become playable screens.

## Folder layout

```
assets/maps/samples/<map-id>/
  background.png   # full painted scene (1536×1024)
  preview.jpg      # gallery / web preview
  thumbnail.jpg    # index strip

data/maps/
  index.json       # catalog of all maps
  <map-id>.json    # spawn, walk regions, hotspots, palette
```

## Map JSON schema (v1)

| Field | Meaning |
| --- | --- |
| `id` | Stable slug, matches folder name |
| `type` | `town` \| `field` \| `castle` \| `overworld` \| `dungeon` |
| `background` | Paths + pixel size |
| `spawn` | Normalized `{x,y}` in 0–1 |
| `walkableRegions` | Polygons in normalized coords |
| `hotspots` | Doors, exits, shops, examine points |
| `encounters` | Optional random-battle table |
| `palette` | Art reference swatches |
| `musicCue` | Audio hook id |

Coordinates are **normalized** (0–1) so art can be rescaled without rewriting data.

## Suggested next steps

1. Paint walk-masks (`assets/maps/samples/<id>/walk-mask.png`) — white = walkable.
2. Add interior maps (inn rooms, shops) linked from door hotspots.
3. Hook `src/maps/` loader into the game loop.
4. Author NPC placements as a separate `npcs` array when characters land.
