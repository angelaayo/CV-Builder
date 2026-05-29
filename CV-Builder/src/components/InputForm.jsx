function InputForm({title, placeholder, type, inputValue, onChange}) {
  return (
    <>
      <div className="inputForm">
        <label>{title}</label>
        <input 
        type={type} 
        placeholder={placeholder}
        value = {inputValue}
        onChange={onChange}
        ></input>
      </div>
    </>
  );
}

export default InputForm;
