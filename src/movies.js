// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = (moviesArray) => {
    let mappedDirectors = moviesArray.map((element) => {
        return element.director
    })
    return mappedDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 
let howManyMovies = (spielbergArray) => {
    let filteredSpielberg = spielbergArray.filter((element, index) => {
        return element.director == "Steven Spielberg" && element.genre.includes("Drama")
    })
    return filteredSpielberg.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (avgArray) => {
    let mappedRate = avgArray.map((element) => {
        return element.rate
    })
    let avgRate = mappedRate.reduce((acc, element) => {
        return acc + element / mappedRate.length
    },0)
    return avgRate
}

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (dramaArray) => {
    let mappedDrama  = dramaArray.map((element) => {
        return element.genre.includes("Drama") && element.rate
    })
    let avgDramaRate = mappedDrama.reduce((acc, element, index) => {
        return acc + element / mappedDrama.length
   },0)
   return avgDramaRate
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = (orderArray) => {
    let cloneArray = JSON.parse(JSON.stringify(orderArray))
    let order = cloneArray.sort((element1, element2) => {
        if (element1.year > element2.year) {
            return 1
        } else if (element1.year < element2.year) {
            return -1
        } else {
            if (element1.title > element2.title) {
                return 1
            } else if (element1.title < element2.title) {
                return -1
            }else {
                return 0
            }
        }
    })
    return order
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (alphabetArray) => {
    let cloneAlphabet = JSON.parse(JSON.stringify(alphabetArray))
    let alphabet1 = cloneAlphabet.map((element) => {
        return element.title
    })
    let alphabet = alphabet1.sort((element1, element2) => {
        if (element1 > element2) {
            return 1
        } else if (element1 < element2) {
            return -1
        } else {
            return 0
        }
    })
    return alphabet.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
