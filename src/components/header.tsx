import { useState } from "react";
import { Link, NavLink } from "react-router-dom"

interface NavLinkRenderProps {
    isActive: boolean;
}

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const getNavLinkClass = ({ isActive }: NavLinkRenderProps): string => {
        let classes = "font-medium text-brand-gold hover:underline hover:font-bold";
        
        if (isActive) {
            classes += " underline font-bold"; 
        }
        return classes;
    };


    return (
        <header className="bg-brand-purple shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link to="/" className="text-xl font-bold text-brand-gold hover:font-extrabold">
                        {`>`} Arthur Rodrigues_
                    </Link>
                </div>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex flex-row gap-6">
                    <NavLink to="/sobre" className={getNavLinkClass}>Sobre</NavLink>
                    <NavLink to="/experiencias" className={getNavLinkClass}>Experiências</NavLink>
                    <NavLink to="/habilidades" className={getNavLinkClass}>Habilidades</NavLink>
                    <NavLink to="/projetos" className={getNavLinkClass}>Projetos</NavLink>
                </nav>

                {/* Navegação Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Open navigation menu"
                        className="text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-brand-purple shadow-lg absolute top-full left-0 right-0 z-40">
                    <div className="flex flex-col items-center py-4 gap-4">
                        <NavLink to="/sobre" className={getNavLinkClass} onClick={toggleMobileMenu}>Sobre</NavLink>
                        <NavLink to="/experiencias" className={getNavLinkClass}>Experiências</NavLink>
                        <NavLink to="/habilidades" className={getNavLinkClass} onClick={toggleMobileMenu}>Habilidades</NavLink>
                        <NavLink to="/projetos" className={getNavLinkClass} onClick={toggleMobileMenu}>Projetos</NavLink>
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Header