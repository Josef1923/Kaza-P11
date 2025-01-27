import Banner from "../../components/Banner"
import BannerHome from "../../assets/images/BannerHome.png"
import "./style.scss"
import Card from "../../components/Card"
import { useHousing } from "../../manager/FetchHousingData"
import { useNavigate } from "react-router-dom"

function Home() {

  const { housingDatas, loading } = useHousing()
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  if (loading) {
    return <div>Chargement des données...</div>; // Affiche un indicateur de chargement
  }


  return (
    <main>
      <div>
        <Banner images={BannerHome} className="homeBannerImg"
          text="Chez vous, partout et ailleurs" />
      </div>
      <div className="homeContainer">
        {housingDatas && housingDatas.map((housing) => (
          <Card key={housing.id} cover={housing.cover} title={housing.title} onClick={() => handleCardClick(housing.id)} />
        ))}
      </div>
    </main>
  )
}

export default Home