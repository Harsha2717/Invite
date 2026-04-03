import '../styles/style.css';
import FloralBackground from './FloralBackground';
import HeaderSection from './HeaderSection';
import VenueSection from './VenueSection';
import VideoPlayBack from './VideoPlayBack';
import WeddingEvents from './WeddingEvents';
function MainPage() {
    return (
        <div className="container">
            <FloralBackground />
            <HeaderSection />
            <VenueSection />
            <WeddingEvents />
            <VideoPlayBack />

        </div>
    );
}
export default MainPage;