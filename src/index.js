import React from "react";
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting() {
    return <div>
        <h1>Esto es un h1 del componente</h1>
        <p>lore 123</p>
    </div>
}
root.render(<div>
    <Greeting />
</div>)