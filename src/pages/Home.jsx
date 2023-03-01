import { BurgerMenu } from '../components/BurgerMenu/BurgerMenu';
import { Footer } from '../components/Footer/Footer';
import { Main } from '../components/Main/Main';
import { NavBar } from '../components/NavBar/NavBar';

export const Home = () => {
    return (
        <>
            <BurgerMenu isInfo={false} />
            <NavBar />
            <Main />
            <Footer isInfo={false} />
        </>
    );
}
