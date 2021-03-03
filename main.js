    //For the prompt to add new note
    
    document.getElementById('addNote').addEventListener('click', function(){
        
    document.querySelector('.popup1').style.display ='flex';
    })
    //To exit prompt 1
    document.getElementById('cancel').addEventListener('click', function(){
        document.querySelector('.popup1').style.display ='none';
    })
    //To exit the prompt
    document.getElementById('cancel').addEventListener('click', function(){
        document.querySelector('.popup').style.display ='none';
    })
    //submit the written note to heading

    var note=  document.getElementById('newNote1');
    var newArticle = document.getElementById('noteList');
   note .addEventListener('submit', addHead);
   function addHead(e){ 
       e.preventDefault()
       var hArticle=document.createElement ('article');
       var newItem= document.getElementById('text').value
       var newHead=document.createElement('h2')
       
       hArticle.className='first-article'
       hArticle.id='new'
       newHead.appendChild(document.createTextNode(newItem));
       hArticle.appendChild(newHead);
       newArticle.appendChild(hArticle);
       document.querySelector('.popup').style.display ='flex';

       
       this.reset();

         
 }


    //Submit the written note to existing note  
        
       var noted=  document.getElementById('newNote');
        var newArticle = document.getElementById('noteList');
        
        
       noted.addEventListener('submit', addNew);
       function addNew(e){ 
           e.preventDefault()
            var art= document.getElementById('new')
            var parag = document.createElement('p');
           var nextItem= document.getElementById('tent').value
           parag.appendChild(document.createTextNode(nextItem));
           
           art.appendChild(parag);
           newArticle.appendChild(art);
           document.querySelector('.popup1').style.display ='none';
           document.querySelector('.popup').style.display ='none';




           
           this.reset();
    
             
     }
     // counting the number of notes
     
     document.getElementById('belowButton').addEventListener('click', function(){

       
        var element = document.getElementById('noteList');
          var numberOfChildren= element.children.length
            var count= document.getElementById('count');
            count.appendChild(document.createTextNode('You have' + ' ' + numberOfChildren + ' ' + 'notes'));
            
        this.reset();
        })
