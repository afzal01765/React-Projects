import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label htmlFor="gender">Gender*</label>
          <div className="gender-options">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              id="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="other">Other</label>
          </div>
          <label htmlFor="subjects">Your best Subject</label>
          <div className="subject-checkboxes">
            <input
              type="checkbox"
              name="lang"
              id="english"
              checked={subjects.english}
              onChange={() => handleSubjectChange("english")}
            />
            <label htmlFor="english">English</label>
            <input
              type="checkbox"
              name="lang"
              id="maths"
              checked={subjects.maths}
              onChange={() => handleSubjectChange("maths")}
            />
            <label htmlFor="maths">Maths</label>
            <input
              type="checkbox"
              name="lang"
              id="physics"
              checked={subjects.physics}
              onChange={() => handleSubjectChange("physics")}
            />
            <label htmlFor="physics">Physics</label>
          </div>
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <label htmlFor="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <optgroup label="Beginner">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself"
            required
          ></textarea>
          <div className="buttons">
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
