import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';




export function TextInputNode({data}){
    const onChange= useCallback((evt)=>{
        console.log(evt.target.value)
    },[])
    return (<>
<Handle  type="source"  position={Position.Top} />
    <div>
        <p>Custom node title</p>
        <input id="input" name="text" onChange={onChange}></input>
    </div>
    
    <Handle type="target" position={Position.Bottom} />
    </>
    )
}