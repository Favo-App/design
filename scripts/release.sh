export PATH=$(npm bin):$PATH

VERSION=`auto version`

## Support for label 'skip-release'
if [ ! -z "$VERSION" ]; then
  ## Update Changelog
  auto changelog

  ## Publish Package
  npm version $VERSION -m "build(design): bump version to: %s [skip ci]"
  npm publish --access public

  ## Create GitHub Release
  git push --follow-tags --set-upstream origin $branch
  auto release
fi