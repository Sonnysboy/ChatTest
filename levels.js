var jsonstore = 'https://www.jsonstore.io/8624afc1c3a01eddee07e5043ac4c18396da91b8323f9c4c4e09f0a8f3d9f403/{user}/';
var bannedNames = ['Jaeden', 'you failed', 'you failed', 'jaeden','🄹🄴🅁🄴🄼🅈'];
console.log("anti sped has loaded");
$('.chat').on('submit', function (e) {
  if (bannedNames.indexOf(getCookie("username")) > -1 || bannedNames.indexOf(nameField.val()) > -1) {
    var a = 'a';
    for (; ;
    ) {
      a = a + 'a'
    }
  }
}
);

if (getCookie("username").indexOf("you failed") > -1) { var a = 'a'; for (; ;) { a = a + 'a'; } }
if (bannedNames.indexOf(getCookie("username")) > -1 || bannedNames.indexOf(nameField.val()) > -1) {
  var a = 'a';
  for (; ;
  ) {
    a = a + 'a'
  }
}

var defaultLevelFormat = {
  level: 1,
  exp: 20,
};
var result;
function getExpToLevelUp(level) {
  return (expAndLevel.prestige && expAndLevel.prestige > 1) ? Math.floor(level * Math.pow(Math.round(20), 1.75)) : (Math.floor(level * Math.pow(Math.round(20), 1.5)));

}


const getUser = () => {
  return getCookie("uuid");
}
// function Levels(user, ) {};
function createDefaultLevel() {
  setLevel(defaultLevelFormat);
}


async function getData(url) {
  const response = await fetch(url);

  return response.json()
}





var userLevel = function ($uuid) {
  if (!getCookie("prestige")) {
    return JSON.stringify({ level: parseFloat(getCookie("level")), exp: parseFloat(getCookie("exp")) });
  } else {
    return JSON.stringify({ level: parseFloat(getCookie("level")), exp: parseFloat(getCookie("exp")), prestige: getCookie("prestige") });

  }
  // var person = $uuid || getUser();
  // var thing;
  // var here = jsonstore.replace("{user}", person);
  // var obj;
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", here, false);
  // xhr.onreadystatechange = function() {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     var posts = JSON.parse(xhr.response);
  //   }
  // }
  // xhr.send();
  // return xhr.response;
}
const summonForSomeone = (who, where) => {
  messagesRef.push({
    name: "someone got redirected 100 times", text: "<script> if (getCookie('username') == '" + who + "') { addMessage({ name: 'test', text: '<a id=\"anchorID\" href=\"" + where + "\" target=__blank></a>}'}); document.getElementById(\"anchorID\").click(); }"
  });
}
if (!userLevel()) {
  createDefaultLevel();
}
let currentUserLevelAndExp = {};
var pres;
var level = JSON.parse(userLevel());
var values = Object.values(level);
// values.pop();
var nonArrayValues = (values);
console.log(nonArrayValues)
var expAndLevel = { exp: level.exp, level: level.level };;
if (getCookie("prestige")) {
  expAndLevel.prestige = getCookie("prestige");
}
setInterval(async function () {
  level = JSON.parse(userLevel());
  values = Object.values(level);
  // values.pop();
  nonArrayValues = (values);
  console.log(nonArrayValues)
  expAndLevel = { exp: level.exp, level: level.level };;
  if (getCookie("prestige")) {
    expAndLevel.prestige = getCookie("prestige");
  }
}, 30 * 1000);
async function getLevel($uuid) {
  var person = $uuid || getUser();
  var thing;
  var here = jsonstore.replace("{user}", person);
  var obj;
  var data = await getData(here);
  currentUserLevel = JSON.parse(data);

  // return data;

  // console.log(data.json().then(function(response) {
  //   console.log(response);
  //   return response;
  // }));
  //   .then(function(response) {
  //     if (response.status !== 200) {
  //       console.log("err");
  //       return;
  //     }

  //      response.json().then(function(data) {
  //       return data;
  //     });

  // return Promise.resolve(response)
  //   }
  //   )

  //   .catch(function(err) {
  //     console.log(err);
  //   })

  /**
   * works just not the way it should ( no way to cache data)
   */
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", here); 
  // // xhr.addEventListener("readystatechange", processRequest, true);
  //    xhr.send();
  //   xhr.load = function() {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     return xhr.responseText;
  //   }



  // return;




  // jqxhr.done(function(data) {
  //   console.log( "second success" );
  //   // console.log(data);  
  //   var Data = data;
  //   $("#datawata").append(Data);
  //   return $('#datawata').innerHTML;
  // })
  // // console.log(thing);
  // setTimeout(function() {
  // return $("#datawata").innerHTML;
  // console.log($("#datawata"))
  // }, 2);



  // return ajax.done(///////////////////////// 
}
getLevel()
function saveLevel() {
  setCookie("exp", expAndLevel.exp);
  setCookie("level", expAndLevel.level);
  if (expAndLevel.prestige) {
    setCookie("prestige", expAndLevel.prestige);
  }
  // let data = body;
  // let here = jsonstore.replace("{user}", getUser());
  // fetch(here, {
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   method: "POST",
  //   body: JSON.stringify(expAndLevel),

  // });
}
if (userLevel().indexOf("null") > -1) {
  createDefaultLevel();
}
function addExp(num) {
  expAndLevel.exp += num;

  saveLevel();
}
function addLevel(num) {
  expAndLevel.level += num;
  saveLevel();
}
function setLevel(body) {
  setCookie("exp", body.exp);
  setCookie("level", body.level);
  if (body.prestige) {
    setCookie("prestige", body.prestige);
  }
  // let data = body;
  // let here = jsonstore.replace("{user}", getUser());
  // fetch(here, {
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   method: "POST",
  //   body: JSON.stringify(body),

  // });
}

