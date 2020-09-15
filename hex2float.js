// Dan Bowen 2020 steamfire@gmail.com
// MIT License

//Function to convert hexadecimal text to a floating point number 
// 4bytes hex input (8 hex digits of 0-F range), to 32 bit Float.  
// Input: string formatted with a leading 0x, then 8 hex digits
// output: Floating point number, postive or negative.

function hex2float(input) {
  var hello = 'hello'
  v = new DataView(new ArrayBuffer(4))
 v.setUint32(0, input)
 
 //console.log(v.getFloat32(0))
 return v.getFloat32(0)
}
