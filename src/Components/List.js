import React, { useState, useEffect } from 'react';

function List() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    });

    return (
    <div className="List">
        lista
    </div>
);
}

export default List;
