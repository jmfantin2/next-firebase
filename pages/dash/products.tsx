import { ProdTable } from "../../components/ProdTable";

export default function ProductsPage({}) {
  return (
    <main className="tw_container">
      <ProdTable />
      <div className="tw_prod_table_sub">
        <button>Simular Situações</button>
      </div>
    </main>
  );
}
