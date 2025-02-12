import { useParams } from "react-router-dom";
import { useHousing } from "../../manager/FetchHousingData"
import { useMemo } from "react";
import "./style.scss"
import Tag from "../../components/Tag"
import Host from "../../components/Host"
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import Carrousel from "../../components/Carrousel";
import Error from "../404";

function FicheLogement() {
    const { id } = useParams();  //récupère l'id URL  
    const { housingDatas, loading } = useHousing();

    const housingData = useMemo(() =>
        housingDatas.find((housingData) => housingData.id === id),
        [housingDatas, id]
    );

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (!housingData) {
        return <Error />;
    }

    return housingData && (
        <main className="ficheLogement">
            <section>
                <Carrousel picture={housingData.pictures}></Carrousel>
            </section>

            <section className="infos">
                <div className="infoPart1">
                    <h1>{housingData.title}</h1>
                    <p>{housingData.location}</p>
                    <div className="tagContainer">
                        {
                            housingData.tags.map((tag, index) => (<Tag key={index} tag={tag} />))
                        }
                    </div>
                </div>
                <div className="infoPart2">
                    <Host name={housingData.host.name} picture={housingData.host.picture}></Host>
                    <Rating rate={parseInt(housingData.rating)}></Rating>
                </div>
            </section>

            <section>
                <div className="housingCollapseContainer" >
                    <Collapse title="Description" description={housingData.description} />
                    <Collapse title="Équipements" description={
                        <ul>
                            {housingData.equipments.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    } />
                </div>
            </section>
        </main>
    )
}

export default FicheLogement