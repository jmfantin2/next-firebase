import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { GButton } from "../components/gears/GButton";
import { BrowserInfo } from "../components/BrowserInfo";
import { UserContext } from "../lib/context";
import { auth, googleAuthProvider } from "../lib/firebase";

import { Logo } from "../components/Logo";

export default function AuthWall({}) {
  const { user, username } = useContext(UserContext);

  return (
    <>
      <BrowserInfo />
      <div className="bg-auth opacity-90 bg-cover bg-no-repeat">
        <main className="min-h-[90vh] w-full flex-1 flex flex-col items-center justify-center">
          {!user ? (
            /* signed out */ <>
              <h1 className="text-[2.5rem]">
                <strong className="text-white">solid calculator</strong>
              </h1>
              <p className="text-lg text-white leading-relaxed mb-4">
                Precificação não precisa ser um estresse.
              </p>
              <SignInButton />
            </>
          ) : !username ? (
            /* signed in, missing username */ <>
              <UsernameForm />
              <SignOutButton />
            </>
          ) : (
            /* signed in, has username */
            <SignOutButton />
          )}
        </main>
        <footer className="flex flex-1 text-white px-8 border-t border-solid border-[#eaeaea] justify-center min-h-[10vh] items-center">
          <p>Powered by </p>
          <Logo />
        </footer>
      </div>
    </>
  );
}

/*
  //1. user signed out <SignInButton />
  //2. user signed in, missing username <UsernameForm />
  //3. user signed in, has username <SignOutButton />
*/
function SignInButton() {
  const [loading, setLoading] = useState(false);
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await auth.signInWithPopup(googleAuthProvider);
      setLoading(false);
      toast.success("tudo certo");
    } catch (e) {
      toast.error("tente novamente");
      setLoading(false);
    }
  };
  return <GButton click={signInWithGoogle} loading={loading} />;
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sair</button>;
}

function UsernameForm() {
  return <h1>username form</h1>;
}
