import React from 'react'
import BanniereLogo from "../../assets/images/Baniere.png"

const Banniere = ()=>{


    return(
        <div>
            <img className="Banniere-img" src={BanniereLogo} alt="Banniere de l'entreprise"/>
        </div>
    )
}

export default Banniere