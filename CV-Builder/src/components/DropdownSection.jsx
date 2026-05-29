import { forwardRef } from "react";

const DropdownSection = forwardRef(({title, children, onToggle}, ref) => {
  return (
    <>
      <div>
        <details ref={ref} onToggle={onToggle}>
          <summary>{title}</summary>
          {children}
        </details>
      </div>
    </>
  )
})

export default DropdownSection;
