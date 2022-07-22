import { ProdTable } from "../../components/ProdTable";

export default function ProductsPage({}) {
  return (
    <main className="tw_container">
      <ProdTable />
      <div className="tw_prod_table_sub">
        <button>Salvar</button>
        <button>Simular</button>
      </div>
    </main>
  );
}
