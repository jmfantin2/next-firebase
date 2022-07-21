import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
        </tr>
        <tr>
          <td>96.245.212/0001-08</td>
          <td>200.0</td>
          <td>341.55</td>
          <td>611.99</td>
          <td>270.44</td>
          <td>141.55</td>
          <td>358.36</td>
        </tr>
      </table>
      <div className=" w-full mt-1 mb-6 flex flex-row justify-center gap-2">
        <div className="group flex flex-col items-center bg-accent_light rounded-lg">
          <DatePicker
            className="bg-slate-200 max-w-[10rem] text-center border-none group-hover:bg-slate-100 group-hover:cursor-pointer transition-colors ease-in-out delay-75"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            popperPlacement="left-start"
          />
          <p className="text-white font-bold">Data Inicial</p>
        </div>
        <div className="group flex flex-col items-center bg-accent_light rounded-lg">
          <DatePicker
            className="bg-slate-200 max-w-[10rem] text-center border-none group-hover:bg-slate-100 group-hover:cursor-pointer transition-colors ease-in-out delay-75"
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            popperPlacement="right-end"
          />
          <p className="text-white font-bold">Data Final</p>
        </div>
      </div>
    </>
  );
}
