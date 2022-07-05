import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    user &&
    username && (
      <nav className="gl_navbar">
        <ul>
          <li>
            <Link href="/">
              <button>FEED</button>
            </Link>
          </li>
          {/** user is signed-in and has username */}
          {username && (
            <>
              <li>
                <Link href="/admin">
                  <button>Write posts</button>
                </Link>
              </li>
              <li>
                <Link href={`/${username}`}>
                  <button>{username}</button>
                </Link>
              </li>
            </>
          )}
          {/** user is not signed-in OR has not username */}
          {!username && (
            <li>
              <Link href="/enter">
                <button>Log in</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    )
  );
}
