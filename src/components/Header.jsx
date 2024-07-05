import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Button from "../utils/Button";
function Header() {
  return (
    <header className="">
      <nav className="mx-auto flex w-11/12 justify-between rounded-full h-20 bg-black items-center px-2 border">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-28" />
          </Link>
        </div>
        <div>
          <Button Icon={Menu} iClass={""} className={""} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
