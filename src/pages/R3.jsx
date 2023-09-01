
import { Header } from "../components/Header";

import '../styles/r3.css'

const R3 = () => {
    return (
        <div>
            <Header />
            <div class="space3D">
                <div class="cube3D">
                    <div class="base"></div>
                    <aside class="face face1"></aside>
                    <aside class="face face2"></aside>
                    <aside class="face face3"></aside>
                    <aside class="face face4"></aside>
                    <aside class="face face5"></aside>
                    <aside class="face face6"></aside>
                </div>
            </div>
        </div>
    );
}

export default R3;