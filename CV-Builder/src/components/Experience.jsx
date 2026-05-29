function Experience({ isEditing, draft, expInfo }) {
  if (isEditing) {
    return (
      <div>
        <div>
          <span>{draft.position}</span>
          <span>{draft.date}</span>
        </div>

        <div>
          <span>{draft.company}</span>
          <span>{draft.city}</span>
          <span>{draft.state}</span>
        </div>
      </div>
    );
  }
  return (
    <div>
        <div>
          <span>{expInfo.position}</span>
          <span>{expInfo.date}</span>
        </div>

        <div>
          <span>{expInfo.company}</span>
          <span>{expInfo.city}</span>
          <span>{expInfo.state}</span>
        </div>
      </div>
  );
}
export default Experience;
