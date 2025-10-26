export default function HorizontalSmallStats(){
    return (
        <div className="stats bg-base-100 border-base-300 border select-none">
            <div className="stat">
                <div className="stat-title select-none">Time In</div>
                <div className="stat-value">8:00 AM</div>
                <div className="stat-actions">
                <button className="btn btn-xs btn-success">
                    Clock Out
                </button>
                </div>
            </div>

            <div className="stat">
                <div className="stat-title select-none">
                    Elapsed Time
                </div>
                <div className="stat-value">
                    4H 15M
                </div>
                <div className="stat-actions space-x-1">
                    <button className="btn btn-xs">
                        Take Break
                    </button>
                    <button className="btn btn-xs">
                        Paystubs
                    </button>
                </div>
            </div>
        </div>
    )
}