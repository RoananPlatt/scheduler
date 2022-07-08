
$(document).ready(function() {


    // This function was put in to listen for save button clicks


    $(".saveBtn").on("click", function(){


        window.alert("Task saved")

        var value = $(this).siblings(".description").val();
        console.log(value);

        var clock = $(this).parent().attr("id");
        console.log(clock);


    // I am saving to local storage

    localStorage.setItem(clock, value)

    })

    let timeOfDay = document.querySelector("time-block");
    console.log(timeOfDay);
    
    let todayDate = moment(new Date()).format("LLLL");
    console.log(todayDate);

    let todayDate2 = moment().hours();
    console.log(todayDate2);
    
    function loadDay(){  
        $(timeOfDay).each()(function(){
        
            var currentHour = parseInt
        })
    }


    loadDay()
    
    document.querySelector("#currentDay").innerHTML = todayDate
    
    localStorage
})
