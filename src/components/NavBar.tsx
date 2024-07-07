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
        <nav className={`bg-blue-950 relative z-50 w-full md:fixed border-black ${scrolled ? 'border-b-[1px] border-black border-opacity-40' : 'md:bg-transparent'} transition-colors duration-500`} ref={navBarRef} >
            <div className="px-2 sm:px-4 lg:px-10">
                <div className="relative flex h-16 items-center">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                    <div className="flex flex-1 justify-center md:justify-between">
                        <div className="">
                            <img className="h-8" src={logo} alt="Amazonas" />
                        </div>
                        <ul className="hidden gap-6 sm:ml-6 md:flex">
                            {
                                navBarRoutes.map((route) => (
                                    <li key={route} >
                                        <a href={`#${route.toLowerCase()}`}
                                            className={`block h-full content-center text-center py-2 px-3 rounded-md font-rubik text-sm font-medium tracking-[3px] ${activeRoute === route ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
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
                (<div className="md:hidden mx-2 sm:mx-4" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        {
                            navBarRoutes.map((route) => (
                                <a
                                    key={route}
                                    href={`#${route.toLowerCase()}`}
                                    className={`block rounded-md px-3 py-2 text-base font-rubik font-medium tracking-widest ${activeRoute === route ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
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

