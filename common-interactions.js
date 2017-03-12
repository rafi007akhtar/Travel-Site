var current = $(".stay");
var nav1 = $("#nav1");
var nav2 = $("#nav2");
var nav3 = $("#nav3");
var nav4 = $("#nav4");
var nav5 = $("#nav5");
nav1.click(function()
{
    current.removeClass("stay");
    nav1.addClass("stay");
    current = nav1;
});

nav2.click(function()
{
    current.removeClass("stay");
    nav2.addClass("stay");
    current = nav2;
});
nav3.click(function()
{
    current.removeClass("stay");
    nav3.addClass("stay");
    current = nav3;
});
nav4.click(function()
{
    current.removeClass("stay");
    nav4.addClass("stay");
    current = nav4;
});
nav5.click(function()
{
    current.removeClass("stay");
    nav5.addClass("stay");
    current = nav5;
});

