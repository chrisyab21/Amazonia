import { useEffect, useRef, useState } from "react"
import logo from '../assets/images/Arbol3.png'



export const NavBar = () => {


    const [menuState, setMenuState] = useState<boolean>(false);
    
    const [scrolled, setScrolled] = useState<boolean>(false);

    const navBarRef = useRef<HTMLElement>(null);

    const navBarRoutes: string[] = ['PROJECT', 'VISION', 'MISSION', 'CONTACT'];

    const [activeRoute, setActiveRoute] = useState<string>(navBarRoutes[0]);


    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {

            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const onClickMenu = () => {

        setMenuState(state => !state)

        const hola: string = `asdasd ${menuState}`
    }




    return (
        <nav className={`bg-green-950 ${!scrolled && 'sm:bg-transparent'} transition-colors duration-500 relative z-50 w-full sm:fixed`} ref={navBarRef} >
            <div className="px-2 sm:px-8 lg:px-12">
                <div className="relative flex h-16 items-center">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => onClickMenu()}
                        >

                            {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                            <svg className={`${menuState ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                            <svg className={`${menuState ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="flex sm:mr-auto items-center">
                            <img className="h-8 w-auto" src={logo} alt="Your Company" />
                        </div>
                        <ul className="hidden gap-10 sm:ml-6 sm:flex sm:items-center">
                            {
                                navBarRoutes.map((route) => (
                                    <li key={route}>
                                        <a href={`#${route.toLowerCase()}`}
                                            className={`h-full rounded-md px-3 py-2 text-sm font-medium ${activeRoute === route ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                            onClick={() => setActiveRoute(route)}
                                        >
                                            {route}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            {menuState &&
                (<div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        {
                            navBarRoutes.map((route) => (
                                <a
                                    key={route}
                                    href={`#${route.toLowerCase()}`}
                                    className={`block rounded-md px-3 py-2 text-base font-medium ${activeRoute === route ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                    onClick={() => setActiveRoute(route)}
                                >
                                    {route}
                                </a>
                            ))
                        }
                    </div>
                </div>)
            }
        </nav>
    )
}

