import React, { useState } from "react";

export function DRETable() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <table className="tw_dre_table">
        <tr>
          <th>Empresa (CNPJ)</th>
          <th>Custo Fixo</th>
          <th>M. Contribuição Nominal Total</th>
          <th>Faturamento Total</th>
          <th>Custos Variáveis</th>
          <th>Lucro</th>
          <th>Ponto de Equilíbrio</th>
          <th>Data Inicial</th>
          <th>Data Final</th>
        </tr>
        <tr>
          <td>96.245.212/0001-08</td>
          <td>200.0</td>
          <td>341.55</td>
          <td>611.99</td>
          <td>270.44</td>
          <td>141.55</td>
          <td>358.36</td>
          <td>mês/ano</td>
          <td>mês/ano</td>
        </tr>
      </table>
    </>
  );
}
