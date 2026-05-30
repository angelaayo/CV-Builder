import { forwardRef } from "react";

const DropdownSection = forwardRef(({title, children, onToggle}, ref) => {
  return (
    <>
      <div className="dropdownContainer">
        <details ref={ref} onToggle={onToggle}>
          <summary>{title}</summary>
          {children}
        </details>
      </div>
    </>
  )
})

export default DropdownSection;
