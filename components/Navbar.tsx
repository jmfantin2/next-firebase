import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    user &&
    username && (
      <nav className="tw_navbar">
        <div>
          <div>
            <Link href="/dash/products">
              <button>Produtos</button>
            </Link>
            <Link href="/dash/dre">
              <button>DRE</button>
            </Link>
          </div>
          <Link href={`/${username}`}>
            <button>Sair</button>
          </Link>
        </div>
      </nav>
    )
  );
}
