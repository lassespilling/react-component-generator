import { StyleLanguage } from '../types';

export function reactFunctionComponentTemplate(
  componentName: string,
  stylesLanguage: StyleLanguage = StyleLanguage.scss,
  importReact: boolean
) {
  return `
${importReact ? `import React from 'react';` : ''}
// Styles
import './${componentName}.${stylesLanguage}';

const ${componentName} = () => {
  return (
    <>
      <div className={\`${componentName.replace(/[A-Z]/g,(match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())}\`}>
        ${componentName}
      </div>
    </>
  )
}
export default ${componentName};
`.trimLeft();
}
