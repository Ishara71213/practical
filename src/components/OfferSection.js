import { OfferImgCard } from './OfferImgCard';
import { OfferContent } from './OfferContent';
import '../styles/OfferSection.css';

export const OfferSection=()=>{

    return(
        <div className="offerContainer">
         
                 <h2 className='sectionTitle'>Offers</h2>
          
            <div className="imgCardWrapper">
                {OfferContent.map((item,id)=>{
                    return(
                        <div className="imgCardMargin" key={id}>
                            <OfferImgCard 
                                imgUrl={item.imgUrl}
                                imgAlt={item.imgAlt}
                                offerType={item.offerType}
                                offerTitle={item.offerTitle}
                                offerDesc={item.offerDesc}
                                offerPrice={item.offerPrice}
                                btnUrl={item.btnUrl}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}