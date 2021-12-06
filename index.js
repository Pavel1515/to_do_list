let array = []; // память которую скреплю с базой даных
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
