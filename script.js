//your code here
<div class="demo">

		This is a demo of box model try to replicate this box model in Html and Css and try to pass all the test cases.

	</div>
            <img id="drag5" src="https://picsum.photos/200/300.jpg" draggable="true">

        </div>

        <div id="div6" class="image-box">

            <img id="drag6" src="https://picsum.photos/id/102/200/300" draggable="true">

        </div>

    </div>
	  <script>
		    let draggedImage = null;
    function allowDrop(event){
        event.preventDefault();
    }
    function drag(event){
        draggedImage = event.target;
    }

    function drop(event){
        event.preventDefault();
        const targetContainer = event.currentTarget;

       if(targetContainer !== draggedImage.parentElement){
        const targetImage = targetContainer.querySelector('img');

        const tempSrc = targetImage.src;
        targetImage.src = draggedImage.src;
        draggedImage.src = tempSrc;
       }
    }
