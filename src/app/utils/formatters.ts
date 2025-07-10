import moment from "moment"

export const formatSecondsToMinutes = (seconds: number) => {
    if (!seconds) return '0:00'
    const now = moment({ seconds: 0, minutes: 0, hours: 0 })
    now.add(seconds, 'seconds')
    return `${now.format('m:ss')}`
}
export const formatSecondsToHours = (seconds: number) => {
    if (!seconds) return '0h 00 min'
    const now = moment({ seconds: 0, minutes: 0, hours: 0 })
    now.add(seconds, 'seconds')
    return `${now.format('HH [h] mm [min]')}`
}
export const getPercentage = (total: number, current: number) => {
    if (total == 0) return 0
    return (current * 100) / total
}
export const getRandomNumber = (from: number, to: number) => {
    return Math.floor(Math.random() * (to - from) + from)
}