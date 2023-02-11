import '../../styles/Footer.css';
import { FooterMenu } from './FooterMenu';
import { FooterContent } from './FooterContent';

export const Footer=()=>{
    return(
        <div className='footerContainer'>
            <div className='footerMenuCont'>
                <FooterMenu
                    
                    title={FooterContent[0].title}
                    linksName={FooterContent[0].linksName}
                    linksUrl={FooterContent[0].linksUrl}
                />
            </div>
        </div>
    )
}