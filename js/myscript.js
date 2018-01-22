var cities = [
    "ABAKAN",
    "BARNAUL",
    "BLAGOVESHCHENSK",
    "VELIKY NOVGOROD",
    "VLADIVOSTOK",
    "DZERZHINSK",
    "KAZAN",
    "PENZA",
    "SARATOV",
    "SAMARA"
];

$(document).ready(function () {
    var selectArray = $('#ulArray');

    //<editor-fold desc="Инициализация">
    //
    $("#selectDiv").hide();
    //
    cities.forEach( function(value){
        selectArray.html(selectArray.html() + '<option>' + value + '</option>');
    });
    //</editor-fold>

    //<editor-fold desc="Тестирование">
    // Скрыть/показать color picker
    $("#checkBoxColor").click(function () {
        if ($(this).is(":checked")) {
            $("#color").show();
        } else {
            $("#color").hide()
        }
    });

    // события по нажатию на "Обновить"
    $("#refrech").click(function () {
        // изменение количества элементов в select
        setSize($('#quantity').val());
        // цвет
        setColor($('#color').val());

    });
    //</editor-fold>

    //<editor-fold desc="Функции виджета">
    //
    function setColor(color){
        $("#inputArrayItem").css({"background-color": color});
        $("#inputButton").css({"background-color": color});
    }
    //
    function setSize (size){
        if (size >= 2)
            selectArray.attr({"size": size});
        else
            selectArray.attr({"size": 2});
    }

    // добавление в input выбранного значения
    selectArray.change(function (e) {
        $("#inputArrayItem").val(e.target.value);
        $("#selectDiv").hide();
    });

    // Скрыть/показать select по нажатию на кнопку
    $("#inputButton").click(function () {
        $("#selectDiv").toggle();
    });

    //
    $("#inputArrayItem").on("input",function (e) {
        $("#selectDiv").show();
        var finded = [];
        // ищем подходящие элементы
        cities.forEach(function(value){
            if (value.indexOf(e.target.value.toUpperCase()) != -1){
                finded.push(value);
            }
        });
        // очищаем options
        selectArray.empty();
        // добавляем options
        finded.forEach(function(item){
            selectArray.append( $('<option>' + item + '</option>'));
        });
        selectArray.attr({"size": $("#quantity").val()});

        if (finded.length <= $('#quantity').val())
            setSize(finded.length);
        else
            setSize($('#quantity').val());

    });
    //</editor-fold>
});


