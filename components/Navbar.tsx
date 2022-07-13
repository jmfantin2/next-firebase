import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { redirect } from "../lib/redirect";

import toast from "react-hot-toast";

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
          <button
            onClick={() =>
              auth.signOut().then(() => {
                toast("até a próxima!", {
                  icon: "👋",
                });
                redirect("/");
              })
            }
          >
            Sair
          </button>
        </div>
      </nav>
    )
  );
}
