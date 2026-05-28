import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {getFirestore,doc,getDoc,setDoc} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
const firebaseConfig={apiKey:'AIzaSyD5xI8GOG1lEKXBCunwq6qekg3QQOSijZ8',authDomain:'sitedropio.firebaseapp.com',projectId:'sitedropio'};
export const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getFirestore(app);
const btn=document.getElementById('googleLogin');
if(btn){btn.onclick=async()=>{const r=await signInWithPopup(auth,new GoogleAuthProvider()); const ref=doc(db,'users',r.user.uid); const s=await getDoc(ref); if(!s.exists()) await setDoc(ref,{credits:50,projects:[],createdAt:Date.now()}); location='dashboard.html';};}