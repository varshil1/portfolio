import "./topbar.scss"
import {Person,Mail,LinkedIn,GitHub,TrendingUp} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"><div class="logo">
                    <img src="assets/logo.jpg" alt="" />
  
</div></a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 (602)-517-2465</span>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <span><a href="https://www.linkedin.com/in/varshil-shah-505610187/" target="_blank">/varshil-shah-505610187/</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span><a href="mailto:varshilshah0203@gmail.com" target="_blank">varshilshah0203@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <span><a href="https://github.com/varshil1" target="_blank">/varshil1</a></span>
                    </div>
                    <div className="itemContainer">
                        <TrendingUp className="icon" />
                        <span><a href="assets/resume.pdf" download="newfilename">My CV</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
