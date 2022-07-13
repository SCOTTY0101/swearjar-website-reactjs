import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Function with State Hook testing.</p>
            <p>Click button has be clicked {count} times.</p>
                <button onClick={() => setCount(count + 1)} >
                    Click Button
                </button>
            
        </div>
    )
}

export default Example