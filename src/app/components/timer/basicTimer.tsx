'use client'

import { useState, useEffect } from "react";

import { calculateTime, formatNumber, ITimer, timerTitle } from "./timer";

export default function BasicTimer(params: ITimer){
    const counterTitle = params.counterTitle || "Time Clock";

    const [isRunning, setIsRunning] = useState<boolean>(params.autoStart || false);
    const [time, setTime] = useState<number>(params.startTime || 0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if(isRunning){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };
    
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    let count = calculateTime(time);

    return (
        <div title={timerTitle(count)} className="grid grid-flow-col lg:pl-0 px-2 gap-2 lg:gap-5 text-center auto-cols-max select-none">
            <span className="sr-only">{timerTitle(count)}</span>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":count.days}  as React.CSSProperties} aria-live="polite" aria-label="Days">
                        {formatNumber(count.days)}
                    </span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":count.hours} as React.CSSProperties} aria-live="polite" aria-label="Hours">
                        {formatNumber(count.hours)}
                    </span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":count.minutes} as React.CSSProperties } aria-live="polite" aria-label="Minutes">
                        {formatNumber(count.minutes)}
                    </span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{"--value":count.seconds} as React.CSSProperties } aria-live="polite" aria-label="Seconds">
                        {formatNumber(count.seconds)}
                    </span>
                </span>
                sec
            </div>
        </div>
    )
}

/*
<button
    onClick={isRunning ? handleStop : handleStart}
    className="px-6 py-2 text-lg font-medium rounded-lg"
>
    {isRunning ? "Stop" : "Start"}
</button>
<button onClick={handleReset}>
    Reset
</button>
*/