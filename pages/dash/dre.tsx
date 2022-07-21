import { DRETable } from "../../components/DRETable";

export default function DREPage({}) {
  return (
    <main className="tw_container">
      <div className="flex flex-wrap justify-center">
        <DRETable />
      </div>
      <div className="tw_dre_table_sub">
        <button>Simular</button>
        <button>Salvar</button>
      </div>
    </main>
  );
}
