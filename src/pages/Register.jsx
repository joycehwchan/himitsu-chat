import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="formHeader">
          <h1 className="formTitle">Himitsu Chat</h1>
          <p className="formSubtitle">Register</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="usename" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="profile" style={{ display: "none" }} />
          <label htmlFor="profile" className="avatarLabel">
            <div className="addAvatarIcon">
              <i className="uil uil-image-plus"></i>
            </div>
            <p>Add profile picture</p>
          </label>
          <button disabled={loading}>{loading ? "Loading" : "Sign up"}</button>
          {loading && (
            <span className="loading">Creating new account, please wait.</span>
          )}
          {err && (
            <span className="error">
              Something went wrong. Please try again.
            </span>
          )}
        </form>
        <p className="formFooter">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
