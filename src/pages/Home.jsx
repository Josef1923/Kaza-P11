/*
  Composant pour la page d'accueil.
*/

import Banner from "../components/TempBanner"
import BannerHome from "../assets/Images/BannerHome.png"
import "../Styles/Home.css"

function Home() {
  return (
    <div>
    <div>
      <Banner images={BannerHome} className="HomeBannerImg" 
      text = "Chez vous, partout et ailleurs"/>
    </div>    
    <div className="HomeContainer"></div>
    </div>
  )
}

export default Home