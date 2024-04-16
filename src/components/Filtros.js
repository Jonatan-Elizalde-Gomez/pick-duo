import React, { useState } from 'react';
import Api from '../api'; // Asegúrate de tener la ruta correcta para tu archivo API

function Filtros() {
    const [categoria, setCategoria] = useState('movies');
    const [genero, setGenero] = useState('');
    const [resultado, setResultado] = useState(null);

    const obtenerRecomendacion = async () => {
        try {
            // Aquí podrías tener una API que te devuelve un elemento al azar basado en la categoría y el género
            const data = await Api.fetchItems(categoria); // Suponiendo que esta función puede manejar filtros
            const filtrados = data.filter(item => item.Generos.includes(genero));
            const aleatorio = filtrados[Math.floor(Math.random() * filtrados.length)];
            setResultado(aleatorio);
        } catch (error) {
            console.error('Error al obtener recomendación:', error);
        }
    };

    return (
        <div className="filtros-container" style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1>Filtros de Búsqueda</h1>
            <div>
                <select onChange={(e) => setCategoria(e.target.value)} style={{ marginRight: '10px', padding: '10px 20px' }}>
                    <option value="movies">Películas</option>
                    <option value="series">Series</option>
                    <option value="animes">Animes</option>
                    <option value="videogames">Videojuegos</option>
                </select>
                <input type="text" placeholder="Género" value={genero} onChange={(e) => setGenero(e.target.value)} style={{ padding: '10px 20px' }} />
                <button onClick={obtenerRecomendacion} style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                    Buscar
                </button>
            </div>
            {resultado && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Recomendación: {resultado.Titulo}</h2>
                    <p>{resultado.Descripcion}</p>
                    <img src={resultado.ImagenURL} alt="Imagen" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default Filtros;
