//Object approach
function uniqueCountWithObj(ar){
    var Ob = {};
    for(let val of ar){
        Ob[val] = (Ob[val] || 0) +1;
    }
    console.log(Object.keys(Ob).length , "with object approach");
}
uniqueCountWithObj([1,1,1,1,2,3,100]);

//Without array approach

function uniqueCountWithOutObj(ar){
    var i = 0;
    for(var j=1; j< ar.length; j++){
        if(ar[i] !== ar[j]){
            i++;
            ar[i] = ar[j];
        }
    }
    console.log(i+1,"without object approach") ;
}
uniqueCountWithOutObj([1,1,1,1,2,3,100]);