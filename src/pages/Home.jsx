import { Header } from '../components/Header'
import { Information } from '../components/Information';

import { information } from '../data/information';

const Home = () => {
    return (
        <div className='scroll-smooth'>
            <Header />
            <div className='w-full lg:w-8/12 px-4 mx-auto mt-6 relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
                {
                    information.map((e) => (
                        <Information key={e.id} id={e.id} title={e.title} info={e.information} equations={e.equations} figures={e.figures} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;