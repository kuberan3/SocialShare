import { LandingPage } from './Component';

import FyloSection1 from './FyloSection1';
import FyloSection2 from './FyloSection2';
import FyloSection3 from './FyloSection3';
import FyloSection4 from './FyloSection4';
import FyloSection5 from './FyloSection5';
import HeaderSection from './Header';
const Fylo = () => {
    return ( 
       <LandingPage>
    

        <HeaderSection></HeaderSection>
           <FyloSection1></FyloSection1>
           <FyloSection2></FyloSection2>
           <FyloSection3></FyloSection3>
           <FyloSection4></FyloSection4>
           <FyloSection5></FyloSection5>
       </LandingPage>
     );
}
 
export default Fylo;