import React from 'react'; 
var i=0;
const List = (props)=>{
    console.log(props.Data);
    return (
        <>
            <ul>
               {props.Data.map(item=>{
                    return <li>{item}</li>
               })}
            </ul>
        </>
    )
}

export {List};