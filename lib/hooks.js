
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";


export function useUserData(){
  //ts is unsuitable here because dependency types are not ready
  //and would lead to verborrhagic pointless overriding... or would it?
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    //turn off realtime subscription
    let unsubscribe;
    if (user) {
      //go make a reference to the firestore collection
      //with the document that matches the current user id
      const ref = firestore.collection("users").doc(user.uid);
      //define realtime subscription
      //onSnapshot will unsubscribe as a callback in firebase,
      //and that's will the variable is called unsubscribe.
      unsubscribe = ref.onSnapshot((doc) => {
        //dinamically get the username every time user logs in
        setUsername(doc.data()?.username);
        //which is necessary because usernames can change
      });
    } else {
      //no user, no username
      setUsername(null);
    }
    //tells react to call unsubscribe
    //when user document is no longer needed
    return unsubscribe;
  }, [user]);
  return { user, username }
}