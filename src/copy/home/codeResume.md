```js
// About Me:

export default class WilliamDuraney {
  constructor () {
    skillSet: {
      personal: [
        "Quick learner", "Clean coder",
        "Professionalism", "Team Player",
        "Extrovert", "Critical Thinker",
      ],
      tech: {
        skilled: [
          "JS", "React.js", "Node.js", "Express.js",
          "Semantic HTML", "CSS", "Sass/SCSS",
          "MongoDB", "GraphQL", "SQLite"
        ],
        familiarButStillLearning: [
          "Vue.js", "Next.js", "RubyOnRails"
        ]
      },
    },
    codingExperience: {
      startDate: 2020-01,
      title: "Freelance Web Designer",
      responsibilities: [
        "Empathize with customers and build websites and web apps to meet their needs and specifications.",
        "Maintain consistent and  professional communication with clients, both written and in person.",
        "Develop responsive, interactive websites with a mobile-first design strategy.",
        "Connect clients to full-stack deployment services to provide cost-effective, individualized solutions.",
      ]
    },
    hobbies: ["Soccer", "Cycling", "Coffee", "Music"],
    contactInfo: {
      email: "william.duraney@gmail.com",
      phone: "614-598-6090",
      linkedIn: "www.linkedin.com/in/william-duraney",
      gitHub: "www.github.com/robobunny"
    }
  },
  workOn(projects) {
    for (let project of projects) {
      provide(skillSet)
      provide(teamwork)
      provide(communication)
      return valueToYourTeam
    }
  },
  contactMe() {
    const valueProvided = this.workOn(yourTeamsProjects)
    const shouldYouHireMe = valueProvided > salary ? true : false
    if (shouldYouHireMe) {
      contactMe({
        mailto: this.contactInfo.email,
        subject: "I'd like to hire you!"
      })
    } else {
      contactMeAnyway({
        mailto: this.contactInfo.email,
        subject: "Howdy!"
      })
    }
  },
}
```
