var rows = 8;

var columns = 8;

var win = 0;

var agan = 1;

var dye = ["red", "blue", "yellow", "green", "violet", "black"];

function cell(x, y, c) {
    return "<td><div swap='f' change='f' class='x"+ x +" y"+ y +"' id='c"+ c +"'></div</td>";
}


function daniel(kkk) {
    if ($(kkk).attr("swap")=="f"){
        win = 0;
        var numberFinder = /\d+/g;
        var xy = $(kkk).attr("class").match(numberFinder);
        var b = xy[0] + 1;
        var c = xy[0] - 1;
        var d = xy[1] + 1;
        var e = xy[1] - 1;
        asus(".x" + b + ".y" + xy[1], kkk);
        asus(".x" + c + ".y" + xy[1], kkk);
        asus(".x" + xy[0] + ".y" + d, kkk);
        asus(".x" + xy[0] + ".y" + e, kkk);
    }
}


function asus(a, k) {
    if ($(a).attr("swap")=="t" && $(a).attr("id")==$(k).attr("id") && $(k).attr("change")=="f") {
        $(k).attr("swap", "t");
        // agan = 1; 
        //$(k).attr("change", "t");
    }
}

function check() {
    // do{
    //     agan = 0;
        for (r = 1; r <= rows; r++) {
            for (c = 1; c <= columns; c++) {
                daniel(".x"+ r +".y"+ c);
            }
        }
        for (r = rows; r >= 1; r--) {
            for (c = columns; c >= 1; c--) {
                daniel(".x"+ r +".y"+ c);
            }
        }
        $("div").attr("change", "f");
    // }

    // while(agan);
}

function move(cell) {
    $("table").animate({opacity: 0.4}, 50);
    $("table").animate({opacity: 1}, 250);
    var pretty = $(cell).attr("id");
    $("[swap=t]").attr("id", pretty);
    // $("body").append(xy[0]);
    // $("body").append(xy[1]);
    win = 1;
    check();
    if (win==1){
        alert("DAMNDAMNDMANDAMNDAMN");
    }
}

function start() {
    for (j = 1; j <= rows; j++) {
        $("table").append("<tr id='cena" + j + "'></tr>");
        for (i = 1; i <= columns; i++) {
            k = Math.floor(Math.random() * 6 + 1);
            $("#cena" + j).append(cell(j, i, k));
        }
    }
    $(".x1.y1").attr("swap", "t");
}



$(document).ready(function() {
    start();
    check();
    $("div").click(function() {
	   move(this);
    });
    // $("body").append($("div").attr("id"));
});
