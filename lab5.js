document.querySelector('#height').oninput = () => {
    return calculator();
}
document.querySelector('#width').oninput = () => {
    return calculator();
}

function calculator() {
    let height = Number(document.getElementById("height").value);
    let width = Number(document.getElementById("width").value);
if(height > 0 && width > 0) {
    document.getElementById("perimetr").innerHTML = 2 * width + 2 * height;
    document.getElementById("plosha").innerHTML = height * width;
    document.getElementById("diagonal").innerHTML = Math.sqrt(height * height + width * width);
}
}

document.querySelector('#images').addEventListener('click', function (e) {
    let images = ['me.jpg', 'me1.jpg', 'me2.jpg', 'me3.jpg'];
    let id = e.target.id;
    for (let i = 0; i < images.length; i++) {
        if (id === images[i]) {
            document.getElementById("bigImage").src = id;
        }
    }
});

document.querySelector('#ukrainian').oninput = () => {
    return translit();
}

function translit() {
    let before = document.getElementById("ukrainian").value;
    let after = '';
    let transliteration = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ї': 'yi',   'ж': 'zh',   'з': 'z',    'и': 'y',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '\'',     'і': 'i',    'є': 'ye',
        'ю': 'yu',   'я': 'ya',

        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ї': 'Yi',   'Ж': 'Zh',   'З': 'Z',    'И': 'Y',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '\'',     'І': 'I',    'Є': 'Ye',
        'Ю': 'Yu',   'Я': 'Ya'
    }
    for (let i = 0; i < before.length; ++i) {
        if (transliteration[before[i]] === undefined) {
            after += before[i];
        } else {
            after += transliteration[before[i]];
        }
    }

    document.getElementById("english").innerHTML = after;
}

function dayOfWeek() {
    let date = Date.parse(document.getElementById("day").value);
    let newDate = new Date(date);
    let day = Number(newDate.getDate());
    let month = Number(newDate.getMonth() + 1);
    let year = Number(newDate.getFullYear());
    let a = Math.floor((14 - month) / 12);
    let y = year - a;
    let m = month + 12 * a - 2;
    let dayOfWeek = Math.floor(day + y + y / 4 - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
    let dayName
    switch (dayOfWeek) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
    }
    document.getElementById("dayName").innerHTML = dayName;
}