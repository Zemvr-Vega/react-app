import './App.css';
import Card from './Card';

function TodoContainer({children}) {
    return (
        <Card styleName='!w-[30vw] gap-4 flex flex-row flex-wrap' >
            {children}
        </Card>
    )
}

export default TodoContainer;