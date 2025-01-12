/*
  Composant pour la page d'accueil.
*/

import Banner from "../components/TempBanner"
import BannerHome from "../assets/Images/BannerHome.png"

function Home () {
    return (
        <div>
            <Banner images= {BannerHome} />
            </div>
    )
}

export default Home