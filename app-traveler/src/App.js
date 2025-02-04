import React, { useState } from 'react'; // Importa a biblioteca React e o hook useState
import Navbar from './components/navbar'; // Importa o componente Navbar
import AttractionFilter from './components/AttractionFilter'; // Importa o componente de filtro de atrações
import AttractionList from './components/AttractionList'; // Importa o componente que lista as atrações
import AddAttraction from './components/AddAttraction'; // Importa o novo componente para adicionar atrações
import attractionsData from './data/attractions'; // Importa os dados das atrações
import './index.css'; // Importa o arquivo de estilos index.css
import './App.css'; // Importa o arquivo de estilos App.css

const App = () => {
    const [filteredAttractions, setFilteredAttractions] = useState(attractionsData); // Estado para as atrações filtradas
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto
    const [isAddAttractionVisible, setIsAddAttractionVisible] = useState(false); // Estado para controlar a visibilidade do formulário de adicionar atrações
    const [isFilterVisible, setIsFilterVisible] = useState(false); // Estado para controlar a visibilidade do filtro
    const [isSearchVisible, setIsSearchVisible] = useState(false); // Estado para controlar a visibilidade da barra de busca

    const handleSearch = (term) => { // Função para lidar com a busca
        const filtered = attractionsData.filter(attraction => // Filtra as atrações com base no termo de busca
            attraction.name.toLowerCase().includes(term.toLowerCase()) // Verifica se o nome da atração inclui o termo
        );
        setFilteredAttractions(filtered); // Atualiza as atrações filtradas
    };

    const handleFilterChange = (type, price) => { // Função para lidar com mudanças de filtro
        let filtered = attractionsData; // Começa com todas as atrações

        if (type) { // Se um tipo de atração for especificado
            filtered = filtered.filter((attraction) => attraction.type === type); // Filtra por tipo
        }

        if (price) { // Se um preço for especificado
            filtered = filtered.filter((attraction) => attraction.price === price); // Filtra por preço
        }

        setFilteredAttractions(filtered); // Atualiza as atrações filtradas
    };

    const handleAddAttraction = (newAttraction) => { // Função para adicionar uma nova atração
        attractionsData.push(newAttraction); // Adiciona a nova atração
        setFilteredAttractions([...attractionsData]); // Atualiza a lista de atrações
    };

    return ( // Renderiza o componente
        <div className="App"> {/* Div principal do aplicativo */}
            <header className="hamburger-menu"> {/* Cabeçalho com menu hambúrguer */}
                <button 
                    className="menu-btn" // Botão do menu
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
                >
                    {'☰'} {/* Ícone do menu */}
                </button>
                <h1>Travel Guide</h1> {/* Título do aplicativo */}
                {isMenuOpen && ( // Se o menu estiver aberto
                    <div className="menu-content"> {/* Conteúdo do menu */}
                        <button className="menu-item" onClick={() => setIsAddAttractionVisible(!isAddAttractionVisible)}>
                            Adicionar Atração
                        </button> {/* Botão para adicionar nova atração */}
                        <button className="menu-item" onClick={() => setIsFilterVisible(!isFilterVisible)}>
                            Filtrar
                        </button> {/* Botão para mostrar/ocultar filtro */}
                        <button className="menu-item" onClick={() => setIsSearchVisible(!isSearchVisible)}>
                            Buscar
                        </button> {/* Botão para mostrar/ocultar barra de busca */}
                        <button className="menu-item">Most visited</button> {/* Item do menu */}
                    </div>
                )}
            </header>

            <div className="background"> {/* Div de fundo */}
                <Navbar onSearch={handleSearch} isSearchVisible={isSearchVisible} /> {/* Renderiza o componente Navbar com a função de busca */}
                {isFilterVisible && ( // Renderiza o filtro se visível
                    <AttractionFilter onFilterChange={handleFilterChange} />
                )}
                {isAddAttractionVisible && ( // Renderiza o formulário de adicionar atrações se visível
                    <AddAttraction onAddAttraction={handleAddAttraction} />
                )}
                <AttractionList attractions={filteredAttractions} /> {/* Renderiza a lista de atrações filtradas */}
            </div>
        </div>
    );
};

export default App; // Exporta o componente App
