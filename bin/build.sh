#!/bin/bash

ruby --version

mkdir -p _site .jekyll-cache  # Required due to some file permission issue

if [[ "${GITHUB_REPOSITORY}" == "coltonenglish/lanark.house" && "${GITHUB_REF_NAME}" == "main" ]]; then
  jekyll build
else
  jekyll build --drafts
fi
