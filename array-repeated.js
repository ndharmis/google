
var getIncludes = (str, ch) => {

    for(let i=0;i<str.length;i++) {
        if(str[i] === ch) {
            return i+1;
        }
    }

    return -1;
}
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s === null || s.length === 0) {
        return 0;
    }
    
    if(s.length !== s.trim().length) {
        if(s.trim().length === 0) return 1;
    }
    
    let i=0,j=0;
    let tempString = "", finalString="", prevIndex = -1;
    
    while(j<s.length) {

        let index = getIncludes(tempString, s.charAt(j));

        if(index !== -1) {

            if(tempString.length >= finalString.length) {
                finalString = tempString;
                
            }
            tempString = "";
            
            i = prevIndex + index;
            j = prevIndex + index;

        } 
        
        if(prevIndex < 0) {
            prevIndex = i;
        }
            
        if(tempString === "") {
              prevIndex = i;   
             }
        
        tempString +=  s.charAt(j);
        
         j = j+1;
       
    }
    
    if(tempString.length >= finalString.length) {
                finalString = tempString;
                tempString = "";
            }
    console.log(finalString);
    
    return finalString.length;
};
