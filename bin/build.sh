#!/bin/bash
set -e

ruby --version

mkdir -p _site .jekyll-cache  # Required due to some file permission issue

if [[ "${GITHUB_REPOSITORY}" == "coltonenglish/lanark.house" && "${GITHUB_REF_NAME}" == "main" ]]; then
  bundle exec jekyll build
else
  bundle exec jekyll build --drafts $@
fi

ls -la _site
