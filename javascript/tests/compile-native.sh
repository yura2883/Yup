#!/bin/bash
../../node_modules/google-closure-compiler-linux/compiler \
 --compilation_level ADVANCED_OPTIMIZATIONS \
 --isolation_mode IIFE \
 --language_in ECMASCRIPT_2015 \
 --charset UTF-8 \
 --js=./$1-test.js \
 --js=../$1.js \
 --entry_point $1-test \
 --js_output_file $1-test.min.js
