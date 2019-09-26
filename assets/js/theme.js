const getPreferredTheme = () => {
  const preferredThemeFromLocalStorage = localStorage.getItem('preferredTheme')

  if (preferredThemeFromLocalStorage) {
    return preferredThemeFromLocalStorage
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
  const preferredTheme = getPreferredTheme() === 'dark' ? 'light' : 'dark'
  setPreferredTheme(preferredTheme)
  document.querySelector('#toggle-checkbox').checked = preferredTheme === 'dark'
}

export {
  getPreferredTheme,
  getPreferredThemeFromSettings,
  setPreferredTheme,
  togglePreferredTheme
}
