declare module 'connect' {
  const connect: () => any
  export = connect
}

declare module 'cors' {
  function cors(options: any): any
  export = cors
}

declare module 'http-proxy' {
  const proxy: any
  export = proxy
}

declare module 'launch-editor-middleware' {
  const plugin: any
  export = plugin
}

declare module 'postcss-import' {
  import type { Plugin } from 'postcss'
  const plugin: (options: {
    resolve: (
      id: string,
      basedir: string,
      importOptions: any,
    ) => string | string[] | Promise<string | string[]>
    load: (id: string) => Promise<string>
    nameLayer: (index: number, rootFilename: string) => string
  }) => Plugin
  export = plugin
}

// LESS' types somewhat references this which doesn't make sense in Node,
// so we have to shim it
declare interface HTMLLinkElement {}

// eslint-disable-next-line no-var
declare var __dite_profile_session: import('node:inspector').Session | undefined
// eslint-disable-next-line no-var
declare var __dite_start_time: number | undefined
