import { useContext, useEffect } from "react";
import { BrowserInfo } from "../components/BrowserInfo";
import { UserContext } from "../lib/context";
import { SignInButton, SignOutButton, UsernameForm } from "../components/Auth";
import { redirect } from "../lib/redirect";

export default function AuthWall({}) {
  const { user, username } = useContext(UserContext);

  useEffect(() => {
    if (username) {
      redirect("/dash/products");
    }
  }, [username]);

  return (
    <>
      <BrowserInfo />
      <div className="bg-auth opacity-90 bg-cover bg-no-repeat">
        <main className="min-h-[100vh] w-full flex-1 flex flex-col items-center justify-center">
          {!user /* signed out */ ? (
            <>
              <h1 className="text-[2.5rem]">
                <strong className="text-white">solid calculator</strong>
              </h1>
              <p className="text-lg text-white leading-relaxed mb-4">
                Precificação não precisa ser um estresse.
              </p>
              <SignInButton />
            </>
          ) : (
            !username /* signed in, missing username */ && (
              <>
                <UsernameForm />
                <SignOutButton />
              </>
            )
          )}
        </main>
      </div>
    </>
  );
}
