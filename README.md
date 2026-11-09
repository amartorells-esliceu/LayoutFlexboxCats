# Plantilla web

Punt de partida reutilitzable per a aplicacions web amb Vite, JavaScript i
Tailwind CSS. Inclou recàrrega en calent, comprovació de codi i build de
producció.

## Requisits

- Node.js `20.19+` o `22.12+`
- npm

## Crear un projecte a partir d'aquesta plantilla

1. Utilitza aquesta carpeta com a plantilla o copia'n els fitxers al nou projecte.
2. Canvia el camp `name` de `package.json` pel nom del projecte (en minúscules,
   amb guions i sense espais).
3. Actualitza el títol i la descripció a `index.html`.
4. Instal·la les dependències i inicia el servidor:

   ```bash
   npm install
   npm run dev
   ```

5. Obre l'adreça que apareix al terminal (per defecte,
   [http://localhost:5173](http://localhost:5173)).

Si es copia aquesta carpeta sense l'historial de Git, inicialitza el repositori
del nou projecte amb `git init`.

## Ordres disponibles

| Ordre                  | Descripció                                                     |
| ---------------------- | -------------------------------------------------------------- |
| `npm run dev`          | Inicia el servidor de desenvolupament amb recàrrega en calent. |
| `npm run lint`         | Comprova JavaScript, CSS, JSON i Markdown amb ESLint.          |
| `npm run format`       | Formata els fitxers amb Prettier.                              |
| `npm run format:check` | Comprova el format sense modificar fitxers.                    |
| `npm run build`        | Genera els fitxers de producció a `dist/`.                     |
| `npm run preview`      | Serveix localment la build. Executa abans `npm run build`.     |
| `npm run check`        | Executa format, lint i build.                                  |

## Personalització

- `index.html`: idioma, títol, descripció i metadades de la pàgina.
- `src/main.js`: punt d'entrada i estructura inicial de la interfície.
- `src/style.css`: estils globals. Tailwind CSS es pot utilitzar amb classes
  utilitàries als elements HTML.
- `public/`: fitxers estàtics servits des de l'arrel del lloc.
- `vite.config.js`: configuració de Vite i integració de Tailwind CSS.

Per afegir variables d'entorn locals, crea un fitxer `.env.local` (ja ignorat
per Git). Les variables exposades al navegador han de començar per `VITE_` i
no hi posis mai secrets: el seu valor queda inclòs al codi enviat al navegador.

## Estructura

```text
.
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.js
│   └── style.css
├── eslint.config.js
├── vite.config.js
├── package.json
└── package-lock.json
```
