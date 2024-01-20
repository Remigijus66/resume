const curriculumVitae = {
  personal: {
    firstName: 'Remigijus',
    lastName: 'Bartaška',
    tel: '+370 686 65589',
    eMail: 'remigijus.bartaska@gmail.com',
    gitHub: 'https://github.com/Remigijus66',
    linkedin: 'www.linkedin.com/in/remigijus-bartaska'
  },
  skills: [ 'JavaScript', 'React.js', 'Node.js', 'REST API', 'OOP', 'Github', 'Responsive Web design', 'CSS','HTML', ],
  education: [
    {
      institution: 'Code Academy',
      course: 'TypeScript',
      dates: '2022', 
      degree: 'Diploma of Education'
      },
    {
      institution: 'Vilnius University, Faculty of Economics',
      studies: 'Economic data management systems',
      // graduated: '1991',
      degree: 'Master of Science'
    },
  ],
  workExperience: [
    {
      company: 'Boomio',
      dates: '2023-2024',
      position: 'FrontEnd developer',
      responsibilities: 'Develop new features of React app, Build online games OOP',
    },
    {
      company: 'UAB Inkstar Europe',
      dates: '2019-2021',
      position: 'Development Manager',
      responsibilities: 'Launching and running the tea shop chain'
    },
    {
      position: 'Career at financial institutions',
      dates: 'till 2017',
    },
    ],
  languages: {
    english: 'Fluent written and oral',
    russian: 'Fluent written and oral'
  }
}
export default curriculumVitae
