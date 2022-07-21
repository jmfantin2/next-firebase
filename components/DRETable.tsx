import { Calendar } from "phosphor-react";

export function DRETable() {
  return (
    <table className="tw_dre_table">
      <tr>
        <th>Empresa (CNPJ)</th>
        <th>Data Inicial</th>
        <th>Data Final</th>
        <th>Custo Fixo</th>
        <th>M. Contribuição Nominal Total</th>
        <th>Faturamento Total</th>
        <th>Custos Variáveis</th>
        <th>Lucro</th>
        <th>Ponto de Equilíbrio</th>
      </tr>
      <tr>
        <td>96.245.212/0001-08</td>
        <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
          2022-05-01
        </td>
        <td className="hover:cursor-pointer transition-colors ease-in-out delay-75 hover:bg-slate-100">
          2022-05-30
        </td>
        <td>200.0</td>
        <td>341.55</td>
        <td>611.99</td>
        <td>270.44</td>
        <td>141.55</td>
        <td>358.36</td>
      </tr>
    </table>
  );
}
