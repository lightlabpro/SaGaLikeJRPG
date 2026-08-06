/**
 * Map data loader stub.
 * Loads JSON from /data/maps and resolves asset paths.
 */
export async function loadMapIndex(baseUrl = "") {
  const res = await fetch(`${baseUrl}/data/maps/index.json`);
  if (!res.ok) throw new Error(`Failed to load map index: ${res.status}`);
  return res.json();
}

export async function loadMap(id, baseUrl = "") {
  const res = await fetch(`${baseUrl}/data/maps/${id}.json`);
  if (!res.ok) throw new Error(`Failed to load map ${id}: ${res.status}`);
  return res.json();
}

export function pointInPolygon(point, polygon) {
  const [x, y] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export function isWalkable(map, x, y) {
  const regions = map.walkableRegions || [];
  if (!regions.length) return true;
  return regions.some(
    (r) => Array.isArray(r.polygon) && pointInPolygon([x, y], r.polygon)
  );
}
