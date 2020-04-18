import {
  getPreferredTheme,
  getPreferredThemeFromSettings,
  setPreferredTheme,
  togglePreferredTheme
} from './theme'

import { setLanguage } from './code-language'

setPreferredTheme(getPreferredTheme())

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#toggle-checkbox').checked = getPreferredTheme() === 'dark'
  document.querySelector('#theme-toggle').addEventListener('click', togglePreferredTheme)
  document.querySelector('#toggle-checkbox').addEventListener('click', togglePreferredTheme)
  setLanguage()
})
