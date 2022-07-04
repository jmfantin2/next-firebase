import { useState } from "react";

export function SubscriberForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubscribe() {
    //TBD: mutate to GraphQL sublist
    //navigate("/dash");
  }

  return (
    <div className="rounded p-8 ml-16 bg-white border border-gray-200">
      <strong className="text-blue-600 text-2xl mb-6 block">
        Entre na newsletter
      </strong>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
        <input
          className="bg-gray-200 rounded px-5 h-14"
          type="text"
          placeholder="Seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-gray-200 rounded px-5 h-14"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-600 uppercase text-white py-4 rounded font-bold text-sm hover:bg-blue-400 transition-colors disabled:bg-blue-400"
          type="submit"
        >
          Garantir minha vaga
        </button>
      </form>
    </div>
  );
}
