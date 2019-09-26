import hljs from 'highlight.js/lib/highlight'
import apache from 'highlight.js/lib/languages/apache'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import markdown from 'highlight.js/lib/languages/markdown'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import go from 'highlight.js/lib/languages/go'
import gradle from 'highlight.js/lib/languages/gradle'
import http from 'highlight.js/lib/languages/http'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import kotlin from 'highlight.js/lib/languages/kotlin'
import nginx from 'highlight.js/lib/languages/nginx'
import php from 'highlight.js/lib/languages/php'
import scss from 'highlight.js/lib/languages/scss'
import swift from 'highlight.js/lib/languages/swift'
import yaml from 'highlight.js/lib/languages/yaml'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'

const getPreferredTheme = () => {
  const preferrefThemeFromLocalStorage = localStorage.getItem('preferredTheme')

  if (preferrefThemeFromLocalStorage) {
    return preferrefThemeFromLocalStorage
  } else {
    return getPreferredThemeFromSettings()
  }
}

const getPreferredThemeFromSettings = () => {
  const preferColorSchemeResult = window.matchMedia('(prefers-color-scheme: dark)')

  if (preferColorSchemeResult && preferColorSchemeResult.matches === true) {
    return 'dark'
  } else {
    return 'light'
  }
}

const setPreferredTheme = (name) => {
  localStorage.setItem('preferredTheme', name)
  document.documentElement.setAttribute('data-theme', name)
}

const togglePreferredTheme = () => {
  preferredTheme = preferredTheme === 'dark' ? 'light' : 'dark'
  setPreferredTheme(preferredTheme)
  document.querySelector('#toggle-checkbox').checked = preferredTheme === 'dark'
}

let preferredTheme = getPreferredTheme()
setPreferredTheme(preferredTheme)

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#toggle-checkbox').checked = preferredTheme === 'dark'
  document.querySelector('#theme-toggle').addEventListener('click', togglePreferredTheme)
  document.querySelector('#toggle-checkbox').addEventListener('click', togglePreferredTheme)
})

hljs.registerLanguage('apache', apache)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('dockerfile', dockerfile)
hljs.registerLanguage('go', go)
hljs.registerLanguage('gradle', gradle)
hljs.registerLanguage('http', http)
hljs.registerLanguage('java', java)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('kotlin', kotlin)
hljs.registerLanguage('nginx', nginx)
hljs.registerLanguage('php', php)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)

hljs.initHighlightingOnLoad()
