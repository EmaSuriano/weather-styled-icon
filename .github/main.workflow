workflow "Deploy" {
  on = "push"
  resolves = ["bitoiu/release-notify-action@master"]
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

action "bitoiu/release-notify-action@master" {
  uses = "bitoiu/release-notify-action@master"
  needs = ["Deploy to GitHub Pages"]
  secrets = ["SENDGRID_API_TOKEN", "RECIPIENTS"]
}
