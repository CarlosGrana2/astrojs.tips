export const convertDateWithOutYears = (pubDate: string) => {
    const event = new Date(pubDate)
    const date = event.toDateString().slice(0, -4)
    return date
}