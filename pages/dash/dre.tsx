import { DRETable } from "../../components/DRETable";

export default function DREPage({}) {
  return (
    <main className="tw_container">
      <DRETable />
      <div className="tw_tableoptions">
        <button>Simular</button>
        <button>Salvar</button>
      </div>
    </main>
  );
}
