import '../styles/style.css';
import { BRIDE, GROOM, STRINGS } from '../constants/Strings';
import FloralBackground from './FloralBackground';
import HeaderSection from './HeaderSection';
function MainPage() {
    return (
        <div className="container">
            <FloralBackground />
            <HeaderSection />

        </div>
    );
}
export default MainPage;