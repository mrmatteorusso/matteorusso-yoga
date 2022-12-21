import React from "react";
import praticaEnergizzante from "../img/yogarifugio-praticaenergizzante.jpg"
import praticaMeditativa from "../img/yogarifugio-praticameditativa.jpg"

function Home() {
    return (
        <div className="home" >
            <h3>Yoga workshops a Bormio per Natale</h3>
            {/* <p>Lo Yoga puó offrirti qualcosa: sia che tu abbia 9 o 99 anni,
                che tu sia atletico o con disabilitá, sia che tu voglia lavorare sui tuoi muscoli
                o cercare il senso delle cose
            </p> */}
            <img style={{ width: "100%", padding: "1rem 0" }} src={praticaEnergizzante} alt={"pratica energizzante"} />
            <img style={{ width: "100%" }} src={praticaMeditativa} alt={"pratica energizzante"} />
        </div >
    )
}

export default Home;