export const getPercentage = (total: number, current: number) => {
    if (total == 0) return 0
    return (current * 100) / total
}
export const getRandomNumber = (from: number, to: number) => {
    return Math.floor(Math.random() * (to - from) + from)
}