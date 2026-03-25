import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/biography">Biography</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/legacy">Legacy</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
            <p>Created for the History of Georgia</p>
            <p>&copy; {new Date().getFullYear()} King David IV Project. All rights reserved.</p>
        </div>
    )
}

export default Footer