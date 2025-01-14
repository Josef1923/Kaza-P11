import { useParams } from "react-router-dom";
import {useHousing} from "../manager/FetchHousingData"
import { useMemo } from "react";

function FicheLogement () {    
    const {id} = useParams();    
    const housingDatas = useHousing();
    const housingData = useMemo(() => housingDatas.find((housingData) => housingData.id === id), [housingDatas, id]);
    
    return housingData && <>
    <h1>{housingData.title}</h1>
    </>
}

export default FicheLogement