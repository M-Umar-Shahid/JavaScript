let para = document.getElementById('para');
para.addEventListener('mouseover',function toggle() {
    console.log('Mouse is inside');
})


function hide()
{

    if(para.style.display != 'none')
    {
        para.style.display ='none';
    }
    else
    {
        para.style.display ='block';
    }
}


