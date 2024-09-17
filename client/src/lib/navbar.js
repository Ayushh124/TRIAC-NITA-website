import { CalendarSearch, FolderKanban, Gem, Home, Images, NotebookPen, SquareUser, UsersRound } from "lucide-react";

const navbaritems = [
    {
        id: 1,
        name: "Home",
        url: "/",
        scrollId: "top",
        icon: Home
      },
      {
        id: 2,
        name: "Events",
        url: "/events",
        scrollId: null,
        icon: CalendarSearch
      },
      {
        id: 3,
        name: "Projects",
        url: "/projects",
        scrollId: null,
        icon: FolderKanban
      },
      {
        id: 4,
        name: "Blogs",
        url: "/blogs",
        scrollId: null,
        icon: NotebookPen
      },
      
      {
        id: 5,
        name: "Teams",
        url: "/teams",
        scrollId: "teams",
        icon: UsersRound
      },
      {
        id: 6,
        name: "Gallery",
        url: "/gallery",
        scrollId: null,
        icon: Images
      },
      // {
      //   id: 7,
      //   name: "About Us",
      //   url: "#about-us",
      //   scrollId: "about-us",
      //   icon: Gem
      // },
      // {
      //   id: 8,
      //   name: "Contact Us",
      //   url: "#contact-us",
      //   scrollId: "contact-us",
      //   icon: SquareUser
      // },

      {
        id: 9,
        name: "Downloads",
        url: "/downloads",
        scrollId: "contact-us",
        icon: SquareUser
      },

      {
        id: 10,
        name: "Faculty",
        url: "/faculty",
        scrollId: "contact-us",
        icon: SquareUser
      },

]

export default navbaritems;