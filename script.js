// get
document.getElementById('myBtn').addEventListener('click' ,getData);

function getData(){
    //console.log('test);

    //
    fetch('https://randomuser.me/api/?results=5')
       .then(res => res.json())
       .then(data=>{
           // console.log(data);

           let author = data.results;
            //get data value        
           let output ="<h2><center>Get user data</center></h2>";
        // get data loop through
            author.forEach(function (lists){
                output +=`
                    <div class="container">
                            <div class="card mt-4 bg-light">
                                <ul class="list- group">
                                    <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                                    <li class="list-group-item"><image src = ${lists.picture.small}></image></li>
                                    <li class="list-group-item">Phone Number: ${lists.cell}</li>
                                    <li class="list-group-item">DOB: ${lists.dob.date}</li>
                                    <li class="list-group-item">Age: ${lists.dob.age}</li>
                                    <li class="list-group-item">Email ID:${lists.email}</li>
                                    <li class="list-group-item">Gender:${lists.gender}</li>
                                    <li class="list-group-item">City:${lists.location.city}</li>
                                    <li class="list-group-item">Country:${lists.location.country}</li>
                                    <li class="list-group-item">Postcode:${lists.location.postcode}</li>
                                </ul>
                            </div>
                    </div>`;
                
            
            });
            document.getElementById('output').innerHTML = output;
       });

};