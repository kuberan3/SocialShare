import {
    ImageDiv,
    Section3,
    Section3Div1,
    Section3Description,
    Section3Div2,
    ParaSection3,
    Linkss,
    
} from './Component';

const FyloSection3 = () => {
    return ( 
        <Section3>
        <Section3Div1>
            <ImageDiv>
            <img width="100%" height="100%" src="./assert/illustration-stay-productive.png" alt="loading"></img>
            </ImageDiv>
        </Section3Div1>
        <Section3Div2>
            <ParaSection3>Stay productive,</ParaSection3>
            <ParaSection3>wherever you are</ParaSection3>
            <Section3Description>Never let location be an issue when accessing your files. Fylo has you</Section3Description>
            <Section3Description>covered for all of your file storage needs.</Section3Description><br/>
            <Section3Description>Securely share files and folders with friends, family and colleagues for live</Section3Description>
            <Section3Description>collaboration. No email attachments required.</Section3Description><br/>
            <Linkss href="#"><Section3Description>See how Fylo works<img src="./assert/icon-arrow.svg" alt="arrow"></img></Section3Description></Linkss>
        </Section3Div2>
    </Section3>
     );
}
 
export default FyloSection3;