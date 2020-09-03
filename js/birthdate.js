window.onload = function () {

    var svg2000 = "<img src = 'img/2000.svg'>";
    var svg_60_2000 = "<img src = 'img/1960_2000.svg'>";
    var svg_40_59 = "<img src = 'img/1940_1959.svg'>";
    var svg_20_39 = "<img src = 'img/1920_1939.svg'>";
    var svg_09_19 = "<img src = 'img/1909_1919.svg'>";

    document.getElementById("y-img").innerHTML = svg2000;


    var day = document.getElementById('day');
    var month = document.getElementById('month');
    var year = document.getElementById('year');
    var date_btn = document.getElementById('date_btn');


    function putDate() {
        var a = new Date();
        var d = a.getDate();
        var y = a.getFullYear();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var m = months[a.getMonth()];
        day.innerText = d;
        month.innerText = m;
        year.innerText = y;
    }

    putDate() ;

    var year_select = document.getElementById('year_select');
    var day_select = document.getElementById('day_select');
    var month_select = document.getElementById('month_select');
    var select = document.getElementsByClassName("d-select");


    //creating year options
    for(var i = 2019; i >1908; i--) {
        var option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        option.setAttribute("datatype", i);
        year_select.appendChild(option)
    }

    var a = new Date();
    var yr = a.getFullYear();

    for(var ii = 0; ii < select.length; ii++) {
        select[ii].addEventListener('change', function () {
            var id = this.id;
            var span = document.querySelector("." + id);
            span.innerHTML = this.selectedOptions[0].getAttribute("datatype");
            if(year_select.value >= 2000) {
                document.getElementById("y-img").innerHTML = svg2000;
            } else if(year_select.value >= 1960 && year_select.value < 2000) {
                document.getElementById("y-img").innerHTML = svg_60_2000;
            } else if(year_select.value >= 1940 && year_select.value < 1960) {
                document.getElementById("y-img").innerHTML = svg_40_59;
            } else if(year_select.value >= 1920 && year_select.value < 1940) {
                document.getElementById("y-img").innerHTML = svg_20_39;
            } else if(year_select.value >= 1909 && year_select.value < 1920) {
                document.getElementById("y-img").innerHTML = svg_09_19;
            }


            if(year_select.value && day_select.value && month_select.value) {
                if(yr - year_select.value < 13) {
                    document.getElementById("under_13_err").style.display = "block";
                    date_btn.classList.remove("green");
                    date_btn.classList.add("disabled_btn");
                } else {
                    date_btn.classList.remove("disabled_btn");
                    date_btn.classList.add("green");
                    document.getElementById("under_13_err").style.display = "none";
                }

            }
        })
    }

};