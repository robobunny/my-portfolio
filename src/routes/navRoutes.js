export const navRoutes = [
  // route {
  //   path: String! e.g. "/blog"
  //   name: String! e.g. "blog" displayed on Nav bar
  //   navOrder:
  //     Int => sort order for navigation Bar
  //     -1 => do not show on navigation bar
  //  
  {
    path: "/",
    name: "Home",
    navOrder: -1
  },
  {
    path: "/blog",
    name: "My Blog",
    navOrder: 2
  },
  {
    path: "/projects",
    name: "My Projects",
    navOrder: 1
  },
  {
    path: "/contact",
    name: "Contact Me",
    navOrder: 3
  },
  {
    path: "/about",
    name: "About Me",
    navOrder: 0
  }
]
