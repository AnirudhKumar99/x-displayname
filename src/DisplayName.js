import { useState } from "react";

export const DisplayName = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === "" || lastname === "") {
      return;
    }
    setFullName(`${firstname} ${lastname}`);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        style={{ marginTop: "20px", marginBottom: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstname">FirstName:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          width={"100px"}
          onChange={(e) => {
            setFirstname(e.target.value);
            setFullName("");
          }}
          required
        />
        <br />
        <label htmlFor="lastname">Lastname:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
            setFullName("");
          }}
          required
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <p style={{ display: fullname !== "" ? "block" : "none" }}>
        Full Name: {firstname} {lastname}{" "}
      </p>
    </div>
  );
};
