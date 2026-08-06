/**
 * Game entry stub.
 */
import { createEngine } from "../engine/index.js";
import { loadMapIndex } from "../maps/loader.js";

export async function boot() {
  const engine = createEngine({ title: "SaGaLikeJRPG" });
  const index = await loadMapIndex("");
  return { engine, mapCount: index.maps?.length ?? 0 };
}
