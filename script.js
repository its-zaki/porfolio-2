let get = 0;
function contoler (x)
{
    get = get+x;
    slideshow (get)
}
setInterval(function ()
{
    get +=1;
    slideshow (get);
},1000)

slideshow (get)
function slideshow (num)
{
    let sliders = document.getElementsByClassName('left-img');
    if(num == sliders.length)
    {
        get =0;
        num =0;
    }
    

    for(let y of sliders)
    {
        y.style.display = 'none';
    }

    sliders[num].style.display = 'block';
}