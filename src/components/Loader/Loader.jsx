import "./Loader.scss";

export default function Loader() {
    return (
        <div className="site-loader" role="status" aria-live="polite" aria-label="Coming soon">
            <div className="site-loader__content">
                <p className="site-loader__label">PORTFOLIO / 2026</p>
                <div className="site-loader__wordmark" aria-hidden="true">
                    <span>Coming</span>
                    <span>Soon...</span>
                </div>
                <div className="site-loader__progress" aria-hidden="true">
                    <span />
                </div>
                <p className="site-loader__caption">The new experience is on its way</p>
            </div>
        </div>
    );
}
