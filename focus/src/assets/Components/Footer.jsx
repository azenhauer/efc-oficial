
import React from "react";
import InstaLogo from '../pages/Midias/MidiasImages/instalogo.png';
import TKLogo from '../pages/Midias/MidiasImages/tiktoklogo.png';
import YTLogo from '../pages/Midias/MidiasImages/youtubelogo.png';

const socialMediaData = [

    {

        smlogo: InstaLogo,

        tag: '@nucleoelas.emfoco',

        link: 'https://www.instagram.com/nucleoelas.emfoco/',

    }

    ,

    {

        smlogo: TKLogo,

        tag: '@nucleoelas.emfoco',

        link: 'https://www.tiktok.com/@nucleoelas.emfoco?_t=8eIfwfrLwIv&_r=1',

    }

    ,

    {

        smlogo: YTLogo,

        tag: '@nucleoelasemfoco',

        link: 'https://www.youtube.com/@NucleoElasEmFoco',

    }

];

    
const SocialMediaCard = ({ smlogo, tag, link }) => (
    <div className="w-fit flex justify-center flex-row items-center flex-nowrap">


        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img src={smlogo} alt={tag} className="max-h-[50px] max-w-[37px] relative bottom-1" />
            <h3 className="font-sizingh3 text-2xl mb-1 xl:mb-2 text-[#EBEAD4] ml-2">{tag}</h3>
        </a>

    </div>
)
function Footer() {
    return (
        <div className="w-full">
        <div className="w-full min-h-[45em] flex flex-col bg-pink-800 ">

        
        
            <div className="min-h-[25em] top-4 w-full flex flex-col justify-center gap-4 items-center flex-wrap bg-black">
                
                <h3 className="text-pink-950/70 max-w-full font-['Playfair_Display'] text-2xl  font-extrabold mix-blend-difference">Arte Cura!</h3>
                <h4 className=" text-center text-[1rem] max-w-full font-thin px-6 text-rose-700">“A nossa sintonia gera o poder de criar arte no mundo” </h4>
                

            </div>
            <div className="flex w-full justify-start items-center flex-col px-10 pt-10 gap-4">
                <h2 className="text-[#EBEAD4] z-20 w-fit text-2xl font-bold">NOS SIGA</h2>
                <div className="content-midias">

                {socialMediaData.map((platform, index) => (

                    <SocialMediaCard key={index} {...platform} />

                ))}

            </div>
                

            </div>
           
        </div>
        <div className="bg-pink-900 z-10 relative w-full h-4  ">
            
        </div>
        </div>
    );
}
export default Footer