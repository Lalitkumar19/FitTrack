// frontend/src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("✅ Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          FitTrack Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-600 transition"
        >
          Login
        </button>
        <p className="text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;






// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext.jsx";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate("/dashboard"); // Redirect to dashboard on success
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <form
//         className="bg-white p-8 rounded shadow-md w-96"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <button
//           type="submit"
//           className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
