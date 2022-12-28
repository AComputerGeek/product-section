const $quantity   = $(`#quantity`);
const $totalPrice = $(`#total-price`);

const $color  = $(`#color`);
const $black  = $(`#black`).val();
const $red    = $(`#red`).val();
const $grey   = $(`#grey`).val();

const $size   = $(`#size`);
const $small  = $(`#small`).val();
const $medium = $(`#medium`).val();
const $large  = $(`#large`).val();

const $thumbs = $(`#thumbs a`);

// Constants
const pricePerUnit    = 20.0;
const commonPartOfSrc = 15;

/* 
----
Form
----
*/
$(`form`).on("input", function(event)
{
    // Price
    let total = parseFloat($quantity.val()) * pricePerUnit;
    $totalPrice.text(total.toFixed(2));

    // Color
    if($(`#black`).is(":checked"))
    {
        $color.text($black);
        displayThisColor($black);
    }
    else if($(`#red`).is(":checked"))
    {
        $color.text($red);
        displayThisColor($red);
    }
    else
    {
        $color.text($grey);
        displayThisColor($grey);
    }

    // Size
    if($(`#small`).is(":checked"))
    {
        $size.text($small);
    }
    else if($(`#medium`).is(":checked"))
    {
        $size.text($medium);
    }
    else if($(`#large`).is(":checked"))
    {
        $size.text($large);
    }

    // Active the button, and update its value to "Add to Cart"
    if($(`#small`).is(":checked") || $(`#medium`).is(":checked") || $(`#large`).is(":checked"))
    {
        $(`#submit`).removeClass("disabled-button");        
        $(`#submit`).removeAttr("disabled"); // $(`#submit`).prop("disabled", false);
        $(`#submit`).val("Add to Cart");
    }
    else // size isn't selected
    {
        $(`#submit`).addClass("disabled-button");    
    }
});


/* 
-------
Gallery
-------
*/
$thumbs.click(function(event)
{
    event.preventDefault();

    $thumbs.removeClass("selected");
    $(this).addClass("selected");

    if($(`#black`).is(":checked"))
    {
        displayThisColor($black);
    }
    else if($(`#red`).is(":checked"))
    {
        displayThisColor($red);
    }
    else
    {
        displayThisColor($grey);
    }
});


function displayThisColor(aColor)
{
    const src = $(".selected").attr("href"); 

    const firstChildSrc  = src.substring(0, commonPartOfSrc) + aColor.toLowerCase() + "-no-model.jpg";
    const secondChildSrc = src.substring(0, commonPartOfSrc) + aColor.toLowerCase() + "-front.jpg";
    const thirdChildSrc  = src.substring(0, commonPartOfSrc) + aColor.toLowerCase() + "-back.jpg";

    if(src.indexOf("no-model") >= 0) // "no model" is selected
    {
        const mainSlideSrc = src.substring(0, commonPartOfSrc) + aColor + "-no-model.jpg";
        $(`.main-slide img`).attr({
            "src":mainSlideSrc,
            "alt":mainSlideSrc
        });
    
        $(`#thumbs a:nth-child(1) img`).attr({
            "src":mainSlideSrc,
            "alt":mainSlideSrc
        });
    
        $(`#thumbs a:nth-child(2) img`).attr({
            "src":secondChildSrc,
            "alt":secondChildSrc
        });
    
        $(`#thumbs a:nth-child(3) img`).attr({
            "src":thirdChildSrc,
            "alt":thirdChildSrc
        });
    }
    else if(src.indexOf("front") >= 0) // "front" is selected
    {
        const mainSlideSrc = src.substring(0, commonPartOfSrc) + aColor + "-front.jpg";
        $(`.main-slide img`).attr({
            "src":mainSlideSrc,
            "alt":mainSlideSrc
        });
    
        $(`#thumbs a:nth-child(1) img`).attr({
            "src":firstChildSrc,
            "alt":firstChildSrc
        });
    
        $(`#thumbs a:nth-child(2) img`).attr({
            "src":mainSlideSrc,
            "alt":mainSlideSrc
        });
    
        $(`#thumbs a:nth-child(3) img`).attr({
            "src":thirdChildSrc,
            "alt":thirdChildSrc
        });
    }
    else // "back" is selected
    {
        const mainSlideSrc = src.substring(0, commonPartOfSrc) + aColor + "-back.jpg";
        $(`.main-slide img`).attr({
            "src":mainSlideSrc,
            "alt":mainSlideSrc
        });
    
        $(`#thumbs a:nth-child(1) img`).attr({
            "src":firstChildSrc,
            "alt":firstChildSrc
        });
    
        $(`#thumbs a:nth-child(2) img`).attr({
            "src":secondChildSrc,
            "alt":secondChildSrc
        });
    
        $(`#thumbs a:nth-child(3) img`).attr({
            "src":mainSlideSrc,
            "alt":mainSlideSrc
        });
    }
}
