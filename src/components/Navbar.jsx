import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link className="linkNav" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="linkNav" to="/bio">
                            Bio
                        </Link>
                    </li>
                    <li>
                        <Link className="linkNav" to="/lezioni">
                            Lezioni
                        </Link>
                    </li>
                    <li>
                        <Link className="linkNav" to="/contatti">
                            Contatti
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;