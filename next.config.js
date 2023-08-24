/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    // Incluimos los estilos de styled-components en el compilador de Next.js. 
    // Lo que hacemos es permitir que nuestro ambiente de build pueda interpretar los estilos de styled-components y entender que es lo que estos intentan hacer.
    styledComponents: { 
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: [],
      // Defaults to ["index"].
      meaninglessFileNames: ["index"],
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      namespace: "",
      // Not supported yet.
      minify: false,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: false,
    },
  },
}


module.exports = nextConfig