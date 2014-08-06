/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */


var ads = [];
             
                         
ads.push({ 
    "title": 'This was hard', 
    "desc" : 'I think i learn something today!' 
});
ads.push({ 
    "title": 'But still sucks', 
    "desc" : 'I like this class' 
});
ads.push({ 
    "title": 'I hope i get an A', 
    "desc" : 'Will see what happens at the end of the Quarter' 
});
ads.push({ 
    "title": 'no matter waht this still sucks', 
    "desc" : 'Javascript is hard' 
});

ads.push({ 
    "title": 'but im still trying to learn', 
    "desc" : 'like i said before, it sucks' 
});

// using a function to return one of my random arrays
function rand (max) {
  return Math.floor (Math.random()*max);  
}
// created a variable to hold my random array aoject
var adRandIndex = rand (ads.length);

//createda avariable to hold the elemnt form the html fime  'ad'
var divAd = document.getElementById('ad');


divAd.innerHTML = ads [adRandIndex].desc;


// another function to change the document tittle 
function changeDocumentTitle( title )
{
  document.title = title;
}
//call the function to change ads to be the same as tittle
 changeDocumentTitle([ads.title]);
 
 document.title = ads[adRandIndex].title + '...';
 
 
console.log(ads[adRandIndex].title);
console.log(ads[adRandIndex].desc);










