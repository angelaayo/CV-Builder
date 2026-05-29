const sections = [
  {
    title: "Personal Details",
    key: "personal",
    type: "single",
    fields: [
      { name: "fullName", placeholder: "John Doe", type: "text" },
      { name: "email", placeholder: "123@gmail.com", type: "email" },
      { name: "phone", placeholder: "1234567890", type: "text" },
      { name: "address", placeholder: "New York Ave", type: "text" },
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
      { name: "position", placeholder: "John Doe", type: "text" },
      { name: "company", placeholder: "123@gmail.com", type: "email" },
      { name: "city", placeholder: "1234567890", type: "text" },
      { name: "state", placeholder: "New York Ave", type: "text" },
      { name: "date", placeholder: "", type: "" },
    ],
  },
];

export default sections;
