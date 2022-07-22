import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { CheckCircle, HourglassHigh, X } from "phosphor-react";

import debounce from "lodash.debounce";

import { UserContext } from "../../lib/context";
import { Loader } from "../Loader";

import { auth, firestore, googleAuthProvider } from "../../lib/firebase";

import toast from "react-hot-toast";
import { GButton } from "../GButton";

export function SignInButton() {
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

export function SignOutButton() {
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

export function UsernameForm() {
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
      photoURL: user.photoURL,
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
        <form onSubmit={onSubmit} className="flex flex-row items-center my-2">
          <input
            className="rounded-md pr-2 pl-2 max-w-[10rem] mr-2 border-none"
            type="text"
            name="username"
            placeholder="solid_strategy"
            value={formValue}
            onChange={onChange}
          />
          <button
            type="submit"
            className="rounded-full bg-white text-4xl"
            disabled={!isValid}
          >
            <h1>
              {loading ? (
                <HourglassHigh className="p-1" />
              ) : isValid ? (
                <CheckCircle color="#e8a14c" />
              ) : (
                <X className="p-1" />
              )}
            </h1>
          </button>
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
