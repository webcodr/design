import {
  getPreferredTheme,
  setPreferredTheme,
  togglePreferredTheme
} from "./theme.js"

import { setLanguage } from "./code-language.js"

setPreferredTheme(getPreferredTheme())

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#toggle-checkbox").checked =
    getPreferredTheme() === "dark"
  document
    .querySelector("#theme-toggle")
    .addEventListener("click", togglePreferredTheme)
  document
    .querySelector("#toggle-checkbox")
    .addEventListener("click", togglePreferredTheme)
  setLanguage()
})
