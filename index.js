var array = [1,2,3]
function breakOut(array, changeValue, stopValue){
  for (let i = 0;  i < array.length; i ++){
    if (array[i] === stopValue){
      return array
    }
    else{
      array[i] = changeValue
    }
  }
}


function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue){
      continue
    }
    else {
      array[i] = changeValue
    }

  }
return array
}



function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue){
      continue
    }
    else {
      array[i] = changeValue
    }
  }
return array
}

function findBy(array, findFn){
  // let findFn = null
  for (let i = 0; i < array.length; i++){
    // if (array[i] === findFn(array[i])){
    if (findFn(array[i])){
      return array[i]
    }

  }

  return null
}



