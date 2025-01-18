import './Cardiogram.css';

function Cardiogram() {
    return (
        <div id="cardiogram-monitor">
            <div id="screen">
                <svg viewBox="0 0 10 10">
                    <circle cx="0" cy="0" r="5" />
                </svg>
            </div>
        </div>
    );
}

export default Cardiogram;