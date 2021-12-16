let array = []; // память которую скреплю с базой даных
let y ;
function clear(y) { // Удаление определеного значение
    array.splice(y , 1);
};
let indicator  = array.length; // Количество закладок
function clear_all() {  // Удаление всех закладок
    array = [];
};
let list  ;
let new_array = JSON.parse(localStorage.getItem("array"));
function render(){
     for (let i = 0; i < new_array.length; i++) {
        list = new_array[i];
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
        let inp = input.value;
        array[array.length] = inp;
        localStorage.setItem("array", JSON.stringify(array));
        
        }
      })



