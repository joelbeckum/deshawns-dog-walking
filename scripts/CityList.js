import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        const foundCity = cities.find(city => city.id === walker.cityId)
        citiesHTML += `<li>${foundCity.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

