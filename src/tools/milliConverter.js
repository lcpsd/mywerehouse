class init{
    toMinutes(milli){
        let minutes = Math.floor(milli / 60000)
        return minutes
    }

    toHours(milli){
        let minutes = Math.floor(milli / 60000)
        let hours = Math.round(minutes / 60)
        return hours
    }

    toDays(milli){
        let minutes = Math.floor(milli / 60000)
        let hours = Math.round(minutes / 60)
        let days = Math.round(hours / 24)
        return days
    }
}

module.exports = new init()