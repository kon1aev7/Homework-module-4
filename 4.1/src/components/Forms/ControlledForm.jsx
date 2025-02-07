import { useState } from "react";
import s from "./Forms.module.css";

const ControlledForm = ({ register }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    course: "",
    about: "",
    level: "middle",
    isAcceptedRules: false,
  });
  const { username, email, phone, course, about, level, isAcceptedRules } =
    formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(formData);
  };
  //DRY - DONT REPEAT YOURSELF
  // const handleChangeName = (e) => {
  //   setFormData((prev) => ({ ...prev, username: e.target.value }));
  // };
  // const handleChangeEmail = (e) => {
  //   setFormData((prev) => ({ ...prev, email: e.target.value }));
  // };
  // const handleChangePhone = (e) => {
  //   setFormData((prev) => ({ ...prev, phone: e.target.value }));
  // };

  const handleChangeInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    // if (name === "username") {
    //   setFormData((prev) => ({ ...prev, username: e.target.value }));
    // }
    // if (name === 'email') {
    //   setFormData((prev) => ({ ...prev, email: e.target.value }));
    // }
    // if (name === 'phone') {
    //   setFormData((prev) => ({ ...prev, phone: e.target.value }));
    // }
    if (name === "isAcceptedRules") {
      return setFormData((prev) => ({
        ...prev,
        isAcceptedRules: !prev.isAcceptedRules,
      }));
    }
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            className={s.input}
            name="username"
            onChange={handleChangeInput}
            value={username}
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            name="email"
            onChange={handleChangeInput}
            value={email}
          />
        </label>
        <label className={s.label}>
          <span>Phone:</span>
          <input
            className={s.input}
            name="phone"
            onChange={handleChangeInput}
            value={phone}
          />
        </label>
        <label className={s.label}>
          <span>Course:</span>
          <select
            className={s.input}
            name="course"
            onChange={handleChangeInput}
            value={course}
          >
            <option value="backend"> Backend</option>
            <option value="frontend"> Frontend</option>
            <option value="devops"> DevOps</option>
          </select>
        </label>
        <label className={s.label}>
          <span>About:</span>
          <textarea
            className={s.input}
            name="about"
            onChange={handleChangeInput}
            value={about}
          />
        </label>
        <div>
          <span>Level:</span>
          <label>
            <input
              checked={"junior" === level}
              onChange={handleChangeInput}
              type="radio"
              name="level"
              value="junior"
            />
            Junior
          </label>
          <label>
            <input
              checked={"middle" === level}
              onChange={handleChangeInput}
              type="radio"
              name="level"
              value="middle"
            />
            Middle
          </label>
          <label>
            <input
              checked={"senior" === level}
              onChange={handleChangeInput}
              type="radio"
              name="level"
              value="senior"
            />
            Senior
          </label>
        </div>

        <label>
          <input
            name="isAcceptedRules"
            checked={isAcceptedRules}
            onChange={handleChangeInput}
            type="checkbox"
          />
          I accept all rules!
        </label>

        <button className={s.button}>Apply!</button>
      </form>
    </div>
  );
};

export default ControlledForm;
