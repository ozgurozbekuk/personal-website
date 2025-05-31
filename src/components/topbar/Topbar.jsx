import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';



function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#" className="logo">OzgurDev</a>
          <div className="itemContainer">
              <PersonIcon className="icon"/>
              <a className="linkedin" href="http://www.linkedin.com/in/ozgurozbekuk" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a>
          </div>
          <div className="itemContainer">
              <EmailIcon className="icon" />
              <span>ozgurozbek.uk@gmail.com</span>
          </div>
          <div className="itemContainer">
              <DownloadForOfflineIcon className="icon" />
              <a
                href="./assets/ozgurozbekCV.pdf"
                className="linkedin"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
              </a>
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
