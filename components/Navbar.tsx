import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { redirect } from "../lib/redirect";
import { Button, Dropdown } from "flowbite-react";
import { MenuButton } from "./MenuButton";

import toast from "react-hot-toast";

export function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    user &&
    username && (
      <nav className="tw_navbar">
        <div>
          <MenuButton />
          <div>
            <img
              className="w-[2.5rem] h-[2.5rem] rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <Dropdown label={username}>
              <Dropdown.Item
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
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>
    )
  );
}
