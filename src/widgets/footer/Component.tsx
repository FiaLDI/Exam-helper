import { NavLink } from "@/shared/ui"

export const Footer = () => {

    return (
        <footer className="flex bg-fuchsia-100 max-w-7xl w-full mx-auto p-5 justify-between">
            <div className="">
                © {new Date().getFullYear()} Stepanov Leonid, Inc.
            </div>
            <nav>
                <ul className="flex gap-5">
                    <NavLink href="#hero" title="Home"/>
                    <NavLink href="#about" title="About"/>
                    <NavLink href="#projects" title="Projects"/>
                    <NavLink href="#contact" title="Contact"/>
                    <NavLink href="#hero" title=""/>
                </ul>
            </nav>
        </footer>
    )
}