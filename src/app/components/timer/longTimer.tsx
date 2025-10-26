'use client'

import { useState, useEffect } from "react";

import { calculateTime, formatNumber, ITimer, timerTitle } from "./timer";

export default function LongTimer(params: ITimer){
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

    // Note: Moved to helper/util function in ./timer.ts
    //const formatNumber = (num: number) => num.toString().padStart(2, "0");
    /*
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    */
    let count = calculateTime(time);
    
    return (
        <div title={timerTitle(count)} className="flex gap-5 select-none">
            <span className="sr-only">{timerTitle(count)}</span>
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{"--value":count.days} as React.CSSProperties } aria-live="polite" aria-label="Days">
                        {formatNumber(count.days)}
                    </span>
                </span>
                days
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                    <span style={{"--value":count.hours} as React.CSSProperties } aria-live="polite" aria-label="Hours">
                        {formatNumber(count.hours)}
                    </span>
                </span>
                hours
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                <span style={{"--value":count.minutes} as React.CSSProperties } aria-live="polite" aria-label="Minutes">
                    {formatNumber(count.minutes)}
                </span>
                </span>
                min
            </div>
            <div>
                <span className="countdown font-mono text-4xl">
                <span style={{"--value":count.seconds} as React.CSSProperties } aria-live="polite" aria-label="Seconds">
                    {formatNumber(count.seconds)}
                </span>
                </span>
                sec
            </div>
            <button
              onClick={isRunning ? handleStop : handleStart}
              className="px-6 py-2 text-lg font-medium rounded-lg"
            >
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    )
}