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