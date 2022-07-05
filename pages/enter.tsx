import { useState } from "react";
import toast from "react-hot-toast";
import { GButton } from "../components/gears/GButton";
import { auth, googleAuthProvider } from "../lib/firebase";

export default function EnterPage({}) {
  const user = null;
  const username = null;

  //1. user signed out <SignInButton />
  //2. user signed in, missing username <UsernameForm />
  //3. user signed in, has username <SignOutButton />
  return (
    <main className="gl_container">
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

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
