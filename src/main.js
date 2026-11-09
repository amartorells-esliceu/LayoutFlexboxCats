import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16">
    <p class="mb-4 text-sm font-semibold tracking-wide text-indigo-600">PLANTILLA WEB</p>
    <h1 class="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
      El teu proper projecte comença aquí.
    </h1>
    <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
      Modifica <code class="rounded bg-slate-100 px-2 py-1 text-base">src/main.js</code>
      i <code class="rounded bg-slate-100 px-2 py-1 text-base">src/style.css</code>
      per començar. Els canvis es reflecteixen al navegador automàticament.
    </p>
    <nav class="mt-8 flex flex-wrap gap-4" aria-label="Recursos">
      <a
        class="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href="https://vite.dev/guide/"
        target="_blank"
        rel="noreferrer"
      >
        Guia de Vite
      </a>
      <a
        class="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        href="https://tailwindcss.com/docs"
        target="_blank"
        rel="noreferrer"
      >
        Documentació de Tailwind
      </a>
    </nav>
  </main>
`;
