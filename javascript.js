obj1 = {
	firstName: "Витя",
	lastName: "Киселёв",
	age: 45,
	children: null,
	dates: {
		birthday: '26.01.1977',
		wedding: '05.09.2000',
		graduationFromUniversity: '07.06.2003'
	}
};

function ShowKeys(){
    for (var propPersonal in obj1){
        console.log( propPersonal + " - " + obj1[propPersonal]);
    }
    var keyDates = "dates";
    for(var propDates in obj1.dates){
        console.log( keyDates + "-" + propDates + " - " + obj1.dates[propDates]);
    }
    

}
ShowKeys();