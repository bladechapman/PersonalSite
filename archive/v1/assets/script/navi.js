//console.log("READY");
$(document).ready(function()
{

    //setup
    $('#superUltraSecret').text("Code Monkey");
    var animationInProgress = false;


    $("#about").click(function()
    {
        if(!animationInProgress)
        {
            if($('#superUltraSecret').text() !== "Read Up!")
            {
                $('#superUltraSecret').fadeTo("fast", 0, function(){
                    $('#superUltraSecret').text("Read Up!");
                    $('#superUltraSecret').fadeTo("fast", 1);
                });
            }
            var target;
            if ($(window).width() > 640) {
                target = 50;
            }
            else {
                target = (($(window).width()/2 - 150)/$(window).width())*100;
            }
            $('#aboutContent').animate(
                {'left' : target.toString() + '%'},
                {start : function()
                    {
                        animationInProgress = true;
                    }
                ,
                complete : function()
                    {
                        $('#contactContent').css({
                                'display' : 'none'
                        });
                        $('#projectContent').css({
                            'display' : 'none'
                        });
                        animationInProgress = false;
                    }
                }
            );

            $('#contactContent').animate({
                'left' : '150%'
            });

            $('#projectContent').animate({
                'left' : '150%'
            });

            $('#aboutContent').css({
                'display' : 'inline'
            });

            var buttonTarget;
            if ($(window).width() > 640) {
                buttonTarget = 25;
            }
            else {
                buttonTarget = -50;
            }
            $('#allButtons').animate({
                'left' : buttonTarget.toString() + "%" //moves left
            });
        }

    });
    $("#contact").click(function()
    {
        if(!animationInProgress)
        {
            if($('#superUltraSecret').text() !== "Get in Touch!")
            {
                $('#superUltraSecret').fadeTo("fast", 0, function(){
                    $('#superUltraSecret').text("Get in Touch!");
                    $('#superUltraSecret').fadeTo("fast", 1);
                });
            }

            $('#contactContent').animate(
                {'left' : '50%'},
                {start : function()
                    {
                        animationInProgress = true;
                    }
                ,
                complete : function()
                    {
                        $('#aboutContent').css({
                                'display' : 'none'
                        });
                        $('#projectContent').css({
                            'display' : 'none'
                        });
                        animationInProgress = false;
                    }
                }
            );


            $('#aboutContent').animate({
                'left' : '150%'
            });
            $('#projectContent').animate({
                'left' : '150%'
            });

            var buttonTarget;
            if ($(window).width() > 640) {
                buttonTarget = 25;
            }
            else {
                buttonTarget = -50;
            }
            $('#allButtons').animate({
                'left' : buttonTarget.toString() + "%" //moves left
            });

            $('#contactContent').css({
                'display' : 'inline'
            });
        }

    });
    $("#project").click(function()
    {
        if(!animationInProgress)
        {
            if($('#superUltraSecret').text() !== "Take a Gander!")
            {
                $('#superUltraSecret').fadeTo("fast", 0, function(){
                    $('#superUltraSecret').text("Take a Gander!");
                    $('#superUltraSecret').fadeTo("fast", 1);
                });
            }
            var target;
            if ($(window).width() > 640) {
                target = 50;
            }
            else {
                target = (($(window).width()/2 - 150)/$(window).width())*100;
            }
            $('#projectContent').animate(
                {'left' : target.toString() + '%'},
                {start : function()
                    {
                        animationInProgress = true;
                    }
                ,
                complete : function()
                    {
                        $('#contactContent').css({
                                'display' : 'none'
                        });
                        $('#aboutContent').css({
                            'display' : 'none'
                        });
                        animationInProgress = false;
                    }
                }
            );
            $('#aboutContent').animate({
                'left' : '150%'
            });
            $('#contactContent').animate({
                'left' : '150%'
            });

            var buttonTarget;
            if ($(window).width() > 640) {
                buttonTarget = 25;
            }
            else {
                buttonTarget = -50;
            }
            $('#allButtons').animate({
                'left' : buttonTarget.toString() + "%" //moves left
            });

            $('#projectContent').css({
                'display' : 'inline'
            });
        }
    });

    $("#clickable_header").click(function()
    {
        returnHome();
    })
    $("#homeButton").click(function()
    {
        returnHome();
    });

    function returnHome() {
        if(!animationInProgress)
        {
            if($('#superUltraSecret').text() !== "Code Monkey")
            {
                $('#superUltraSecret').fadeTo("fast", 0, function(){
                    $('#superUltraSecret').text("Code Monkey");
                    $('#superUltraSecret').fadeTo("fast", 1);
                });
            }

            $('#allButtons').animate(
                {'left' : '50%'},
                {start : function()
                    {
                        animationInProgress = true;
                    }
                ,
                complete:function()
                    {
                        $('#aboutContent').css({
                            'display' : 'none'
                        });
                        $('#contactContent').css({
                            'display' : 'none'
                        });
                        $('#projectContent').css({
                            'display' : 'none'
                        });
                        animationInProgress = false;
                    }
                }
            );

            $('#aboutContent').animate({
                'left' : '150%'
            });
            $('#contactContent').animate({
                'left' : '150%'
            });
            $('#projectContent').animate({
                'left' : '150%'
            })
        }
    }
});
