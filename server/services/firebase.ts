import { 
    initializeApp, FirebaseApp 
  } from "firebase/app";
  
  import {
    getAuth,
    Auth,
    signInWithPhoneNumber,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    isSignInWithEmailLink,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    sendEmailVerification,
    verifyPasswordResetCode,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    confirmPasswordReset,
    updateEmail,
    updatePassword,
    User,
    RecaptchaVerifier,
    UserCredential,
  } from "firebase/auth";
  
  import {
    getFirestore,
    Firestore,
    doc,
    setDoc,
  } from "firebase/firestore";
  
  
  
  const firebaseConfig = {
      apiKey: "AIzaSyAqIxEK12cKaMWVJdkhC5mFwiMJrfVBKF4",
      authDomain: "staffprofilling.firebaseapp.com",
      projectId: "staffprofilling",
      storageBucket: "staffprofilling.firebasestorage.app",
      messagingSenderId: "947934716837",
      appId: "1:947934716837:web:2bca879c7a3ea63adcfe4c",
      measurementId: "G-L11DKRMEWP"
    };
  
    const app: FirebaseApp = initializeApp(firebaseConfig);
    const auth: Auth = getAuth(app);
  
    class AuthFunc {
      async sendSignInLink(email: string): Promise<void> {
        const actionCodeSettings = {
          url: "http://localhost:3000/complete-sign-in", // Replace with your URL
          handleCodeInApp: true,
        };
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      }
  
      signInWithEmailLink(email: string, link: string): Promise<UserCredential> {
        return signInWithEmailLink(auth, email, link);
      }
  
      isSignInWithEmailLink(link: string): boolean {
        return isSignInWithEmailLink(auth, link);
      }
  
      signup(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password);
      }
  
      login(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password);
      }
  
      loginWithGoogle(): Promise<UserCredential> {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      }
  
      loginWithFacebook(): Promise<UserCredential> {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);
      }
  
      signout(): Promise<void> {
        return signOut(auth);
      }
  
      reset(email: string): Promise<void> {
        return sendPasswordResetEmail(auth, email);
      }
  
      verifyemail(user: User): Promise<void> {
        return sendEmailVerification(user);
      }
  
      verifycode(code: string): Promise<string> {
        return verifyPasswordResetCode(auth, code);
      }
  
      confirmreset(code: string, newPassword: string): Promise<void> {
        return confirmPasswordReset(auth, code, newPassword);
      }
  
      changeEmail(email: string, currUser: User): Promise<void> {
        return updateEmail(currUser, email);
      }
  
      changePassword(password: string, currUser: User): Promise<void> {
        return updatePassword(currUser, password);
      }
  
      UserState(): User | null {
        return auth.currentUser;
      }
  
      loginWithPhone(phoneNumber: string, recaptchaVerifier: RecaptchaVerifier) {
        return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      }
    }
  
  
  
  const authfunc = new AuthFunc();
    export { authfunc, auth };
  export type { AuthFunc, User, UserCredential, RecaptchaVerifier };
  
  