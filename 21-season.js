/* 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */
const season = {
    Autumn:['September','October','November'],
    Winter:['December','January','February'],
    Spring:['March','April','May'],
    Summer:['June','July','August'],
    
}
const getSeason = month => {
    for(let i in season){
        if(season[i].includes(month))
            return i;
    }
}    
console.log(getSeason('September'));