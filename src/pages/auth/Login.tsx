import React from 'react';
import iilustration from "../../assets/illustration.svg";
import promentor from "../../assets/promentor-high-resolution-logo-transparent.png";
import { Form, Link } from "react-router-dom";

const Login = () => {
   return (
     <div className=" bg-gray-50 grid grid-cols-1 md:grid-cols-2 w-full h-screen">
       <div className="hidden md:flex flex-col items-center bg-white p-8 rounded-lg shadow-md justify-start h-full">
         <img src={promentor} alt="logo" className="w-24 h-24 mb-18" />
         <img
           src={iilustration}
           alt="a career man helping a woman climb up her career"
           className="w-full h-full object-contain"
         />
         <h6 className="font-sans text-blue-500 mt-7 text-center">
           Promentor! Linking Tommorow's Leaders with Today's experts
         </h6>
       </div>

       <div className=" flex flex-col  justify-center h-full px-6 items-center bg-blue-300 w-full">
         <h2 className=" text-2xl md:text-4xl mx-18 font-semibold py-10 mt-12 mb-0 font-sans">
           Welcome back! Login
         </h2>

         <form className="mt-12 space-y-4 max-w-md  w-full items-center justify-center">
           <div>
             <input
               type="email"
               name="Email"
               required
               className="w-full max-w-md px-3 py-2 border border-gray-300 rounded"
               placeholder="Enter your email"
             />
           </div>

           <div>
             <input
               type="password"
               name="Password"
               required
               className="w-full max-w-md px-3 py-2 border border-gray-300 rounded"
               placeholder="Enter your password"
             />
           </div>
           <div className="flex gap-4 justify-between">
             <h3 className="text-sm mb-2">Don't have an account? </h3>

             <Link to="/register" className="text-blue-700 underline">
               Signup
             </Link>
           </div>

           <button
             type="submit"
             className="w-full max-w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
           >
             Login
           </button>
         </form>
       </div>
     </div>
   );
};
  


export default Login