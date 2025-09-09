#!/usr/bin/env bash
# cleanup-js.sh — remove transpiled JS artifacts from ./src
find ./src -type f \( -name "*.js" -o -name "*.js.map" \) -delete
