/** -=-=-=-=-=-=-=-= Begin Prestige Token Handler -=-=-=-=-=-=-=-=*/
var prestigeTokens;
function getTokens() { return prestigeTokens || getCookie("prestigeTokens") || 0;}
function setPrestigeTokensVar() {
  console.log("logged");
}
function saveTokens() { setCookie('prestigeTokens', prestigeTokens)}

!(function() {
  setPrestigeTokensVar();
  
})();
// -=-=-=-=-=-=-=-= End Prestige Token Handler -=-=-=-=-=-=-=-=
var shopItems = []
shopItems.push({
  xpMulti1: {

  },
  xpMulti2: {
    price: 2,
    description: "Multiply your Experience Gained by 2x."

  },
  colorBlue: {
    price: 1,
    description: function(){
  var prestige = parseInt(data.prestige);
    var prestigeString = (prestige > 0) ? "<info style='color:gold'><b>" + romanize(prestige) + "</b><info style='color:grey'>-<info style='color:purple'>LVL<info style='color:skyblue'> " + data.level : '<info style="color:purple">LVL <info style=\'color:green\'>' + data.level;

  var prestigeStringBlue = (prestige > 0) ? "<info style='color:gold'><b>" + romanize(prestige) + "</b><info style='color:grey'>-<info style='color:purple'>LVL<info style='color:skyblue'> " + data.level : '<info style="color:purple">LVL <info style=\'color:skyblue\'>' + data.level;
      
      return "Make your prestige color blue! Instead of "+ prestigeString + " It would be " + prestigeStringBlue;
    }
  }
}); 

const buyPrestigeColor = function() {
    
}


shopItems.get = (what, args=undefined) => what && what=='*' ? shopItems[0] : args ? shopItems[0][`${what}`][`${args}`] : shopItems[0][`${what}`];


var PrestigeShop = function() {
  this.tokens;
  this.itemsAndPrices = shopItems;
  this.itemNames = 
  this.init = function() {

  }

}
