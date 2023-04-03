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
    {
      position: "",
      company: "",
      city: "",
      fromYear: "",
      toYear: "",
      id: Date.now() + 1
    },
  ]
}

export default emptyCV