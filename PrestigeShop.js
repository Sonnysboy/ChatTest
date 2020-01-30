
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
      
      return "Make your level color blue! Instead of "+ prestigeString + " It would be " + prestigeStringBlue;
    }
  }
});
shopItems.get = function(what, args=undefined) {
  return (what, args) => {what && what=='*' ? shopItems[0] : args ? shopItems[0][`${what}`][`${args}`] : shopItems[0][`${what}`] };
}
var PrestigeShop = function() {
  this.tokens;
  this.itemsAndPrices = shopItems;
  this.itemNames = 
  this.init = function() {

  }

}
