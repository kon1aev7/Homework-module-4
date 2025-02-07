// const UncontrolledForm = ({ register }) => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(e.target.elements.username.value);
//     // console.log(e.target.elements.email.value);
//     // console.log(e.target.elements.password.value);
//     const username = e.target.elements.username.value;
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;
//     register({ username, email, password });
//     e.target.reset();
//   };
//   return (
//     <div>
//       <h2>Uncotrolled form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Name:</span>
//           <input type="text" placeholder="Enter your name:"name="username"/>
//         </label>
//         <label>
//           <span>Email:</span>
//           <input type="text" placeholder="Enter your email:"name="email"/>
//         </label>
//         <label>
//           <span>Password:</span>
//           <input type="text" placeholder="Enter your password:"name="password"/>
//         </label>
//         <button type='submit'>Register</button>
//       </form>
//     </div>
//   );
// };
// export default UncontrolledForm;