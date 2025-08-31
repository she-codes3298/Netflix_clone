
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {addDoc,collection,getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDovWeO6XEUulxlrwoZulnDCd6fLTL2IG0",
  authDomain: "netflix-clone-10aaf.firebaseapp.com",
  projectId: "netflix-clone-10aaf",
  storageBucket: "netflix-clone-10aaf.firebasestorage.app",
  messagingSenderId: "335314838867",
  appId: "1:335314838867:web:caf681e47e1a14a0412da6",
  measurementId: "G-9W0ZPRG8RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db= getFirestore(app);
const signup = async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(error)
    {
     console.log(error);
     alert(error);   
    }
}

const login= async()=>{
   try {
      signInWithEmailAndPassword(auth,email,password);
   }catch(error){
     console.log(error);
     alert(error);
   }
}

const logout=()=>{
    signOut(auth);
}

export{auth,db,login,signup,logout};