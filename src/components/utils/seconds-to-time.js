export function secondsToTime(seconds)
{

    const zeroLeft = n => Math.floor(n).toString().padStart(2,'0');
    const min = zeroLeft((seconds / 60) % 60);
    const sec  = zeroLeft((seconds % 60) % 60);
    return `${min} : ${sec}`;
}
