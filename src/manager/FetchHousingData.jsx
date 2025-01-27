import { useState, useEffect } from "react";

function useHousing() {
    const [housingDatas, setHousingDatas] = useState([]);

    useEffect(() => {

        const dataUrl = `${import.meta.env.BASE_URL}HousingDatas.json`;

        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => setHousingDatas(data))
            .catch((error) => console.error("Erreur lors du fetch des données", error));
    }, []);

    return housingDatas;
}

export { useHousing };