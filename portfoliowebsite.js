const startDate = new Date(2021, 9, 20)

/*here setInterval is a function - it sets the interval the fucntion should run in milliseconds */
setInterval(calculateTime = () => {
    let dateNow = new Date;
    let difference = Math.floor((dateNow.getTime() - startDate.getTime()) / 1000);
    formattedDifference = new Intl.NumberFormat('en-UK').format(difference) /*use the iternational number formatter to get commas */
    document.getElementById("time").innerHTML = formattedDifference;
},1000);


