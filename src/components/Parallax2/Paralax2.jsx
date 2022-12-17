import { Parallax } from 'react-parallax';
import parallax from "../../img/japan.jpg"


const Container2 = () => (
    <Parallax blur={0} bgImage={parallax} bgImageAlt="the cat" strength={200}>
        <h2 className='paraHeader'>Design meint auch immer Funktionalität!</h2>
    </Parallax>
);

export default Container2;