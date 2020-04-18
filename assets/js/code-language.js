const languageAbbreviations = {
  javascript: 'JS',
  shell: 'sh'
}

const sanitanzeLanguageName = (language) => {
  return languageAbbreviations[language.toLowerCase()] || language
}

export const setLanguage = () => {
  const codeBlocks = document.querySelectorAll('[data-lang]')

  if (codeBlocks.length === 0) {
    return
  }

  for (const codeBlock of codeBlocks) {
    const nameElement = document.createElement('span')
    const textNode = document.createTextNode(
      sanitanzeLanguageName(
        codeBlock.getAttribute('data-lang')
      )
    )

    nameElement.appendChild(textNode)
    nameElement.classList.add('post-content--language')

    codeBlock.prepend(nameElement)
  }
}

