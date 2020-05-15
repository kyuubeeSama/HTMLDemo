
          $(document).ready(function(){
              var value = 0;
              var time = 2;
              function increment( ) {
                  value += 1;
                  $("#prog").css("width",value + "%");
                  if (value>=0 && value<=100) {
                      $("#prog").addClass("progress-bar-warning");
                  }
                
              
                  else{
                   
                      return;

                  }

                  st = setTimeout(increment(),time);
              }

              increment();
              
          });
          
          
          
