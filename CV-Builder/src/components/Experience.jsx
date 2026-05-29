function Experience({ isEditing, draft, expInfo }) {
  if (isEditing) {
    return (
      <div>
        <span>{draft.position}</span>
        <span>{draft.company}</span>
        <span>{draft.city}</span>
        <span>{draft.state}</span>
        <span>{draft.date}</span>
      </div>
    );
  }
  return (
    <div>
      <span>{expInfo.position}</span>
        <span>{expInfo.company}</span>
        <span>{expInfo.city}</span>
        <span>{expInfo.state}</span>
        <span>{expInfo.date}</span>
    </div>
  );
}
export default Experience;
