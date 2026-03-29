import { useState } from "react";

export default function Testing() {
    const [count, setCount] = useState(0);

    return (    
        <div className="w-full h-screen">
            <h2>Count: {count}</h2>  

      
            {/* HTML wala JS liyanne {} athule */}

            <button onClick={() => setCount(count + 1)}>
                <div className="bg-blue-500 text-white px-4 py-2 rounded">Increment</div>
            </button>  
        </div> 
    );
}