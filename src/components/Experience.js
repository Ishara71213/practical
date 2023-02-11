import { ExperienceImgCard } from './ExperienceImgCard';
import {ExperienceContent} from './ExperienceContent';  
import '../styles/Experience.css'

export const Experience=()=>{
    return(
        <div className='container'>
            <div className='containerText'>
                <div className='title'>Offers that bring you peace of mind</div>
                <div className='subTitle'>Find the perfect stay with our exclusive deals.</div>
            </div>
           
            <div className='cardWrapper'>
                {
                    ExperienceContent.map((item,id)=>{
                       return(
                                <div className='cardContainer' key={id}>
                                     <ExperienceImgCard
                                      title={item.title}
                                      imgUrl={item.imgUrl}
                                      imgAlt={item.imgAlt}
                                     />
                                </div>
                       )
                    })
                }
            </div>
        </div>
       
      
    )
}