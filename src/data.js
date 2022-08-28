const getSuccess = {
  getSuccessPike: (weather, date) => {
    let chance = 35;

    if (date.month === 7 || date.month === 8) {
      chance -= 10;
    } else if (date.month === 10 || date.month === 11) {
      chance += 15;
    }

    if (date.season === 'winter' || date.season === 'spring') {

      if (date.month === 5) chance += 8;
      if (weather.descritption === 'Ясно') {
        chance += 10;
      } else {
        chance -= 15;
      }
    }

    if (date.season === 'autumn') {
      if (weather.clouds >= 33) {
        chance += 8;
        if (weather.visibility < 10000) {
          chance += 2;
        } else {
          chance -= 4;
        }
      }

      if (weather.wind.speed >= 5) {
        chance += 9;
      }

      if (weather.descritption === 'Дождь' || weather.descritption === 'Морось') {
        chance += 11;
      }

    }

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 8;
    } else {
      chance += 4;
    }

    return chance;
  },
  getSuccessRudd: (weather, date) => {
    let chance = 45;

    const favoritMonth = {
      good: [3, 6, 7, 8],
      middle: [2, 4, 5, 9],
      bad: [1, 10, 11, 12],

    };

    const nigativWind = ['C', 'СЗ', 'СВ'];

    if (favoritMonth.good.indexOf(date.month) >= 0) {
      chance += 17;
    } else if (favoritMonth.middle.indexOf(date.month) >= 0) {
      chance += 8;
    } else if (favoritMonth.bad.indexOf(date.month >= 0)) {
      chance -= 11;
    }

    if (date.season === 'spring') {
      if (date.month === 3) {
        chance += 12;
      }
      if (date.month === 5 && weather.temp > 18) {
        chance -= 35;
      }
    }

    if (date.month === 9 && weather.temp > 18) {
      chance += 9;
    }

    if (weather.description === 'Ясно') {
      chance += 4;
    } else {
      chance -= 5;
    }

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 10;
    } else {
      chance += 4;
    }

    if (nigativWind.indexOf(weather.wind.direction) >= 0) {
      chance -= 10;
    } else {
      chance += 5;
    }

    return chance;
  }

}

export const getSuccessPike = getSuccess.getSuccessPike;
export const getSuccessRudd = getSuccess.getSuccessRudd;