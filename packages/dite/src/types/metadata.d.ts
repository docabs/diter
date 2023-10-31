export interface ChunkMetadata {
  importedAssets: Set<string>
  importedCss: Set<string>
}

declare module 'rollup' {
  export interface RenderedChunk {
    diteMetadata?: ChunkMetadata
  }
}
