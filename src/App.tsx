import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <section className="flex flex-col items-center gap-6 rounded-2xl bg-zinc-900 p-10 shadow-xl">
        <h1 className="text-3xl font-bold">
          Contador
        </h1>

        <span className="text-6xl font-mono">
          {count}
        </span>

        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-600 px-5 py-2 hover:bg-red-700 transition"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-zinc-700 px-5 py-2 hover:bg-zinc-600 transition"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-green-600 px-5 py-2 hover:bg-green-700 transition"
          >
            +
          </button>
        </div>
      </section>
    </main>
  );
}