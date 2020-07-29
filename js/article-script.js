fontSize = 16; //globalna zmienna

$(document).on('click', '#makeFontSmaller', function () {
        fontSize = fontSize - 1;

        if (fontSize <= 24 && fontSize >= 12) {
            $('article p').css('font-size', fontSize + "px");
            // if (fontSize < 24) {
            //     document.getElementById("makeFontSmaller").setAttribute('title', 'Zmniejsz czcionkę (obecnie ' + fontSize + ')');
            // }
            // else {
            //     document.getElementById("makeFontSmaller").setAttribute('title', 'Nie możesz dalej zmniejszać czcionki (obecnie ' + fontSize + ')');
            // }
        }
    }

);

$(document).on('click', '#makeFontBigger', function () {
        fontSize = fontSize + 1;

        if (fontSize <= 24 && fontSize >= 12) {
            $('article p').css('font-size', fontSize + "px");
            // if (fontSize < 24) {
            //     document.getElementById("makeFontBigger").setAttribute('title', 'Zwiększ czcionkę (obecnie ' + fontSize + ')');
            // }
            // else {
            //     document.getElementById("makeFontBigger").setAttribute('title', 'Nie możesz dalej zwiększać czcionki (obecnie ' + fontSize + ')');
            // }

            // title = "Zwiększ czcionkę (obecnie" + fontSize + ")";
        }
    }

);


let highContrast;

function switchStyles(className) {
    document.body.className = className;
    localStorage.setItem("bodyClassName", className);
}

var storedClassName = localStorage.getItem("bodyClassName");

if (storedClassName) {
    switchStyles(storedClassName);
    console.log(storedClassName);

    if (storedClassName == 'high-contrast') {
        highContrast = true;
    } else {
        highContrast = false;
        switchStyles('normal');
    }
}

$(document).on('click', '#highContrastBtn', function () {
        if (highContrast) {
            switchStyles('normal');
            highContrast = false;
        } else {
            switchStyles('high-contrast');
            highContrast = true;
        }
    }

);