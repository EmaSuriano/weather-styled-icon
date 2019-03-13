workflow "Deploy" {
  on = "push"
  resolves = [
    "bitoiu/release-notify-action@master",
    "Publish NPM",
  ]
}

action "Deploy to GitHub Pages" {
  uses = "JamesIves/github-pages-deploy-action@1.0.8"
  env = {
    BUILD_SCRIPT = "yarn && build-storybook"
    BRANCH = "gh-pages"
    FOLDER = "storybook-static"
  }
  secrets = ["ACCESS_TOKEN"]
}

action "bitoiu/release-notify-action@master" {
  uses = "bitoiu/release-notify-action@master"
  needs = [
    "Deploy to GitHub Pages",
    "Publish NPM",
  ]
  secrets = ["SENDGRID_API_TOKEN", "RECIPIENTS"]
}

action "Publish NPM" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
