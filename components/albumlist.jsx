import Image from "next/image";
import './albumlist.css'

export default function AlbumList() {
    return (
        <div id='image-track'>
            <img className="image" src="/AGreatChaos.jpg" draggable="false"/>
            <img className="image" src="/Blonde.jpg" draggable="false"/> 
            <img className="image" src="/Graduation.webp" draggable="false"/>
            <img className="image" src="/Igor.jpg" draggable="false"/> 
            <img className="image" src="/NeverEnough.webp" draggable="false"/>
            <img className="image" src="/TPAB.png" draggable="false"/>
            <img className="image" src="/Swimming.png" draggable="false"/> 
            <img className="image" src="/WLR.png" draggable="false"/>
            <img className="image" src="/Icedancer.jpg" draggable="false"/>
            <img className="image" src="/DS2.webp" draggable="false"/>
            <img className="image" src="/TwoStar.webp" draggable="false"/>
            <img className="image" src="/WhatWeHave.jpg" draggable="false"/>
        </div>
    );
}