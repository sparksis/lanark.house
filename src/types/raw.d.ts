// Allows `import raw from '*.mdx?raw'` to return a string via webpack asset/source
declare module '*?raw' {
  const content: string;
  export default content;
}
