import React from 'react';
import './AttractionList.css'; // Importa o CSS para estilização dos cards

const AttractionList = ({ attractions }) => {
    return (
        <div id="attractions">
            <h2>Atrações</h2>
            <div className="attraction-cards"> {/* Container para os cards */}
                {attractions.map((attraction, index) => ( // Inclui o índice como segundo argumento
                    <div className="attraction-card" key={attraction.id}> {/* Card para cada atração */}
                        <h3>{attraction.name}</h3>
                        <p>Tipo: {attraction.type}</p>
                        <p>Preço: {attraction.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttractionList;
