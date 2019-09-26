workflow "Run Unit Tests" {
  on = "push"
  resolves = ["Jest"]
}

action "Jest" {
  uses = "stefanoeb/jest-action@master"
  args = "**.spec.js --ci"
}
