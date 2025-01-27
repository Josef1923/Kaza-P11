import { useState, useEffect } from "react";

function useHousing() {
    const [housingDatas, setHousingDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const dataUrl = `${import.meta.env.BASE_URL}HousingDatas.json`;

        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => {
                setHousingDatas(data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Erreur lors du fetch des données", error);
                setLoading(false);
            });
    }, []);

    return {housingDatas, loading};
}

export { useHousing };