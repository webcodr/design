const languageAliases = {
  golang: "go",
  sh: "bash"
}

const sanitizeLanguageName = (language) =>
  (languageAliases[language.toLowerCase()] ??= language)

export const setLanguage = () => {
  const codeBlocks = document.querySelectorAll("[data-lang]")

  if (codeBlocks.length === 0) {
    return
  }

  for (const codeBlock of codeBlocks) {
    const nameElement = document.createElement("span")
    const language = codeBlock.getAttribute("data-lang")
    const textNode = document.createTextNode(sanitizeLanguageName(language))

    nameElement.appendChild(textNode)
    nameElement.classList.add("post-content--language")

    codeBlock.parentNode.prepend(nameElement)
  }
}
