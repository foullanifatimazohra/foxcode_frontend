import Button from "@/components/ui/Button";
import { Moon, Languages, Menu } from "lucide-react";
import Image from "next/image";

function Header() {
  const openNavigation = true;

  return (
    <header className="py-5 border-b border-primary-gray-200">
      <div className="container px-2 md:mx-auto flex items-center justify-between">
        <Image
          src="/assets/icons/logo/logo.svg"
          alt="foxcode Logo"
          width={110}
          height={20}
        />
        <div className="flex gap-4">
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="gap-4 relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              <Button variant="text" className="px-0">
                <Moon />
              </Button>
              <Button variant="outlined">Get in toutch</Button>
              <Button variant="outlined" startIcon={<Languages />}>
                AR
              </Button>
            </div>
          </nav>

          <Button variant="primary">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
