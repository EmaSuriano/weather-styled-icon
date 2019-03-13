workflow "Deploy" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Deploy to GitHub Pages" {
  uses = "JamesIves/github-pages-deploy-action@1.0.8"
  secrets = ["GITHUB_TOKEN"]
  env = {
    BUILD_SCRIPT = "yarn && build-storybook"
    BRANCH = "gh-pages"
    FOLDER = "storybook-static"
  }
}
