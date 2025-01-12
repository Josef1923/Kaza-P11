/*
  Composant pour la page "À propos".
*/

import Banner from "../components/TempBanner"
import BannerAPropos from "../assets/Images/BannerAPropos.png"

function APropos () {
    return (
    <div>
      <Banner images={BannerAPropos}/>
    </div>)
}

export default APropos