import { useParams } from "react-router-dom";
import { useHousing } from "../manager/FetchHousingData"
import { useMemo } from "react";
import "../styles/HousingSheet.css"
import Tag from "../components/Tag"

function FicheLogement() {
    const { id } = useParams();  //récupère l'id URL  
    const housingDatas = useHousing();

    const housingData = useMemo(() =>
        housingDatas.find((housingData) => housingData.id === id),
        [housingDatas, id]);

    return housingData &&
        <main className="ficheLogement">
            <img src="../src/assets/images/BannerHome.png" className="temporary"></img>
            <h1>{housingData.title}</h1>
            <p>{housingData.location}</p>
            <div className="tagContainer">
                {housingData.tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
            </div>
        </main>
}

export default FicheLogement