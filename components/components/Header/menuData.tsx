import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Futbol",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 1.1,
        title: "Fútbol",
        path: "/deportes/futbol",
        newTab: false,
      },
      {
        id: 1.2,
        title: "Baloncesto",
        path: "/deportes/baloncesto",
        newTab: false,
      },
      // puedes agregar más submenús aquí
    ],
  },
  {
    id: 2,
    title: "Deportes",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 2.2,
        title: "Ruleta",
        path: "/casino/ruleta",
        newTab: false,
      },
     
      // puedes agregar más submenús aquí
    ],
  },

  {

    id: 3,
    title: "Casino",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Academia",
    path: "/tutorials",
    newTab: false,
  },
  {
    id: 5,
    title: "Glosario",
    path: "/",
    newTab: false,
  },

 
 
 
 
];
export default menuData;
