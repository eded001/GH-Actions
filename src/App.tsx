export default function App() {
  const commit = import.meta.env.VITE_GIT_COMMIT || "Desconhecido";
  const commitDate = import.meta.env.VITE_GIT_COMMIT_DATE || "Desconhecida";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15">
            <span className="text-2xl">🚀</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Deploy realizado com GitHub Actions
            </h1>
            <p className="text-sm text-slate-400">
              Pipeline de Integração e Entrega Contínua (CI/CD)
            </p>
          </div>
        </div>

        <p className="mb-6 leading-7 text-slate-300">
          Esta página foi <strong>gerada automaticamente</strong> e publicada
          através de uma pipeline do <strong>GitHub Actions</strong>. Sempre que
          uma alteração é enviada para o repositório, o fluxo de automação pode
          executar validações, compilar o projeto e realizar o deploy sem
          intervenção manual.

          {" "}
          Para maiores informações:{" "}
          <a
            href="https://github.com/eded001/GH-Actions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 underline hover:text-white"
          >
            .github/workflows/
          </a>
        </p>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h2 className="mb-4 text-lg font-semibold">
            Fluxo executado
          </h2>

          <div className="space-y-3 font-mono text-sm">
            <div>📥 Checkout do repositório</div>
            <div>⬇️ Instalação das dependências</div>
            <div>🧪 Execução de testes e lint</div>
            <div>🏗️ Build da aplicação React</div>
            <div>🚀 Deploy para o GitHub Pages</div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>React + Tailwind CSS</span>
            <span>Powered by GitHub Actions ⚡</span>
          </div>

          <div className="mt-4 rounded-lg bg-slate-950 border border-slate-800 px-4 py-3 font-mono text-xs text-slate-400">
            <div>
              <span className="text-slate-500">Último commit:</span>{" "}
              <span className="text-green-400">{commit}</span>
            </div>

            <div className="mt-1">
              <span className="text-slate-500">Data do commit:</span>{" "}
              {commitDate}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}