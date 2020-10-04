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
    name: "home",
    navOrder: -1
  },
  {
    path: "/blog",
    name: "blog",
    navOrder: 2
  },
  {
    path: "/projects",
    name: "projects",
    navOrder: 1
  },
  {
    path: "/contact",
    name: "contact",
    navOrder: 3
  },
  {
    path: "/about",
    name: "about",
    navOrder: 0
  }
]
