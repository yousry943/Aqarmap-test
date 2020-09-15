$.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

$.fn.extend({
    treed: function (o) {
        
        var openedClass = 'fas fa-folder-open';
        var closedClass = 'fas fa-folder';
       

        if (typeof o != 'undefined'){
            if (typeof o.openedClass != 'undefined'){
                openedClass = o.openedClass;
            }
            if (typeof o.closedClass != 'undefined'){
                closedClass = o.closedClass;
            }
        };

        //initialize each of the top levels
        var tree = $(this);
        
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='fas fa-folder'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    $.ajax({
                        method: "get",
                        url: "/chartOfAccounts/getData/" + $(this).data('id'),
                        data: { id: 44 , _token: 'csrf_token()' },
                        success:function(data){
                            
                            $('.overview').html(data.html);
                        },
                        
                        error:function(msg){
                            alert( 'faild' + msg)
                        }
                      })
                       
                    var icon = $(this).children('i:first');
                    
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
        tree.find('.branch .indicator').each(function(){
            $(this).on('click', function () {
                $(this).closest('li').click();
            });
        });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        
    }
});

//Initialization of treeviews

$('#tree1').treed();

$('#tree2').treed({openedClass:'fas fa-folder-open', closedClass:'fas fa-folder'});

$('#tree3').treed({openedClass:'fas fa-folder-open', closedClass:'fas fa-folder'});
var file = '<i class="fas far fa-file-alt"></i>';
var iconfile = $('#tree1 ul li').not('.branch');
                    iconfile.prepend(file);

// console.log($('#tree1 ul li').length);


$('#loadingDiv')
    .hide()  // Hide it initially
    .ajaxStart(function() {
        $(this).show();
    })
    .ajaxStop(function() {
        $(this).hide();
    })
;

