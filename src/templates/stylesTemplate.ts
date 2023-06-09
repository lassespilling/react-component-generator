export function stylesTemplate(componentName: string) {
  return `
.${componentName.replace(
    /[A-Z]/g,
    (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()
  )} {
  
}
`.trimLeft();
}
