var socket= io();

          socket.on('connect',function(){
              console.log("Connected to server");

              
              socket.emit('createMessage',{
                  from:'Somant',
                  text:'Yup that works'
              });
          });

          socket.on('disconnect',function(){
              console.log("Dsiconnected from server")
          });

          socket.on('newMessage',function(message){
                console.log('newMessage', message);
          });