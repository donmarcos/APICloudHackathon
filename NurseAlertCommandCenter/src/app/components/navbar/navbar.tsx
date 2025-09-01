import Image from "next/image";
import NavLinks from "../navlinks/navlinks";
import Profile from "../profile/profile";
import { linkArray, defaultProfile } from "../../utils/app-data";

const NavBar = () => {
    const links = linkArray;
    const profile = defaultProfile;
    return (
        <div className="w-full text-black bg-customWhite rounded-full py-1 px-6 grid grid-cols-[1fr_2fr_1fr] gap-4 items-center shadow">
            <div className="hover:cursor-pointer">
                <Image
                    src="/TestLogo.svg"
                    width={210.5}
                    height={100}
                    alt="Hero Icon"
                    priority={true}
                    className="w-auto h-auto"
                />
            </div>
            <NavLinks navLinks={links} />
            <Profile profile={profile} />
        </div>
    );
};

export default NavBar;
