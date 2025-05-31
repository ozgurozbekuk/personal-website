import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {realLife,reactApp,nextjs,wordpressWebsite,fullStackApp,python} from "../../data";

function Portfolio() {

  const [ selected,setSelected] = useState("featured");
  const [data,setData] = useState([])

  const list = [
    {
      id: "real",
      title: "Real Life",
    },
    {
      id: "react",
      title: "React App",
    },
    {
      id: "nextjs",
      title: "Next.js App",
    },
    {
      id:"wordpress",
      title:"Wordpress Website"
    },
    {
      id: "fullstack",
      title: "Full Stack App",
    },
    {
      id: "python",
      title: "Python",
    },
  ]

  useEffect(() =>{

    switch(selected){
      case "real":
        setData(realLife);
        break;
        case "react":
        setData(reactApp);
        break;
        case "nextjs":
        setData(nextjs);
        break;
        case "wordpress":
        setData(wordpressWebsite);
        break;
        case "fullstack":
        setData(fullStackApp);
        break;
        case "python":
        setData(python);
        break;
        default:
          setData(realLife)
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
        {list.map((item) =>(
            <PortfolioList title={item.title} active={selected === item.id } setSelected={setSelected} id={item.id}/>
        ))}
        </ul>
        <div className="container">
            {data.map((d)=>(
              <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
              </div>
            ))}
          
        </div>
    </div>
  )
}

export default Portfolio
