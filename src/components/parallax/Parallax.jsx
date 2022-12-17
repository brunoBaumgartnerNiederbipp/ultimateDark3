import { Parallax } from 'react-parallax';
import parallax from "../../img/japan.jpg"
import "./parallax.css"

const Container = () => (
    <Parallax blur={0} bgImage={parallax} bgImageAlt="the cat" strength={200}>
        <h3 className='paraHeader'>Was Design von Kunst unterscheidet ist, dass Design meint funktionell zu sein!</h3>
    </Parallax>
);

export default Container;