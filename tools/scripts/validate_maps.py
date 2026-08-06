#!/usr/bin/env python3
"""Validate map JSON files against the sample asset folders."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "data" / "maps"
ASSETS = ROOT / "assets" / "maps" / "samples"


def main() -> int:
    errors: list[str] = []
    index = json.loads((DATA / "index.json").read_text())
    for entry in index["maps"]:
        path = DATA / entry["path"]
        if not path.exists():
            errors.append(f"Missing data file: {path}")
            continue
        data = json.loads(path.read_text())
        if data.get("id") != entry["id"]:
            errors.append(f"ID mismatch in {path}: {data.get('id')} != {entry['id']}")
        bg = data.get("background", {})
        for key in ("image", "preview", "thumbnail"):
            rel = bg.get(key)
            if not rel:
                errors.append(f"{entry['id']}: missing background.{key}")
                continue
            full = ROOT / rel
            if not full.exists():
                errors.append(f"{entry['id']}: missing asset {rel}")
        sample_dir = ASSETS / entry["id"]
        if not sample_dir.is_dir():
            errors.append(f"Missing sample folder: {sample_dir}")

    if errors:
        print("Map validation FAILED:")
        for e in errors:
            print(f"  - {e}")
        return 1

    print(f"OK — {len(index['maps'])} maps validated")
    return 0


if __name__ == "__main__":
    sys.exit(main())
