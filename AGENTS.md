# SaGaLikeJRPG

A SaGa Frontier 2–inspired JRPG prototype. It is currently a static, dependency-free project: handpainted watercolor map art under `assets/maps/samples/`, playable metadata (spawn, walk polygons, hotspots) under `data/maps/`, a browser map-gallery tool under `tools/map-viewer/`, and JavaScript engine/loader stubs under `src/`.

## Cursor Cloud specific instructions

### Services

- Map gallery (the only runnable app). It is a static site; there is no build step and no package manager. Serve the repo root over HTTP so the ES modules and asset paths resolve, then open the viewer:
  - Run: `python3 -m http.server 8765` from the repo root, then open `http://localhost:8765/tools/map-viewer/`.
  - Must be served from the repo root — the viewer references assets/data via relative paths like `../../assets/...` and `/data/maps/...`. Opening `index.html` via `file://` will not work.

### Lint / test / build

- There is no linter, no test framework, and no build system configured.
- The closest thing to a test is the map data validator: `python3 tools/scripts/validate_maps.py` (checks `data/maps/*.json` against `assets/maps/samples/` and exits non-zero on any mismatch).
- `src/` contains ES module stubs (`engine`, `maps`, `game`) that are not yet wired into the viewer or into any runner.

### Environment

- Requires only Python 3 (uses stdlib `http.server`) and, optionally, Node for the ES module stubs. Both are preinstalled; there are no dependencies to install.
