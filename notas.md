# Desarrollo NextJS

## Styled components

Es un framework que permite editar y modularizar los componentes de estilo CSS de los elementos de una manera muy sencilla. Evitando la redundancia de codigo y haciendo eficiente el desarrollo.

Si en algun momento al instalar paquetes nuestro archivo de configuración tira error por no encontrar el archivo, lo que hacemos es hacer "windows + r" o shift + p para recargar la pagina.

## NextJS / React / Typescript

Para ver como compilar y correr nuestro codigo podemos ir a package.json y ver los scripts que tenemos. En este caso tenemos 4:

- dev: Corre el servidor de desarrollo
- build: Compila el proyecto
- start: Corre el proyecto compilado
- lint: Corre el linter

Parar compilar y correr el proyecto en development mode hacemos:

```bash
npm run dev
```

Esto ejecuta el codigo en el puerto 3000 de localhost.

### Housekeeping

Vamos a global.css en el directorio styles y borramos todo el contenido. Ahora, instalaremos algunas fuentes gratuitas desde Google Fonts y definir algunos estilos globales.

#### CSS

Al hacer un wildcard, o asterisco, y definir un estilo, lo que hacemos es definir un estilo global o general para todas las paginas que se vayan a definir.

Creamos un directorio llamado "components" en donde crearemos el directorio para los codigos que componen nuestra pagina, en este caso "QuoteGenerator", y otro que se llame "animations".

### Comenzando con la pagina

Comenzaremos construyendo el fondo de nuestra pagina. Para esto, crearemos un archivo llamado "QuoteGeneratorElements.tsx" en nuestro directorio de la pagina.
