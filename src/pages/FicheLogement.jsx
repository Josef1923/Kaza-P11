import { useParams } from "react-router-dom";
import { useHousing } from "../manager/FetchHousingData"
import { useMemo } from "react";
import "../styles/HousingSheet.css"
import Tag from "../components/Tag"
import Host from "../components/Host"
import Collapse from "../components/Collapse";

function FicheLogement() {
    const { id } = useParams();  //récupère l'id URL  
    const housingDatas = useHousing();

    const housingData = useMemo(() =>
        housingDatas.find((housingData) => housingData.id === id),
        [housingDatas, id]);

    return housingData &&
        <main className="ficheLogement">
            <section>
                <img src="../src/assets/images/BannerHome.png" className="temporary"></img>
            </section>

            <section className="infos">
                <div className="infoPart1">
                    <h1>{housingData.title}</h1>
                    <p>{housingData.location}</p>
                    <div className="tagContainer">
                        {housingData.tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
                    </div>
                </div>
                <div className="infoPart2">
                    <Host name={housingData.host.name} picture={housingData.host.picture}></Host>
                </div>
            </section>

            <section>
                <div className="housingCollapseContainer" >
                    <Collapse title="Description" description={housingData.description} />
                    <Collapse title="Équipements" description={(
                        <ul>
                            {housingData.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )} />
                </div>
            </section>
        </main>
}

export default FicheLogement