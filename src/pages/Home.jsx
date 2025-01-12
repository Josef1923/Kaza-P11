/*
  Composant pour la page d'accueil.
*/

import Banner from "../components/TempBanner"
import BannerHome from "../assets/Images/BannerHome.png"

function Home() {
  return (
    <div>
      <Banner images={BannerHome} className="HomeBannerImg" 
      text = "Chez vous, partout et ailleurs"/>
    </div>
  )
}

export default Home