
Gizmo.Ajax.behaviors.core  = function(context, settings){
                
    $('.use-ajax:not(.ajax-processed)', context)
    .addClass('ajax-processed')
    .removeClass('ajax-modal-close')            
    .click(function(event){
        event.preventDefault();

        $(this).ajaxCall();
    });
        
    $('.ajax-modal-close:not(.ajax-modal-processed)', context)
    .addClass('ajax-modal-processed')
    .removeClass('ajax-modal-close')
    .click(function(event){
        event.preventDefault();
        $('#ajax-modal').modal('hide');
    });
            
    $('.use-ajax-submit:not(.ajax-submit-processed)', context)
    .addClass('ajax-submit-processed')
    .submit(function(event){
        event.preventDefault();
        $(this).ajaxCall();
    });
        
    $('.use-ajax-confirm:not(.ajax-confirm-processed)',context).click(function(e){
        e.preventDefault();
        
        var href = $(this).attr('href');
        $('<div href="'+href+'">Are you sure you want to perform this action?</div>')
        .dialog({
            title : 'Confirmation',
            modal : true,
            resizable : false,
            height : 140,
            width: 500,
            buttons : {
                OK : {
                    'text'  : 'OK',
                    'class' : 'btn btn-primary',                        
                    'click' : function (){
                        $(this).ajaxCall();
                        $(this).dialog('close');
                    }
                },
                Cancel : {
                    'text'  : 'Cancel',
                    'class' : 'btn',                        
                    'click' : function (){
                        $(this).dialog('close');
                    }
                }
            }
        });
        
    }).addClass('ajax-confirm-processed');
    
    $('.ajax-managed-file:not(.ajax-managed-processed)', context)
    .addClass('ajax-managed-processed')
    .managedFile();
    
    
    
    $('.element-select:not(.element-select-processed)').chosen({
        no_results_text: "No results matched"
    }).addClass('element-select-processed');
    
    //    $('.element-select-multi').attr('multiple','').attr('data-rel',"chosen").chosen({
    //        no_results_text: "No results matched"
    //    });
    
    $("textarea.editor:not(.editor-processed)").cleditor().addClass('editor-processed');
    
    $(".element-alphanum:not(.element-alphanum-processed)")
        .attr('pattern','[a-zA-Z0-9/-]+')
        .attr('title',"Alpha-Number Characters are allowed with '-' only")
        .addClass('element-alphanum-processed');
    
//    $('.btn-danger').not('.btn-processed').click(function(e){
//        e.preventDefault();
//        $('#myModal').modal('show');
//        $('.btn-primary','#myModal').attr('href',$(this).attr('href'));
//    }).addClass('btn-processed'); 

} ;

$(document).ready(function(){
   
    Gizmo.Ajax.attachBehaviors(document);
   
});