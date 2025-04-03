import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('nav') && !e.target.closest('.menu-btn')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <h1>SULAIMON IBRAHIM</h1>
            <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <nav className={isMenuOpen ? 'active' : ''}>
                <ul>
                    <li><a href="#work" onClick={handleLinkClick}>Work</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
