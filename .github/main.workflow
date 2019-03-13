workflow "Deploy" {
  on = "push"
  resolves = [
    "Deploy to GitHub Pages",
  ]
}

action "Deploy to GitHub Pages" {
  uses = "JamesIves/github-pages-deploy-action@1.0.8"
  env = {
    BRANCH = "gh-pages"
    FOLDER = "storybook-static"
    BUILD_SCRIPT = "yarn && yarn storybook-build"
  }
  secrets = ["ACCESS_TOKEN"]
}
