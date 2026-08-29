// Global type declarations for DSH TUI package

import type {} from 'react'

// React Compiler Runtime stub
declare module 'react/compiler-runtime' {
  export function c<T>(fn: T): T
  export default { c }
}

// Ink CSS module declarations
declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}

// Bun runtime declaration
declare global {
  const Bun: any
}

// The fork renders custom DOM element names for its reconciler; declare them
// as a React JSX augmentation so `ink-box`/`ink-text`/`ink-link`/`ink-raw-ansi`
// resolve under `jsx: "react-jsx"`.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ink-box': unknown
      'ink-text': unknown
      'ink-link': unknown
      'ink-raw-ansi': unknown
      [key: string]: unknown
    }
  }
}

export {}

