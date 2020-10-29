export const navRoutes = [
  // route {
  //   path: String! e.g. "/blog"
  //   name: String! e.g. "blog" displayed on Nav bar
  //   navOrder:
  //     Int => sort order for navigation Bar
  //     -1 => do not show on navigation bar
  //   displayOnHome: Boolean! whether link will be displayed on the home page
  //  
  {
    path: "/",
    name: "Home",
    navOrder: 0
  },
  {
    path: "/blog",
    name: "My Blog",
    navOrder: 3
  },
  {
    path: "/projects",
    name: "My Projects",
    navOrder: 2
  },
  {
    path: "/contact",
    name: "Contact Me",
    navOrder: 4
  },
  {
    path: "/about",
    name: "About Me",
    navOrder: 1
  }
]
