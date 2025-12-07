import { NavLink } from "@/shared/ui";
import { ToDown } from "@/shared/ui/ToDown/ToDown";

export const Header = () => {

    return (
        <ToDown>
            <nav>
                <ul className="flex gap-5">
                    <NavLink href="#hero" title="Home"/>
                    <NavLink href="#about" title="About"/>
                    <NavLink href="#projects" title="Projects"/>
                    <NavLink href="#contact" title="Contact"/>
                    <NavLink href="#hero" title=""/>
                </ul>
            </nav>
        </ToDown>
    )
}