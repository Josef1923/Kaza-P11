/*
  Composant pour la page d'accueil.
*/

import Banner from "../components/Banner"
import BannerHome from "../assets/Images/BannerHome.png"
import "../Styles/Home.css"
import Card from "../components/Card"
import housingDatas from "../housingDatas.json"

function Home() {
  return (
    <div>
      <div>
        <Banner images={BannerHome} className="HomeBannerImg"
          text="Chez vous, partout et ailleurs" />
      </div>
      <div className="HomeContainer">
        {housingDatas.map((housing) => (
          <Card key={housing.id} cover={housing.cover} title={housing.title} />
        ))}
      </div>
    </div>
  )
}

export default Home