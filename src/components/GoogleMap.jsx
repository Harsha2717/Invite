function DisplayMap({ mapData, onClose }) {

    if (!mapData) return null;

    const mapUrl = `https://www.google.com/maps?q=${mapData.lat},${mapData.lng}&z=${mapData.zoom}&output=embed`;
    const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapData.lat},${mapData.lng}`;
    const streetViewUrl =
        `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${mapData.lat},${mapData.lng}`;
    return (
        <div className="modal">
            <div className="modal-content">

                <span className="close" onClick={onClose}>×</span>

                <h3 className="map-title">{mapData.title}</h3>

                <div className="detail">
                    {mapData.date}<br />
                    {mapData.time}
                </div>

                {/* 🔥 Clean Flex Row */}
                <div className="venue-container">
                    <div className="venue-info center">
                        {mapData.venue}
                    </div>

                    <div className="map-actions">
                        <a
                            href={directionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="direction-btn"
                        >
                            Directions ↗
                        </a>

                        <a
                            href={streetViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="direction-btn secondary"
                        >
                            Street View 👁
                        </a>
                    </div>
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