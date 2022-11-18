/* Générale */
var refGaugeCO2Emission = [];
var refGaugeCO2Emission_data = [];
var refGaugeCO2Emission_options = [];
var refGaugeFuelConsumption = [];
var refGaugeFuelConsumption_data = [];
var refGaugeFuelConsumption_options = [];
var refGaugeUrbanNoise = [];
var refGaugeUrbanNoise_data = [];
var refGaugeUrbanNoise_options = [];
var refGraphPerfPrediction = [];
var refGraphPerfPrediction_data = [];
var refGraphPerfPrediction_options = [];

var refGraphUrbanNoise = [];
var refGraphUrbanNoise_data = [];
var refGraphUrbanNoise_options = [];

function init() {
    google.charts.load("current", {
        packages: ["gauge", "map", "corechart"],
        mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
    });
    google.charts.setOnLoadCallback(drawChart_center_column_bottom_card_left);
    google.charts.setOnLoadCallback(drawChart_center_column_bottom_card_right);
    google.charts.setOnLoadCallback(drawChart_right_column_top_card);
    google.charts.setOnLoadCallback(drawChart_right_column_middle_card);
    google.charts.setOnLoadCallback(drawChart_right_column_bottom_card);
    google.charts.setOnLoadCallback(drawMap);
}

/** Colonne gauche principale */

/** Colonne centrale principale */

/** Colonne centrale principale top */
/** Colonne centrale principale top left */
function drawMap() {
    var data = google.visualization.arrayToDataTable([
        ["Country", "Population"],
        ["China", "China: 1,363,800,000"],
        ["India", "India: 1,242,620,000"],
        ["US", "US: 317,842,000"],
        ["Indonesia", "Indonesia: 247,424,598"],
        ["Brazil", "Brazil: 201,032,714"],
        ["Pakistan", "Pakistan: 186,134,000"],
        ["Nigeria", "Nigeria: 173,615,000"],
        ["Bangladesh", "Bangladesh: 152,518,015"],
        ["Russia", "Russia: 146,019,512"],
        ["Japan", "Japan: 127,120,000"],
    ]);

    var options = {
        showTooltip: true,
        showInfoWindow: true,
    };

    var map = new google.visualization.Map(
        document.getElementById("container-maps")
    );

    map.draw(data, options);
}
/** Colonne centrale principale top right */

/** Colonne centrale principale bottom */
/** Colonne centrale principale bottom  left*/
function ChangeValue() {
    refGaugeCO2Emission_data.setValue(0, 1, 60);
    refGaugeCO2Emission.draw(
        refGaugeCO2Emission_data,
        refGaugeCO2Emission_options
    );

    refGaugeFuelConsumption_data.setValue(0, 1, 100);
    refGaugeFuelConsumption.draw(
        refGaugeFuelConsumption_data,
        refGaugeFuelConsumption_options
    );

    refGaugeUrbanNoise_data.setValue(0, 1, 75);
    refGaugeUrbanNoise.draw(refGaugeUrbanNoise_data, refGaugeUrbanNoise_options);

    refGraphPerfPrediction_data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["Curtent", 1500, 180],
        ["In 15min", 1170, 460],
        ["In 30min", 1400, 1120],
        ["In 45min", 800, 1120],
        ["In 1h", 0, 540],
    ]);
    refGraphPerfPrediction.draw(
        refGraphPerfPrediction_data,
        refGraphPerfPrediction_options
    );
}

function drawChart_center_column_bottom_card_left() {
    refGaugeCO2Emission_data = google.visualization.arrayToDataTable([
        ["Label", "Value"],
        ["Co2", 0],
    ]);

    refGaugeCO2Emission_options = {
        width: 600,
        height: 300,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        greenFrom: 0,
        greenTo: 10,
        minorTicks: 5,
    };

    refGaugeCO2Emission = new google.visualization.Gauge(
        document.getElementById("chart_div_dial_cbcl")
    );

    refGaugeCO2Emission.draw(
        refGaugeCO2Emission_data,
        refGaugeCO2Emission_options
    );

    console.log(`refGaugeCO2Emission initialisée`);
}

/** Colonne centrale principale bottom right*/
function drawChart_center_column_bottom_card_right() {
    refGaugeFuelConsumption_data = google.visualization.arrayToDataTable([
        ["Label", "Value"],
        ["Fuel", 25],
    ]);

    refGaugeFuelConsumption_options = {
        width: 600,
        height: 300,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 55,
        yellowTo: 90,
        minorTicks: 5,
    };

    refGaugeFuelConsumption = new google.visualization.Gauge(
        document.getElementById("chart_div_dial_cbcr")
    );

    refGaugeFuelConsumption.draw(
        refGaugeFuelConsumption_data,
        refGaugeFuelConsumption_options
    );

    console.log(`refFuelConsumption initialisée`);
}

/** Colonne droite principale */
/** Colonne droite principale top */
function drawChart_right_column_top_card() {
    refGraphUrbanNoise_data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
    ]);

    refGraphUrbanNoise_options = {
        title: "Urban noise",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
    };

    refGraphUrbanNoise = new google.visualization.AreaChart(
        document.getElementById("chart_div_urban_noise")
    );
    refGraphUrbanNoise.draw(refGraphUrbanNoise_data, refGraphUrbanNoise_options);
}
/** Colonne droite principale middle */
function drawChart_right_column_middle_card() {
    refGraphPerfPrediction_data = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["Curtent", 1000, 400],
        ["In 15min", 1170, 460],
        ["In 30min", 660, 1120],
        ["In 45min", 660, 1120],
        ["In 1h", 1030, 540],
    ]);

    refGraphPerfPrediction_options = {
        title: "Performance predictions",
        curveType: "function",
        legend: { position: "bottom" },
        height: 140,
    };

    refGraphPerfPrediction = new google.visualization.LineChart(
        document.getElementById("curve_chart")
    );

    refGraphPerfPrediction.draw(
        refGraphPerfPrediction_data,
        refGraphPerfPrediction_options
    );
}
/** Colonne droite principale bottom */
function drawChart_right_column_bottom_card() {
    refGaugeUrbanNoise_data = google.visualization.arrayToDataTable([
        ["Label", "Value"],
        ["Noise", 55],
    ]);

    refGaugeUrbanNoise_options = {
        width: 600,
        height: 300,
        redFrom: 60,
        redTo: 100,
        yellowFrom: 35,
        yellowTo: 59,
        greenFrom: 0,
        greenTo: 20,
        minorTicks: 5,
    };

    refGaugeUrbanNoise = new google.visualization.Gauge(
        document.getElementById("chart_div_dial_aun")
    );

    refGaugeUrbanNoise.draw(refGaugeUrbanNoise_data, refGaugeUrbanNoise_options);

    console.log(`refUrbanNoise initialisée`);
}