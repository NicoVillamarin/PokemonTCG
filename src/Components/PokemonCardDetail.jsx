import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import icoFuego from "../../public/elementos/fuego.png"
import icoAgua from "../../public/elementos/agua.png"
import icoElectrico from "../../public/elementos/electrico.png"
import icoAcero from "../../public/elementos/acero.png"
import icoDragon from "../../public/elementos/dragon.png"
import icoHoja from "../../public/elementos/hoja.png"
import icoLucha from "../../public/elementos/lucha.png"
import icoNormal from "../../public/elementos/normal.png"
import icoPsiquico from "../../public/elementos/psiquico.png"
import icoSiniestro from "../../public/elementos/siniestro.png"

const PokemonCardDetail = () => {

    const [card, setCard] = useState(null)
    const { id } = useParams();

    const tipoIconos = {
        Fire: icoFuego,
        Water: icoAgua,
        Metal: icoAcero,
        Lightning: icoElectrico,
        Fighting: icoLucha,
        Colorless: icoNormal,
        Psychic: icoPsiquico,
        Darkness: icoSiniestro,
        Grass: icoHoja,
        Dragon: icoDragon
    }

    useEffect(() => {
        const fetchCardDetail = async () => {
            try {
                const response = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);

                const data = await response.json();
                setCard(data.data);
            } catch (error) {
                console.error("Error fetching card details:", error);
            }
        };
        fetchCardDetail();
    }, [id]);

    if (card === null) {
        return <Loading />
    }
    const { name, images, set, rarity, types, hp, attacks, weaknesses, tcgplayer, resistances } = card;

    return (
        <div>
            <Link to={"/"}>
                <button type="button" className="btn bg-secondary text-light mb-3 button_detail">Back</button>
            </Link>
            <div className="card_detail_container">
                <div className="conteiner_left">
                    <h1>{name}</h1>
                    <img src={images?.large} alt={`${set}-${rarity}`} className="img_detail" style={{width: 400, borderRadius: 20}} />
                </div>
                <div className="container_right">
                    <h2>Set</h2>
                    <img src={set.images.logo} className="img_logo_Card" />
                    <p>Rareza: <span>{rarity}</span></p>
                    <p>Tipo: <span>{types.join(", ")}</span></p>
                    <p>HP: <span>{hp}</span></p>

                    <h3>Ataques: </h3>
                    {attacks?.map((attack, index) => {
                        const attackElements = attack.cost;
                        return (
                            <div key={index}>
                                <p>
                                    {attack.name}: <span>{attack.damage}</span>
                                </p>
                                <div className="energy-icons">
                                    {attackElements?.map((element, elementIndex) => {
                                        const iconoRuta = tipoIconos[element];
                                        if (iconoRuta) {
                                            return <img key={elementIndex} src={iconoRuta} alt={element} className="logo_energy" />;
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        );

                    })}
                    <h3>Debilidades</h3>
                    {weaknesses?.map((weakness, index) => {
                        const iconoRuta = tipoIconos[weakness.type];
                        if (iconoRuta) {
                            return (
                                <p key={index}>
                                    <img src={iconoRuta} alt={weakness.type} className="logo_energy" />: <span>{weakness.value}</span>
                                </p>
                            );
                        } else {
                            return (
                                <p key={index}>
                                    {weakness.type}: <span>{weakness.value}</span>
                                </p>
                            );
                        }
                    })}
                    <h3>Resistencia:</h3>
                    {resistances && resistances.length > 0 ? (
                        resistances?.map((resistan, index) => {
                            const iconoRutaRes = tipoIconos[resistan.type]
                            if (iconoRutaRes) {
                                return (
                                    <p key={index}>
                                        <img src={iconoRutaRes} alt={resistan.type} className="logo_energy" />: <span>{resistan.value}</span>
                                    </p>
                                )
                            }
                            <p key={index}>
                                <img src={iconoRutaRes} alt={resistan.type} className="logo_energy" />: <span>{resistan.value}</span>
                            </p>
                        })
                    ) : (
                        <p>No hay resistencias</p>
                    )}
                    <h3>Precios</h3>
                    <p>Promedio: {tcgplayer?.prices.holofoil?.mid ? `$${tcgplayer?.prices.holofoil.mid}` : 'No hay datos disponibles'}</p>

                </div>
            </div>
        </div>
    )
}

export default PokemonCardDetail