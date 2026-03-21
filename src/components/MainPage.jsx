import '../styles/style.css';
import FloralBackground from './FloralBackground';
import HeaderSection from './HeaderSection';
import VenueSection from './VenueSection';
import WeddingEvents from './WeddingEvents';
function MainPage() {
    return (
        <div className="container">
            <FloralBackground />
            <HeaderSection />
            <VenueSection />
            <WeddingEvents />

        </div>
    );
}
export default MainPage;