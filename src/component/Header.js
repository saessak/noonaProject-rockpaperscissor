
import * as React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        
        <div>
            <Link to="/"></Link>
            <Link to="/Rockpaperscissor">가위바위보</Link>
            <Link to="/Page2">Page2</Link>
            <Link to="/Page3">Page3</Link>
        </div>
    );
}
