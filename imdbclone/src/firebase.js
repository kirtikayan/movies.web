
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBTaMhdgzQsyBDNcWbzISwv9M3AKEyEZxc",
  authDomain: "netflix-clone-22d13.firebaseapp.com",
  projectId: "netflix-clone-22d13",
  storageBucket: "netflix-clone-22d13.firebasestorage.app",
  messagingSenderId: "1250559675",
  appId: "1:1250559675:web:052a927283c310144a0b9e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);

        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
        
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};