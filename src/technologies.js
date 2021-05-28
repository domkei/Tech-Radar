// THIS FILE PROVIDES ALL THE DATA FOR THE CHART
// U CAN ADD NEW STATUSES, CATEGORIES AND TECHNOLOGIES
//-----------------------------------------------------

// Add statuses here
export const statuses = [
  {
    name: "hold",
    color: "rgb(239, 175, 169)",
  },
  {
    name: "assess",
    color: "rgb(251, 219, 132)",
  },
  {
    name: "trial",
    color: "rgb(147, 210, 194)",
  },
  {
    name: "adopt",
    color: "rgb(147, 196, 125)",
  },
];

// ADD Categories here
export const categories = ["techniques", "languages & framworks", "tools", "platform"];

export const technologies = [
  {
    name: "VueJS",
    category: "languages & framworks",
    status: "adopt",
  },
  {
    name: "EmberJs",
    category: "languages & framworks",
    status: "hold",
  },
  {
    name: "Svelte",
    category: "languages & framworks",
    status: "adopt",
  },
  {
    name: "Symphony",
    category: "languages & framworks",
    status: "hold",
  },
  {
    name: "Docker",
    category: "platform",
    status: "hold",
  },
  {
    name: "Confluence",
    category: "platform",
    status: "hold",
  },
  {
    name: "Nginx",
    category: "platform",
    status: "trial",
  },
  {
    name: "Javascript",
    category: "languages & framworks",
    status: "trial",
  },
  {
    name: "jquery",
    category: "languages & framworks",
    status: "hold",
  },
  {
    name: "Git",
    category: "tools",
    status: "trial",
  },
  {
    name: "Bitbucket",
    category: "tools",
    status: "adopt",
  },
  {
    name: "Gitlab",
    category: "tools",
    status: "assess",
  },
  {
    name: "Gulp",
    category: "tools",
    status: "adopt",
  },
  {
    name: "agile",
    category: "techniques",
    status: "assess",
  },
  {
    name: "scrum",
    category: "techniques",
    status: "trial",
  },
  {
    name: "kanban",
    category: "techniques",
    status: "hold",
  },
  {
    name: "jira",
    category: "platform",
    status: "assess",
  },
];
