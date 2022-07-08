import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import { GButton } from "../components/GButton";
import { BrowserInfo } from "../components/BrowserInfo";
import { UserContext } from "../lib/context";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";

import debounce from "lodash.debounce";

import { Loader } from "../components/Loader";

export default function AuthWall({}) {
  const { user, username } = useContext(UserContext);

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
          ) : !username /* signed in, missing username */ ? (
            <>
              <UsernameForm />
              <SignOutButton />
            </>
          ) : (
            /* signed in, has username */
            /* redirect to dash */
            <SignOutButton />
          )}
        </main>
      </div>
    </>
  );
}

function SignInButton() {
  const [loading, setLoading] = useState(false);
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await auth.signInWithPopup(googleAuthProvider);
      setLoading(false);
      toast("olá", {
        icon: "😄",
      });
    } catch (e) {
      toast.error("tente novamente");
      setLoading(false);
    }
  };
  return <GButton click={signInWithGoogle} loading={loading} />;
}

function SignOutButton() {
  return (
    <button
      onClick={() =>
        auth.signOut().then(() => {
          toast("até a próxima!", {
            icon: "👋",
          });
        })
      }
    >
      Sair
    </button>
  );
}

function UsernameForm() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  // React Hook useCallback received a function whose dependencies are unknown.
  // Pass an inline function instead.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkUsername = useCallback(
    debounce(async (username: string) => {
      if (username.length >= 3) {
        //suitable firestore search
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log("Firestore read executed!");
        setIsValid(!exists);
        setLoading(false);
      }
      //waits 500ms before checking again
    }, 500),
    [] //won't work without callback hook
  );

  //run checkUsername everytime formValue changes
  useEffect(() => {
    checkUsername(formValue);
    //eslint made me include chkUsrnm in deps
  }, [checkUsername, formValue]);

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    //create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);
    console.log("Firestore read executed!");

    //commit both docs together as a batch write
    const batch = firestore.batch();
    batch.set(userDoc, {
      username: formValue,
      displayName: user.displayName,
    });
    batch.set(usernameDoc, { uid: user.uid });
    await batch.commit();
  };

  const onChange: ChangeEventHandler = (e) => {
    let val: string = (e.target as HTMLInputElement).value.toLowerCase();
    const regex =
      /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/;

    // only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }
    if (regex.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  return (
    !username && (
      <section>
        <h3>Escolha um nome de usuário</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="mercado_brasco"
            value={formValue}
            onChange={onChange}
          />
          <UsernameMessage
            username={formValue}
            isValid={isValid}
            loading={loading}
          />
          <button type="submit" className="btn-green" disabled={!isValid}>
            {" "}
            Escolher{" "}
          </button>
          <h3>Debug State</h3>
          <div>
            username: {formValue} <br />
            loading: {loading.toString()} <br />
            is valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );
}

function UsernameMessage({ username, isValid, loading }) {
  if (loading) {
    return <Loader show={loading} />;
  } else if (isValid) {
    return <p>{username} disponivel</p>;
  } else if (username && !isValid) {
    return <p>{username} indisponivel</p>;
  } else {
    return null;
  }
}
