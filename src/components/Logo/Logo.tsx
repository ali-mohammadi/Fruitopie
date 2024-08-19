import React from "react";
import LogoSVG from "../../assets/img/Logo.svg"
import LogoIconSVG from "../../assets/img/Logo-Icon.svg"

interface LogoProps {
    isExpanded: boolean
}

const Logo: React.FC<LogoProps> = ( {isExpanded} ) => {
    return (
        <div className={`${isExpanded ? 'w-full' : 'w-10'} lg:w-full flex items-center mb-6 ml-auto`}>
            <img src={LogoSVG} alt="Logo" className={`${isExpanded ? '' : 'hidden'} lg:block w-9/12 mr-4`}/>
            <img src={LogoIconSVG} alt="Logo Icon" className={`${isExpanded ? 'hidden' : ''} w-full lg:hidden`}/>
        </div>
    );
}

export default Logo;