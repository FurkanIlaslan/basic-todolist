
let gorevListesi = [
    // {id:"1", gorevAdi:"Gorev-1"},
    // {id:"2", gorevAdi:"Gorev-2"},
    // {id:"3", gorevAdi:"Gorev-3"},
];

    displayTask();
    
    // displayTask fonksiyonunu yeni görev eklendiği zaman onu ul içerisine liste elemanı olarak yzdırmak için kullanıyoruz.
    function displayTask(){
        
    let ul = document.querySelector("#task-list");
    ul.innerHTML="";

    for(let gorev of gorevListesi){
    
    let li = `
            <li class="task list-group-item">
                <div class="form-check">
                   <input type="checkbox" id="${gorev.id}" class="form-check-input">
                    <label for="${gorev.id}" class="form-check-label"> ${gorev.gorevAdi} </label>
                </div>
                    <button class="border-0 bg-transparent">
                        <a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a>
                    </button>             
            </li>
            `;

        ul.insertAdjacentHTML("beforeend", li);
        };
    };

// Bu kısım yeni eleman ekleme kısmı. Eleman eklemek için inputa girilen değeri butona bastığım zaman ul listesinin içine yazdırmam lazım. 

let taskInput = document.querySelector("#txtInputName");
let button = document.querySelector("#btnAddNewTask");

button.addEventListener("click", function(event){
if(taskInput.value == ""){
    alert("Bir görev giriniz.")
}else{
    gorevListesi.push({"id":gorevListesi.length+1 , "gorevAdi":taskInput.value});
    taskInput.value="";
}
displayTask(); // Yeni eleman eklendikten sonra son durumu görmek için kullanıyorum bu fonksiyonu.
event.preventDefault(); // buton submit özelliğinde olduğu için sayfa yenileniyor ve çıktı görünmüyor. Onu engellemek için kullandım.
})

// Eklenen elemanları silme işlemini yapalım. Bunun için öncelikle yapmam gereken şey sil butonuna ulaşmak.

let deletedId;

function deleteTask(id){
    for(gorev in gorevListesi){
        if(gorevListesi[gorev].id == id){
            deletedId = gorev;
        }
    };
    gorevListesi.splice(deletedId,1);
    displayTask();
};


//Şimdi de temizle butonu ile tüm elemanları bir kerede temizleme işlemini yapalım. Bunun için yine temizle butonuna erişmemiz ve click olduğunda tüm elemanları silmemiz gerekiyor. 

let clearBtn = document.querySelector("#btnClear");

clearBtn.addEventListener("click",function(){
    gorevListesi.splice(0, gorevListesi.length);

    displayTask();
});
