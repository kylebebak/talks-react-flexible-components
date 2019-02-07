# Cómo Hacer Componentes Flexibles y Poderosos con React
Veremos dos patrones, __render props__ y __component injection__, que se usan en React para reutilizar código y construir librerías. Veremos después un caso real de una librería que usa component injection.

Veremos cómo este patrón ayuda a crear una librería con defaults sensatos, pero que también es muy flexible.

Ambas partes de la presentación serán interactivas.


## Instalación
~~~sh
git clone https://github.com/kylebebak/talks-react-flexible-components
cd talks-react-flexible-components
npm install # or `yarn install`
npm run dev
~~~


## Render Props
<https://reactjs.org/docs/render-props.html>

>A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.


## Component Injection
<https://reactpatterns.github.io/Component-injection/>

Parecido a render props, pero con nombres más explícitos.


## React Dropzone Uploader
Cuando diseñas una librería, o cualquier API, trata de hacer lo siguiente:

>Make the easy things easy, and the hard things possible.
>_Larry Wall, creador de Perl._

[React Dropzone Uploader](https://github.com/fortana-co/react-dropzone-uploader) es una librería que escribimos en [Fortana](https://fortana.co/) y que usamos para nuestros file uploaders en varios proyectos.

<https://react-dropzone-uploader.js.org/>

Su API tiene __defaults sensatos__ (easy things are easy). También es muy __flexible__ (hard things are possible), en parte porque aprovecha el patrón de component injection.
