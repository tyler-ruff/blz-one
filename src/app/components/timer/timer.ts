
export interface TimerCount {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
};

export interface ITimer{
    counterTitle?: string;
    autoStart?: boolean;
    startTime?: number;
};

const formatNumber = (num: number) => num.toString().padStart(2, "0");

const calculateTime = (time: number): TimerCount => {
    return {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor(time / (1000 * 60 * 60)),
        minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((time % 60000) / 1000),
        milliseconds: Math.floor((time % 1000) / 10)
    } as TimerCount;
}

const timerTitle = (count: TimerCount) => {
    return `${count.hours > 0 ? `${formatNumber(count.hours)} hour${count.hours > 1 ? "s" : ""}` : ''} ${formatNumber(count.minutes)} min${count.minutes === 0 || count.minutes > 1 ? "s" : ""}`
}

export {
    formatNumber,
    calculateTime,
    timerTitle
}