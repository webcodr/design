import {
  getPreferredTheme,
  getPreferredThemeFromSettings,
  setPreferredTheme,
  togglePreferredTheme
} from './theme'
import expectExport from 'expect'

global.matchMedia = jest.fn()

afterEach(function () {
  localStorage.removeItem('preferredTheme')
  global.matchMedia = jest.fn()
  document.documentElement.removeAttribute('data-theme')
})

describe('getPreferredTheme()', function() {
  it('should return `light`', function () {
    const result = getPreferredTheme()

    expect(result).toEqual('light')
  })

  it('should return `light` if matchMedia returns nothing', function() {
    const result = getPreferredTheme()

    expect(result).toEqual('light')
  })

  it('should return `dark` from media query evaluation', function () {
    global.matchMedia = () => {
      return {
        matches: true
      }
    }
    const result = getPreferredTheme()

    expect(result).toEqual('dark')
  })

  it('should return `dark` from local storage', function () {
    localStorage.setItem('preferredTheme', 'dark')
    const result = getPreferredTheme()

    expect(result).toEqual('dark')
  })
})

describe('getPreferredThemeFromSettings()', function () {
  it('should return `light`', function () {
    const result = getPreferredThemeFromSettings()

    expect(result).toEqual('light')
  })

  it('should return `light` if matchMedia returns nothing', function () {
    const result = getPreferredThemeFromSettings()

    expect(result).toEqual('light')
  })

  it('should return `dark` from media query evaluation', function () {
    global.matchMedia = () => {
      return {
        matches: true
      }
    }

    const result = getPreferredThemeFromSettings()

    expect(result).toEqual('dark')
  })
})

describe('setPreferredTheme()', function() {
  it('should set local storage and theme data attribute', function() {
    setPreferredTheme('dark')
    expect(localStorage.getItem('preferredTheme')).toEqual('dark')
    expect(document.documentElement.getAttribute('data-theme')).toEqual('dark')
  })
})

describe('togglePreferredTheme()', function () {
  it('should toggle preferred theme', function () {
    document.body.innerHTML = `<input type="checkbox" id="toggle-checkbox" checked />`

    setPreferredTheme('dark')
    expect(localStorage.getItem('preferredTheme')).toEqual('dark')
    expect(document.documentElement.getAttribute('data-theme')).toEqual('dark')
    expect(document.querySelector('#toggle-checkbox').checked).toBe(true)

    togglePreferredTheme()

    expect(localStorage.getItem('preferredTheme')).toEqual('light')
    expect(document.documentElement.getAttribute('data-theme')).toEqual('light')
    expect(document.querySelector('#toggle-checkbox').checked).toBe(false)
  })
})
