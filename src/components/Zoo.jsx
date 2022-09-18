import './stylezoo.css';

const Zoo = ( {animal, getAnimal, exibir} ) => {
    return (
            
           <div className="card">
                <img width={350} height={350} src={animal.image_link} alt={animal.latin_name} />
                <div className="descricao">
                    <p className="zoo"><strong>Nome: </strong>{animal.name}</p>                    
                    <p className="zoo"><strong>Nome em latin: </strong>{animal.latin_name}</p>
                    <p className="zoo"><strong> Habitat natural: </strong>{animal.habitat}</p>
                    <p className="zoo"><strong> Dieta: </strong>{animal.diet}</p>
                    <p className="zoo"><strong> Localização: </strong>{animal.geo_range}</p>
                    
                    { exibir &&  
                    <button type="button" className="btn" onClick={getAnimal}>
                        Mostrar outro animal
                    </button>
                    }
                </div>
                
           </div>
            
        
    );
};

export default Zoo;