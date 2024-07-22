import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Megha Beria</span>
            <div className="social">
                <a href="https://www.instagram.com/"><img src="/instagram.png" alt="" className= "logo"></img></a>
                <a href="https://www.linkedin.com/in/megha-beria-209b75251/"><img src="/linkedin.png" alt="" className= "logo"></img></a>
                <a href="https://github.com/beriamegha8"><img src="/github.png" alt="" className= "logo"></img></a>
            </div>
        </div>
    </div>
  )
}
