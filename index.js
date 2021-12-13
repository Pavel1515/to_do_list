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
let list  ;
function render(){
    for (let i = 0; i < array.length; i++) {
        list = array[i];
        var elem = document.createElement("li");
        elem.className = 'fr';
        elem.innerHTML = list;
        let li = document.querySelector('.list')//поставил в ли елементы
        li.appendChild(elem);
    }
    
}
render();
// ловим импут
    let input = document.querySelector('#input');
    input.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
         add(input.value);
         
          render.reload();
        }
      })



