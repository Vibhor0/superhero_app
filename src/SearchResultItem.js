function SearchResultItem(props) {
   
        const {data} = props;
        console.log('data', data);
        return (
        <div className="search-result">
             <div className="left">
                 <img src={data.image.url} alt="superhero pic" />
             </div>
             <div className="right">
                 <h1>{data.name}</h1>
                 <span style={{color: 'gray', marginBottom: 5}}>{data.biography['full-name']}</span>
                 <div className="stats">
                     <div>intelligence:{data.powerstats.intelligence}</div>
                     <div>strength:{data.powerstats.strength}</div>
                     <div>speed:{data.powerstats.speed}</div>
                     <div>combat:{data.powerstats.combat}</div>
                 </div>
             </div>
        </div>
    );
}

export default SearchResultItem;