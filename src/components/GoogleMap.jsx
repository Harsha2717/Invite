function DisplayMap({ mapData, onClose }) {

    if (!mapData) return null;

    const mapUrl = `https://www.google.com/maps?q=${mapData.lat},${mapData.lng}&z=${mapData.zoom}&output=embed`;

    return (
        <div className="modal">
            <div className="modal-content">

                <span className="close" onClick={onClose}>×</span>

                <h3>{mapData.title}</h3>

                <div className="detail">
                    {mapData.date}<br />
                    {mapData.time}
                </div>

                <div className="venue-info">
                    {mapData.venue}
                </div>

                {/* ✅ Fix: add src */}
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="380"
                    style={{ border: 0, borderRadius: 16 }}
                    loading="lazy"
                    title="Google Map"
                />
            </div>
        </div>
    );
}

export default DisplayMap;