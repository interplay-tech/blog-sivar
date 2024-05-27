"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from './menuData';
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"




const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);


  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY > 0)


    };

    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);





  // submenu handler
  const handleSubmenu = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  const [openIndex, setOpenIndex] = useState(-1);


  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-[#202a39]  text-white ${sticky
            ? "dark:bg-[#202a39]-dark dark:shadow-sticky-dark fixed z-[9999]  !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute  "
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-50 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-4 lg:py-4" : "py-4"
                  } `}
              >
                <Image
                  src="/images/logo/sivarbetlogo.png"
                  alt="logo"
                  width={120}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/sivarbetlogo.png"
                  alt="logo"
                  width={120}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 bg-white ${navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <NavigationMenu
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-[#202a39] px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                    }`}
                >



                  <NavigationMenuList className="block lg:flex lg:space-x-12 text-white">

                    {menuData.map((menuItem, index) => (
                      <NavigationMenuItem key={index} className="group relative">
                       
                          {menuItem.path ? (
                            <NavigationMenuLink
                              href={menuItem.path}
                              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                                  ? "text-primary text-white"
                                  : "text-dark hover:bg-[#202a39] text-white/70 dark:hover:text-white"
                                }`}
                            >
                              {menuItem.title}
                            </NavigationMenuLink>

                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${openIndex === index
                                  ? "text-primary text-white"
                                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                                }`}
                            >
                              {menuItem.title}
                             
                            </button>
                          )}

                         





                    
                        {menuItem.submenu && menuItem.submenu.map((submenu, subIndex) => (
                          <NavigationMenuContent key={subIndex} className="bg-[#202a39]">
                            <ul className="grid w-[800px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] text-white  ">
                             
                                <NavigationMenuList
                                  className="group flex flex-1 list-none items-center justify-center space-x-1"
                                >
                                  {menuItem.submenu && menuItem.submenu.map((submenu, subIndex) => (
                                    <NavigationMenuLink key={subIndex}   className="group relative">

                                    
                                        {submenu.title}
                                     
                                    </NavigationMenuLink>
                                  ))}
                                </NavigationMenuList>
                              
                            </ul>
                            
                          </NavigationMenuContent>
                          ))}

                      </NavigationMenuItem>


                    ))}

                   


                  </NavigationMenuList>

                </NavigationMenu>

              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">

                {/*    <div>
                  <ThemeToggler />
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
