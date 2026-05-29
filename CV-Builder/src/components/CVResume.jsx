import Experience from "./Experience";

function CVResume({formData, draftInput}) {
  return (
    <div className="cvresume">
      <div className="personalDetails">
        <h1>{formData.personal.fullName}</h1>
        <div>
          <span>{formData.personal.phone}</span>
          <span>{formData.personal.email}</span>
          <span>{formData.personal.address}</span>
        </div>
      </div>
      <div className = "experienceContainer">
        {formData.experience.map((input, index) =>(
            <Experience
                key={index}
                isEditing = {input.isEditing}
                expInfo = {input}
                draft = {draftInput}
            />
        ))}
      </div>
    </div>
  );
}

export default CVResume;
