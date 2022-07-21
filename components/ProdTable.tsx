export function ProdTable() {
  return (
    <table className="tw_prod_table">
      <thead>
        <tr>
          <th colSpan={10}>Caneta BIC</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>ID</th>
          <th>
            Situação
            <br />
            Venda
          </th>
          <th>Despesas</th>
          <th>
            Margem
            <br />
            Nominal
          </th>
          <th className="bg-accent_light">
            Margem
            <br />
            Percentual
          </th>
          <th>Custo</th>
          <th>
            Preço
            <br />
            Mínimo
          </th>
          <th className="bg-accent_light">
            Preço
            <br />
            Venda
          </th>
          <th>
            Margem
            <br />
            Contribuição
          </th>
          <th className="bg-accent_light">
            Quantidade
            <br />
            Vendida
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Shopee</td>
          <td>13.00%</td>
          <td>R$ 0.00</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            0.00%
          </td>
          <td>R$ 1.80</td>
          <td>R$ 2.07</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            R$ 2.07
          </td>
          <td>R$ 0.00</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            1
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mercado Livre</td>
          <td>13.00%</td>
          <td>R$ 0.00</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            0.00%
          </td>
          <td>R$ 1.80</td>
          <td>R$ 2.07</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            R$ 2.07
          </td>
          <td>R$ 0.00</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            1
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Casa do Papel</td>
          <td>13.00%</td>
          <td>R$ 0.00</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            0.00%
          </td>
          <td>R$ 1.80</td>
          <td>R$ 2.07</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            R$ 2.07
          </td>
          <td>R$ 0.00</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            1
          </td>
        </tr>
      </tbody>
    </table>
  );
}
