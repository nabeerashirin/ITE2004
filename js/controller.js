/**
 * Created by Vineeth on 17-10-2017.
 */
const {ipcRenderer}=require('electron');
let $start=$('#start');
let fileEvent;
let imageLoader;
$(function () {
    $('select').material_select();
    imageLoader = document.querySelector('#imageLoader');
    imageLoader.addEventListener('change',e=>fileEvent=e, false);
    function startSimulation(){
        let reader = new FileReader();
        reader.onload = function(event){
            let data={
                image:event.target.result,
                sims:$('#sims').val(),
                type:$('.select-dropdown').val()
            };
            console.log(data);
            ipcRenderer.send('data:load',data);
        };
        reader.readAsDataURL(fileEvent.target.files[0]);
    }
    $start.click(function () {
           startSimulation();
    });
});
