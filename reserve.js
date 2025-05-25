//Problem - Reverse each word of a sentence without using the in-built reverse method.
 //Input = "one two three four five" Output = "eno owt eerht ruof evif" Make sure you are following best practices

//one eno
function reverseString(String msg){
    let result = "";
    let word = "";
    for(let i= 0; i<=msg.length; i++ ){
        const char = msg[i] || " ";
        if(char == " ") {
            let resversed = "";
            for(let j =word.length -1;j>=0;j-- ){
                resversed+=word[j];
            }
            result+=resversed+ " ";
            word = "";
        }else{
            word += char;
        }
    }
    return result;
}