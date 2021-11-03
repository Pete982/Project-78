var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg"
,"https://www.pinclipart.com/picdir/big/35-353068_mother-with-short-brown-hair-clip-art-at.png", 
"https://easydrawingguides.com/wp-content/uploads/2021/01/Cartoon-Dad-Step-11.png",
 "https://q4c3e7d3.stackpathcdn.com/wp-content/uploads/2019/03/Boy2small-1.png", 
"https://us.123rf.com/450wm/hermandesign2015/hermandesign20151704/hermandesign2015170400162/75927171-cute-boy-go-to-school.jpg?ver=6"
];
var names = ["Fmaily Book","Nicky Delijani", "Cormac Estridge", "John", "Joseph Estridge",
];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
   
    var updatedImage = [images];
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
