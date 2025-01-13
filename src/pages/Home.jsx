import Banner from "../components/Banner"
import BannerHome from "../assets/Images/BannerHome.png"
import "../Styles/Home.css"
import Card from "../components/Card"
import {useHousing} from "../manager/FetchHousingData"

function Home() {

  const housingDatas = useHousing ()
  
  return (
    <div>
      <div>
        <Banner images={BannerHome} className="homeBannerImg"
          text="Chez vous, partout et ailleurs" />
      </div>
      <div className="homeContainer">
        {housingDatas && housingDatas.map((housing) => (
          <Card key={housing.id} cover={housing.cover} title={housing.title} />
        ))}
      </div>
    </div>
  )
}

export default Home