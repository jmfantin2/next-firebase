import { Calendar } from "phosphor-react";

export function DRETable() {
  return (
    <table className="tw_table">
      <thead>
        <tr>
          <th>CNPJ</th>
          <th>
            Data
            <br />
            Inicial
          </th>
          <th>
            Data
            <br />
            Final
          </th>
          <th>
            Custo
            <br />
            Fixo
          </th>
          <th>
            M. Contribuição
            <br />
            Nominal Total
          </th>
          <th>
            Faturamento
            <br />
            Total
          </th>
          <th>
            Custos
            <br />
            Variáveis
          </th>
          <th>Lucro</th>
          <th>
            Ponto de
            <br />
            Equilíbrio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>96.245.212/0001-08</td>
          <td>
            2022-05-01{" "}
            {
              <button>
                <Calendar size={20} color="#337aff" />
              </button>
            }
          </td>
          <td>
            2022-05-30{" "}
            {
              <button>
                <Calendar size={20} color="#337aff" />
              </button>
            }
          </td>
          <td>200.0</td>
          <td>341.55</td>
          <td>611.99</td>
          <td>270.44</td>
          <td>141.55</td>
          <td>358.36</td>
        </tr>
      </tbody>
    </table>
  );
}
