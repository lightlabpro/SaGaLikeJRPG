# SaGaLikeJRPG

A SaGa Frontier 2–structured JRPG (~25–30 hours, scenario-driven) with **handpainted watercolor screens** and a **futuristic steampunk / cyberpunk** setting (FF7-adjacent).

> **Current milestone:** Approve **story** + **world map** before area art.  
> See [`docs/story.md`](docs/story.md) and [`docs/world-map.md`](docs/world-map.md).  
> Coil atlas preview: `assets/maps/samples/overworld-coil-atlas/`

## Quick start — journey preview (technique samples)

```bash
python3 -m http.server 8765
# open http://localhost:8765/tools/map-viewer/
```

The journey viewer still walks older **technique-proof** medieval samples. Final areas will be Coil locations after design approval.

## Design docs

| Doc | Purpose |
| --- | --- |
| [Story bible](docs/story.md) | Dual leads, scenarios, endings, hour budget |
| [World map](docs/world-map.md) | The Coil regions, gating, atlas brief |
| [Art style](docs/art-style-guide.md) | SF2 paint technique + cyberpunk subject |
| [Map pipeline](docs/map-pipeline.md) | Painting → JSON → playable screen |

## Repo layout

```
assets/          # Art, audio, UI
  maps/samples/  # Painted screens (technique proofs + Coil atlas preview)
data/maps/       # Map JSON
docs/            # Story, world, style, pipeline
src/             # Engine stubs
tools/map-viewer # Local journey / preview tool
```
