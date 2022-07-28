import { CaretCircleDown } from "phosphor-react";
import { useState } from "react";
import shift from "classnames";
import Link from "next/link";

//https://www.youtube.com/watch?v=IF6k0uZuypA

export function MenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        href="#"
        onClick={() => setOpen(!open)}
        className={shift("bg-accent rounded-full ml-4", {
          "bg-slate-200": open,
        })}
      >
        <CaretCircleDown
          size={32}
          weight="bold"
          className={shift("text-white", {
            "text-accent": open,
          })}
        />
      </a>
      {open && <DropdownMenu />}
    </>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <Link href={props.path}>
        <a href="#" className="menu-item">
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem path="/dash/products">Produtos</DropdownItem>
      <DropdownItem path="/dash/dre">DRE</DropdownItem>
    </div>
  );
}
