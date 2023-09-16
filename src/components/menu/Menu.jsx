import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#/intro#edu">Education</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#/intro#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#/intro#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#/intro#testimonials">Certifications</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#/intro#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
