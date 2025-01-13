import { useState, useEffect } from "react";

export function useHousing() {
    const [housingDatas, setHousingDatas] = useState([]);

    useEffect(() => {
        fetch("/HousingDatas.json")
            .then((response) => response.json())
            .then((data) => setHousingDatas(data))
            .catch((error) => console.error("Erreur lors du fetch des données", error));
    }, []);

    return housingDatas;
}