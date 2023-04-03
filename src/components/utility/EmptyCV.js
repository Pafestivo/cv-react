const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    role: "",
    address: "",
    number: "",
    email: "",
    description: "",
  },
  experience: [
    {
      position: "",
      company: "",
      city: "",
      fromYear: "",
      toYear: "",
      id: Date.now()
    },
  ],
  education: [
    {
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      fromYear: "",
      toYear: "",
      id: Date.now()
    },
  ]
}

export default emptyCV