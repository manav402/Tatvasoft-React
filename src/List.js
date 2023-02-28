import React from 'react';
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