import React,{memo, useImperativeHandle, useState} from 'react'
import { forwardRef } from 'react'


export const ChildA = ({count,countMulti}) => {
    console.log('Child')
    return (
        <div>
            <p>ok:{count}  Multi: {countMulti()} </p>
        </div>
    )
}

