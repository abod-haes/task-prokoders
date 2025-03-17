import { Fragment } from "react";
import { navbarArray } from "@/lib/const";
import { NavbarLinks } from "./navbarLink/navbarLinks";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "../button";
export const Navbar = () => {
    return (
        <Fragment>
            <div className="menu w-[278px] h-screen flex flex-col justify-between py-6 relative bg-white border-e px-[15px]">
                <ul className="flex flex-col items-start gap-[10px] ">
                    <li className="text-mainBlue font-bold text-lg ps-4">
                        logo
                    </li>
                    {navbarArray.map((link) => {
                        return <NavbarLinks key={link.id} {...link} />;
                    })}
                </ul>
                <Button className="!justify-start">
                    <span className="flex gap-2 items-center">
                        <LogoutIcon />
                        <span className="text-[14px] font-[500] text-main ">
                            Log out
                        </span>
                    </span>
                </Button>
            </div>
        </Fragment>
    );
};
