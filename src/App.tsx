export default function App() {
  const info = {
    commit: import.meta.env.VITE_GIT_COMMIT ?? "Desenvolvimento",
    commitDate: import.meta.env.VITE_GIT_COMMIT_DATE ?? "Não informado",
    branch: import.meta.env.VITE_GIT_BRANCH ?? "local",
    workflow: import.meta.env.VITE_GITHUB_WORKFLOW ?? "Execução local",
    runNumber: import.meta.env.VITE_GITHUB_RUN_NUMBER ?? "-",
    runId: import.meta.env.VITE_GITHUB_RUN_ID ?? "-",
    actor: import.meta.env.VITE_GITHUB_ACTOR ?? "Desconhecido",
    repository: import.meta.env.VITE_GITHUB_REPOSITORY ?? "Local",
    sha: import.meta.env.VITE_GITHUB_SHA ?? "-",
    buildDate: import.meta.env.VITE_BUILD_DATE ?? new Date().toLocaleString("pt-BR"),
    event: import.meta.env.VITE_GITHUB_EVENT ?? "development",
    commitAuthor: import.meta.env.VITE_GIT_AUTHOR ?? "Desconhecido",
    commitMessage: import.meta.env.VITE_GIT_MESSAGE ?? "Sem mensagem",
  };

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

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-5">
            <h2 className="mb-4 text-lg font-semibold">
              Informações do Deploy
            </h2>

            <div className="grid gap-3 text-sm sm:grid-cols-2 font-mono">

              <div>
                <p className="text-slate-500">Workflow</p>
                <p>{info.workflow}</p>
              </div>

              <div>
                <p className="text-slate-500">Execução</p>
                <p>#{info.runNumber}</p>
              </div>

              <div>
                <p className="text-slate-500">Branch</p>
                <p>{info.branch}</p>
              </div>

              <div>
                <p className="text-slate-500">Responsável</p>
                <p>{info.actor}</p>
              </div>

              <div>
                <p className="text-slate-500">Último Commit</p>
                <p className="text-green-400">{info.commit}</p>
              </div>

              <div>
                <p className="text-slate-500">Data do Commit</p>
                <p>{info.commitDate}</p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-slate-500">SHA Completo</p>
                <p className="break-all text-xs">{info.sha}</p>
              </div>

              <div>
                <p className="text-slate-500">Build gerado em</p>
                <p>{info.buildDate}</p>
              </div>

              <div>
                <p className="text-slate-500">Repositório</p>
                <p>{info.repository}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}