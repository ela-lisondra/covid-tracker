//this module is to sanitize data/scientific of the countries. It will remove the comma and convert the sstrings into number
export default function toNum(str){
    //this function will receive a string and return a number.
    //convert a sting into an array by using a spread operator

    const arr = [...str]
    const filteredArr = arr.filter(element => {

        //iterates over all the elem, items in an array and passes the items that pass a condition into a new array Unlike find(), filter iterates over all items , but in fid() it stops when an item has passed the condition.

        return element !== ","
    })
    //orig arr
    // console.log(arr)
    //filtered arr
    // console.log(filteredArr)

    //reduce the array into a singlee string and the string will be parsed into an integer
    return parseInt(filteredArr.reduce((x,y) => {

        /*
        reduce():

        on the first iteration:

        x is the first item in the array
        y is the second item in the array

        on the second iteration:

        x is the value of the addition in the first iteration
        y is the next item in the array

        Note:  Strings do not add, instead it concatenates
        */

        // console.log(x)
        // console.log(y)

        return x+y
    }))
}
