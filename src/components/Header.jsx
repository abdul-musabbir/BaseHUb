import { Menu, X } from "lucide-react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import cn from "../lib/cn";
import Button from "../utils/Button";
let initialState = false;
const reducer = (state, action) => {
  switch (action) {
    case "drop":
      return !state;
    default:
      return state;
  }
};
function Header() {
  const [drop, dispatch] = useReducer(reducer, initialState);
  return (
    <header className="py-4">
      <nav className="mx-auto flex w-11/12 justify-between rounded-full h-20 bg-black items-center px-4 border-b border-gray-700">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-28" />
          </Link>
        </div>
        <div>
          <Button
            Icon={drop ? X : Menu}
            iClass={"text-white size-12"}
            className={""}
            onClick={() => dispatch("drop")}
          />
        </div>

        <div
          className={cn("absolute top-24 text-white w-full left-0 py-10", {
            " hidden ": !drop,
          })}
        >
          <div className="text-center flex flex-col gap-8 mx-auto w-11/12 border-gray-900 rounded-3xl border-2 py-7">
            <ul className="flex flex-col gap-5 text-xl">
              <li>
                <Link to={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/documention"}>Documention</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/changelog"}>Changelog</Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-5">
              <li>
                <Button className={"text-xl border px-8 py-3 rounded-full"}>
                  Log In
                </Button>
              </li>
              <li>
                <Button
                  className={
                    "text-xl px-8 py-3 border rounded-full bg-orange-600"
                  }
                >
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
