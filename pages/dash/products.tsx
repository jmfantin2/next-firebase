import { ProdTable } from "../../components/ProdTable";

export default function ProductsPage({}) {
  return (
    <main className="tw_container">
      <ProdTable />
      <div className="tw_tableoptions">
        <button>Caneta BIC 4 cores</button>
        <button>Simular Situações</button>
      </div>
    </main>
  );
}
