
import { Header } from "../components/Header";

import '../styles/r3.css'

const R3 = () => {
    return (
        <div>
            <Header />
            <div className="space3D">
                <div className="cube3D">
                    <div className="base"></div>
                    <aside className="face face1"></aside>
                    <aside className="face face2"></aside>
                    <aside className="face face3"></aside>
                    <aside className="face face4"></aside>
                    <aside className="face face5"></aside>
                    <aside className="face face6"></aside>
                </div>
            </div>
        </div>
    );
}

export default R3;