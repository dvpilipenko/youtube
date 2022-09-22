import './List.css';

function List ({items}) {
    const handleClick = (id) => {
        window.open(`https://www.youtube.com/watch?v=${id}`,'_blank');
    }

    return <>
        {items.map(item => (
            <div key={item.id.videoId} className="List-item" onClick={() => handleClick(item.id.videoId)}>
                <img src={item.snippet.thumbnails.medium.url}/>
                <div className="List-item-title">{item.snippet.title}</div>
            </div>))}
        </>
}



export default List