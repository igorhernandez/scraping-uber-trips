//get data from 'https://myprivacy.uber.com/privacy/exploreyourdata/trips' with:
const trips = Array.from(document.getElementsByClassName('af es'))


function getUberTrips(trips) {
    const newTrips = []
    trips.map(trip => {
        const tripProps = Array.from(trip?.children)
        newTrips.push({
            time: tripProps[0].innerText,
            price: tripProps[1].innerText,
            city: tripProps[2].innerText,
            distance: tripProps[3].innerText,
            service: tripProps[4].innerText,
            pickup_location: tripProps[5].innerText,
            dropoff_location: tripProps[6].innerText,
        })
    })
    return newTrips
}

JSON.stringify(getUberTrips(trips))
