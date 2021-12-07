let array = [ 13 , 12, 4324, 'gsdbfdngdb']; // память которую скреплю с базой даных
let x ;
function  add(x) {  // Функция добавление
    array[array.length] = x;
};
let y ;
function clear(y) { // Удаление определеного значение
    array.splice(y , 1);
};
let indicator  = array.length; // Количество закладок
function clear_all() {  // Удаление всех закладок
    array = [];
};
let list  ;
 for (let i = 0; i < array.length; i++) {
    list = array[i];
    var elem = document.createElement("div");
    elem.className = 'fr';
    elem.innerHTML = list;
    document.body.append(elem);
}
