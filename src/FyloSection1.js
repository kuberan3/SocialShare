import './index.css'
import { 
    Section1,
    ImageDiv,
    Maindiv,
    Heading1,
    Ptag1,
    GetStartButton,
} from './Component';


const FyloSection1 = () => {
    return ( 
        <Section1>
                
                <ImageDiv>
                <img width="100%" height="100%" src="./assert/illustration-intro.png" alt="fileimage"/>
                </ImageDiv>
                <Maindiv>
                    <Heading1>All your files in one secure location, </Heading1>
                    <Heading1>accessible anywhere.</Heading1>
                </Maindiv>
                <Maindiv>
                    <Ptag1>Fylo stores all your most important files in one secure location.</Ptag1>
                    <Ptag1>Access them wherever you need, share and collaborate with</Ptag1>
                    <Ptag1>friends family, and co-workers.</Ptag1>
                    <GetStartButton>Get Started</GetStartButton>
                </Maindiv>
            </Section1>
     );
}
 
export default FyloSection1;