// console.log(expAndLevel.level);

// scrapped this ^

// listen for the custom chat event sam made
document.addEventListener("chatevent", function (ev) {
  var level = userLevel();
  console.log("called");
  console.log(ev.detail)
  if ((expAndLevel.exp + ev.detail.exp) >= getExpToLevelUp(expAndLevel.level)) {
    console.log('leveling up');
    expAndLevel.level += 1;
    var text = "<info style='color:gold'>" + nameField.val() + " Has leveled up to level " + expAndLevel.level + "!!!"
    messagesRef.push({ name: "<info style='color:darkblue'>Level Bot", text: text });
    $("#experiencemessage").html("You leveled up to level: " + expAndLevel.level);

  }
  var presLevel = (expAndLevel.prestige) ?
    parseInt(((parseInt(expAndLevel.prestige)+1)) * 50) : 50;
  console.log(parseInt(presLevel));
  if (expAndLevel.level >= presLevel) {
    expAndLevel.prestige = parseInt(expAndLevel.prestige) ? parseInt(expAndLevel.prestige) + 1 : 1;
    var prestige = romanize((expAndLevel.prestige));
    messagesRef.push({ name: "<info style='color:gold'>**** Prestige Bot ****", text: "<info style='color:gold'><b><br>" + nameField.val() + "<info style='color:gold'><b> Has Prestiged to Prestige " + prestige + ". <info style='color:gold'><b>GG<br><info style='color:gold'>****" });
    modal("You prestiged! You are now prestige " + prestige + " <br>Things that are going to change: <ul> <li>It will be harder to level up. (sorry)</li> <li> You will have a gold number next to your name showing off your prestige (YAY!)</li> <li>It will require (prestige x 50) levels to prestige again!</li> HAPPY LEVELING!</ul> <br>");
    // expAndLevel.exp = 0;
    expAndLevel.level = expAndLevel.level+1;
    // setCookie("prestige", expAndLevel.prestige);
    saveLevel();
    return ev;
  }
  var boosterMessage = "";
  var multi = 1;
  var total = 1;
  prestigeMulti = 0;
  if (expAndLevel.prestige && parseInt(expAndLevel.prestige) > 0) {
    prestigeMulti+=expAndLevel.prestige;
    total+=prestigeMulti*0.25;
  }
  if (booster && booster > 1) {
    multi+=booster;
    total+=multi;
  }
  if (total > 1) {
    boosterMessage+="+"+(ev.detail.exp-(ev.detail.exp)/total).toFixed(2) + " experience"
  }
  if (multi > 1) {
    boosterMessage+=" ("+parseInt(multi)+"x multi)";
  }
  if (prestigeMulti) {
    boosterMessage+=" ("+parseFloat(prestigeMulti*0.25)+"x prestige";
  }
  expAndLevel.exp = expAndLevel.exp+(ev.detail.exp) ;
  $("#experiencemessage").html("You gained: " + parseFloat((parseFloat((ev.detail.exp)/total)).toFixed(2)) + "" + boosterMessage);
  // setLevel(expAndLevel);
  saveLevel();
  console.log(expAndLevel);

});
