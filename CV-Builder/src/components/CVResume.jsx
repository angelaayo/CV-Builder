import Experience from "./Experience";

function CVResume({ formData, draftInput }) {
  return (
    <div className="cvresume">
      <div className="personalContainer">
        <h1>{formData.personal.fullName}</h1>
        <div>
          <span>{formData.personal.phone}</span>
          <span>{formData.personal.email}</span>
          <span>{formData.personal.address}</span>
        </div>
      </div>
      <div className="summary">
        <div>Professional Summary</div>
        {/* <div>{formData.summary.text}</div> */}
      </div>
      <div className="experienceContainer">
        <div>Work Experience</div>
        {formData.experience.map((input, index) => (
          <Experience
            key={index}
            isEditing={input.isEditing}
            expInfo={input}
            draft={draftInput}
          />
        ))}
      </div>
      <div className="educationContainer">
        <div>Education</div>
        {/* load component by looping over education */}
      </div>

      <div className = "skillsContainer">
        <div>Skills</div>
        {/* load component by looping over skills */}
      </div>
    </div>
  );
}

export default CVResume;
