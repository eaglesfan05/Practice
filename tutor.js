
//build function to add next index property to previous//
function testarray(arr){
    //declare empty array that will be pushed to//
    var empty = [];
    for (var i = 0; i<arr.length; i++){
        //takes an array and adds next index to it to create a new array//
        if(arr[i + 1]){
            empty.push(arr[i] + arr[i + 1])
        } else {
            empty.push(arr[i])
        }
        //when get to the last element return the element//
        
    }
    console.log(empty)      
    
}

testarray([1, 2, 3, 4, 5])