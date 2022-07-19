import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Function with State Hook testing.</h3>
            <p>Click button has been clicked {count} times.</p>
                <button onClick={() => setCount(count + 1)} >
                    Click Button +
                </button>
                <button onClick={() => ( count <= 0 ? setCount(count - 1) : setCount(0))}>
                    Click Button -
                </button>
            <hr></hr>
        </div>
    )
}

export default Example