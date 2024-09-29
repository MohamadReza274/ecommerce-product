import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Cart from "./Cart";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ProfileImage from "@/assets/images/image-avatar.png";
import LogoImage from "@/assets/images/logo.svg";

const navItems = [
  { id: 1, value: "Collections" },
  { id: 2, value: "Man" },
  { id: 3, value: "Woman" },
  { id: 4, value: "About" },
  { id: 5, value: "Contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sm:justify-around p-2 border-b">
      <div className="flex items-center">
        {/* Menubar for mobile */}
        <div className=" sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <MenuIcon className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="max-w-[250px] w-full">
              <ul className="list-none flex flex-col  gap-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      className="transition-all hover:tracking-wide text-gray-600 hover:text-gray-950"
                      href="#"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <img className=" sm:mr-4" src={LogoImage} alt="logo" />

        <ul className="list-none items-center gap-x-4 hidden sm:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className="transition-all hover:tracking-wide text-gray-600 hover:text-gray-950"
                href="#"
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-2">
        <Cart />
        <Avatar className="">
          <AvatarImage
            className="object-cover"
            alt="profile"
            src={ProfileImage}
          />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
