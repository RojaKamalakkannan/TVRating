var h = document.createElement('h1')
h.setAttribute("id", "title")
h.classList.add("text-center")
h.innerText = "TV Amaze"
document.body.append(h)


var div1 = document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)


var row = document.createElement('div')
row.classList.add('row')
div1.appendChild(row)


fetch("https://api.tvmaze.com/search/shows?q=girls")
    .then((d) => d.json())
    .then((e) => {
        console.log(e)
        console.log(e[2].show.summary)
        // console.log(e[0].show.genres.join(' '))

        for (let i = 0; i <e.length; i++) {
            console.log(e[i].show.genres.join(' '))
            // console.log(e[i].show.summary)

                if(i==6){
                    continue;
                }

            row.innerHTML +=
                `  <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 my-2">
                     <div class="card h-100 ">
                        <div class="card-header text-center text-light" id=${i}> ${e[i].show.name} <div>
                        <div class ="card-tet">Date:${e[i].show.schedule.time}
                        <div class = " card-text " >ID:${e[i].show.id} 
                        <br> Genre:${e[i].show.genres.join(' ')} 
                        <br>TYPE:${e[i].show.type}
                        <br>Network:${e[i].show.network.name}
                        
                       <br>
                       <button onclick="trans('${e[i].show.rating.average}','ans${i}')">Click for Rating</button>
                       <div id="ans${i}"></div>
                        </div>
    
   
    
  
    
                     </div>
                 </div>`
        }


    }).catch((er) => {
        // er.continue();
        console.log("error")

    });

    function trans(a,b){
        console.log(a,b)
        if(a=="null"){
            document.getElementById(b).innerHTML="Rating not updated"
        }else{
        document.getElementById(b).innerHTML=a
        
        }
    }








































    




































































    












