import React, { useState, useEffect } from 'react';
import Api from '../api';  // Asegúrate de que la ruta es correcta

function Resultados() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Api.fetchItems('movies');  // Ejemplo de solicitud para obtener películas
                setItems(data);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1>Resultados</h1>
            {items.length > 0 ? (
                items.map(item => (
                    <div key={item.id}>
                        <h3>{item.Titulo}</h3>
                        <p>{item.Descripcion}</p>
                        <img src={item.ImagenURL} alt="Imagen de la película" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                ))
            ) : (
                <p>No hay resultados disponibles.</p>
            )}
        </div>
    );
}

export default Resultados;