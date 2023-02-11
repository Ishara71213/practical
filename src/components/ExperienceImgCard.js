import '../styles/ExperienceImgCard.css'



export const ExperienceImgCard=(props)=>{
    return(
        <div className="cardContainer">
            <div className="imgContainer ">
                <div className='gradient'></div>
                <img src={props.imgUrl}  alt='{props.imgAlt}' />
               
            </div>
            <div className="textContainer">
                <div className='text'>Join Hilton Honors & Get Up to 4,500 Points</div>
                
            </div>
        </div>
    )
}