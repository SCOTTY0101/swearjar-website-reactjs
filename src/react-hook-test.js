import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Function with State Hook testing.</h3>
            <p>Click button has be clicked {count} times.</p>
                <button onClick={() => setCount(count + 1)} >
                    Click Button
                </button>
            <hr></hr>
        </div>
    )
}

export default Example