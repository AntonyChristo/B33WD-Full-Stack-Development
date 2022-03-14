//   1: For the given JSON iterate over all for loops (for, for in, for of, forEach)

       //for
            let numbers=[20,30,40,50];      
            for(let i=0;i<numbers.length;i++)
           {
            console.log(numbers[i]);
            }
            
         
         //for in
                var student={
                         name:"antony",
                         age:"21",
                        class:" 12th std",
                          };
               for(var ID in student)
                   {
                     console.log(ID+ ":"+student[ID]);
                     } 


                     
            
            //for of 
                    var value=[2,3,4,5,6];
                     for(let i of value)
                   {
                       console.log("index is",i,"value is",value);
                     }
                     
                    


         //for Each
                 var shop=[ "sandals","shoes","gloves","jackets"];

                   shop.forEach(products =>
                     {
                      console.log(products);
                      });
               