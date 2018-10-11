# angular-rss-feed
Una aplicación web que muestra un RSS XML

## Caracteristicas

* Nombre y fecha del medio que publicó el RSS en la parte superior.
* Cada unos de los artículos cuenta con las siguientes partes:
    * Titular
    * Contenido (dependerá de la fuente si es completo o parcial)
    * Categorias (si las hay)
    * Fecha de publicación

## ¿Como usar en mi aplicación web?

Para usar este lector en tu web, copia el archivo `index.js` y `xml2json.min.js` en la carpeta de tu proyecto. El primero fichero incluye el componente RSSNews que quieres utilizar. El segundo fichero es una biblioteca necesaria para que funcione correctamente el componente.

Ademas, tambien necesitaras agregar como dependencias a tu proyecto, si no las tienes ya, las bibliotecas `angular@1.7.5` y `angular-sanitize`

Una vez tengas ya todo listo, escribe donde quieras usar el lector en tu archivo HTML la siguiente linea:

`<rss-news xml="ruta/al/fichero.xml"/>
`

## Licencia

Este proyecto usa la licencia MIT. Para más información, lee el fichero [LICENSE](LICENSE).