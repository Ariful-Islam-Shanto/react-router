import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' }
      ];
      
    return (
        <nav className='bg-blue-950 text-black p-6'>
            <div className='md:hidden text-xl' onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=''></AiOutlineMenu>
                }
            </div>
            
            <ul className={`md:flex absolute md:static px-6 duration-1000 rounded-lg bg-gray-600 md:bg-blue-950
            ${open ? 'top-14' : '-top-32'}
            text-white`}>
                {
                routes.map(route => <Link key={route.id} route={route} ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;