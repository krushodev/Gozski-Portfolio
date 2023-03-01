import { BurgerMenu } from '../components/BurgerMenu/BurgerMenu';
import { Footer } from '../components/Footer/Footer';
import { InfoContainer } from '../components/InfoContainer/InfoContainer';
import { NavBar } from '../components/NavBar/NavBar';

export const Contact = () => {
    return (
        <>
            <BurgerMenu isInfo={true} />
            <NavBar />
            <InfoContainer />
            <Footer isInfo={true} />
        </>
    );
}
