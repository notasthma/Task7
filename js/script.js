jQuery(document).ready(function($){
    
    $('.btn').on('click', function(){
        var textValue=$('#text').val();
        if(textValue===''){
            alert('Where is my secret?');
            return;
        }
        $('.tasks').prepend(textValue);
        $('.tasks').prepend('<br>');
    });
    
});