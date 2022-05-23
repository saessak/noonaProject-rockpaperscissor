
import * as React from 'react';
import { Link } from "react-router-dom";

// Link 는 href 비슷한 기능
// 그런데 href 는 페이지 이동후 새로고침 되고
// Link 는 새로고침 안되고 이동(react 는 새로고침할 필요가 없다 single page application 이므로)
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
