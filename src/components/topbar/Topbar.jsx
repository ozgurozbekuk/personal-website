import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';



function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#contact" className="logo">OzgurOdev</a>
          <div className="itemContainer">
              <PersonIcon className="icon"/>
              <span>+90553 8035382</span>
          </div>
          <div className="itemContainer">
              <EmailIcon className="icon" />
              <span>ozgurozbek.uk@gmail.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={() => {
              setMenuOpen(!menuOpen)
            }}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
