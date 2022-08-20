function ascendDescend(length, minimum, maximum) {
    let array = []
    let i = 0
    let x = minimum - 1 
  while(i < length){
        while(( x===maximum || x > minimum) && i< length){
            x--
            array.push(x)
            i++
        } 
        x++
        while(x <= maximum && i < length){
            array.push(x)
            i++
            x++
        }
        x--
  }

//   for(let i = 0 ; i < length;){
//     if(array[i-1] === maximum){
//         for(let x = maximum - 1; x >= minimum; x--){
//             array.push(x)
//             i++
//         }
//     }else for(let x = minimum; x <= maximum; x++){
//         if(array[i-1] === minimum){
//             x++
//             array.push(x)
//             i++
//         }else{
//             array.push(x)
//             i++
//         }
//     }
//   }
    
    return array.join("")
  }

  ascendDescend(14, 0, 2)