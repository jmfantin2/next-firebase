import { Calendar } from "phosphor-react";

export function DRETable() {
  return (
    <table className="tw_dre_table">
      <thead>
        <tr>
          <th>Empresa (CNPJ)</th>
          <th className="bg-accent_light">Data Inicial</th>
          <th className="bg-accent_light">Data Final</th>
          <th>Custo Fixo</th>
          <th>M. Contribuição Nominal Total</th>
          <th>Faturamento Total</th>
          <th>Custos Variáveis</th>
          <th>Lucro</th>
          <th>Ponto de Equilíbrio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>96.245.212/0001-08</td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            2022-05-01{" "}
            {
              <button>
                <Calendar size={20} color="#FF9F00" />
              </button>
            }
          </td>
          <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
            2022-05-30{" "}
            {
              <button>
                <Calendar size={20} color="#FF9F00" />
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
