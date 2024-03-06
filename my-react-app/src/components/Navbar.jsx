import './Navbar.css';
import Link from './Link';

function Navbar () {

    const x = 3000; 
    return (
        <>
        <nav>{x}</nav>
            <ul>
                <li>
                    <Link>Contact</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Menu</Link>
                </li>
                <li>
                    <Link>Shop</Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar