workflow "Deploy" {
  on = "push"
  resolves = [
    "bitoiu/release-notify-action@master",
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

action "bitoiu/release-notify-action@master" {
  uses = "bitoiu/release-notify-action@master"
  needs = [
    "Deploy to GitHub Pages",
  ]
  secrets = ["SENDGRID_API_TOKEN", "RECIPIENTS"]
}
