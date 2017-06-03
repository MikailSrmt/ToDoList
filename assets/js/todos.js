
//Check Done
$("ul").on("click","li", function(){
    $(this).toggleClass("done");
});

$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().slideUp(function(){
        this.remove();
    });
});

$("input[type='text']").on("keypress",function(key){
    if(key.which === 13){
        var newToDo= $(this).val();
        $(this).val("");
        $("ul").append("<li>" + "<span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>"+ " " + newToDo + "</li>");
    }
    
});

$(".fa-pencil-square-o").on("click", function(){
    $("input[type='text']").slideToggle();
});