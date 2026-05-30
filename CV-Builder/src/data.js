const sections = [
  {
    title: "Personal Details",
    key: "personal",
    type: "single",
    fields: [
      { id: "fullName", placeholder: "John Doe", type: "text", label: "Full Name" },
      { id: "email", placeholder: "123@gmail.com", type: "email", label: "Email" },
      { id: "phone", placeholder: "1234567890", type: "text", label: "Phone" },
      { id: "address", placeholder: "New York Ave", type: "text", label: "Address" },
    ],
  },

  //   {
  //     title: "Education",
  //     key: "education",
  //     fields: [
  //       { name: "", placeholder: "John Doe", type: "text" },
  //       { name: "email", placeholder: "123@gmail.com", type: "email" },
  //       { name: "phone", placeholder: "1234567890", type: "text" },
  //       { name: "address", placeholder: "New York Ave", type: "text" },
  //     ],
  //   },

  {
    title: "Experience",
    key: "experience",
    type: "multi",
    previewField: "position",
    fields: [
      { id: "position", placeholder: "Junior Intern", type: "text", label: "Position" },
      { id: "company", placeholder: "Company XYZ", type: "text", label: "Company"  },
      { id: "city", placeholder: "Dallas", type: "text", label: "City" },
      { id: "state", placeholder: "Texas", type: "text", label: "State"  },
      { id: "date", placeholder: "", type: "date", label: "Date"  },
    ],
  },
];

export default sections;
