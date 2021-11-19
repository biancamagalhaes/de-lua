export const actualDateFormated = () => {
    const date = new Date();
    return `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}