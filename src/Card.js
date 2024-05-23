import './App.css';

function Card({children, styleName}) {
    return <div className={`w-fit h-fit p-4 bg-white rounded-md shadow-md ${styleName}`}>
        {children}
    </div>
}

export default Card;