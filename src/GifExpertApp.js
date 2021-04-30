import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categorias = ['One Punch','One Piece','Jujutsu Kaiden']
    const [categorias, setCategorias] = useState(['Warcraft'])    // useState

    // const handleAdd = () => {
    //     // setCategorias(['HunterXHunter', ...categorias]);        
    //     setCategorias( cats => [...cats, 'HunterXHunter']);        
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>
        
            <ol>
                {
                    categorias.map( category => {
                        // return <li key={category}>{category}</li>
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;