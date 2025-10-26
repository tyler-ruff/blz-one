'use client'

import { useState, useEffect } from "react";

import { calculateTime, formatNumber, ITimer, timerTitle } from "./timer";

export default function SmallTimer(params: ITimer){
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
        <span title={timerTitle(count)} className="countdown font-mono text-2xl select-none">
            <span className="sr-only">{timerTitle(count)}</span>
            <span style={{"--value":count.hours} as React.CSSProperties } aria-live="polite" aria-label="Hours">
                {formatNumber(count.hours)}
            </span>:
            <span style={{"--value":count.minutes} as React.CSSProperties } aria-live="polite" aria-label="Minutes">
                {formatNumber(count.minutes)}    
            </span>:
            <span style={{"--value":count.seconds} as React.CSSProperties } aria-live="polite" aria-label="Seconds">
                {formatNumber(count.seconds)}
            </span>
        </span>
    )
}