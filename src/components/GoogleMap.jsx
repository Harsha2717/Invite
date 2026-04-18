function DisplayMap({ mapData, onClose }) {

    if (!mapData) return null;

    const mapUrl = `https://www.google.com/maps?q=${mapData.lat},${mapData.lng}&z=${mapData.zoom}&output=embed`;
    const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapData.lat},${mapData.lng}`;

    return (
        <div className="modal">
            <div className="modal-content">

                <span className="close" onClick={onClose}>×</span>

                <h3 className="map-title">{mapData.title}</h3>

                <div className="detail">
                    {mapData.date}<br />
                    {mapData.time}
                </div>

                <div className="venue-container">
                    <div className="venue-info center">
                        {mapData.venue}
                    </div>

                    <a
                        href={directionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="direction-btn"
                    >
                        Get Directions ↗
                    </a>
                </div>

                <iframe
                    src={mapUrl}
                    width="100%"
                    height="380"
                    className="map-frame"
                    loading="lazy"
                    title="Google Map"
                />
            </div>
        </div>
    );
}

export default DisplayMap;