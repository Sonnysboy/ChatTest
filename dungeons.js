Element.prototype.toggleAttribute = function (what) {
    if (this.hasAttribute(what)) this.removeAttribute(what);
    else this.setAttribute(what, true);
  }
  
  var bossHealths = [10, 20, 30, 40, 50, 60, 70];
  function summonABoss() {
    var health = bossHealths[Math.floor(Math.random() * bossHealths.length)];
    var message = { name: "announcer", text: "A level 3 clickboss has spawned with " + health + ", defeat it to earn experience!" }
    $('#clickboss').html(parseInt(health));
  
    setInterval(function () {
  
    }, 10);
    $("#clickboss").click(() => {
      messagesRef.push({ damageBoss: 1, name: nameField.val() });
    });
    messagesRef.push(message);
  }
  function damageBoss(int, name) {
    var health = parseInt($("#clickboss").html());
    health -= int;
    var hissName = arguments[1];
    if (health >= 1) {
      $("#clickboss").html((health));
    }
    if (health == 0) {
      messagesRef.push({ name: "Announcer", text: "A level 3 clickboss has been defeated by " + arguments[1] + ". They earned 40 experience!!" });
      $("#clickboss").html('');
      window.history.go(-0);
  
    }
  }
  var backButton = document.createElement("button");
  backButton.id = 'backButton';
  backButton.innerText = "<- Back";
  backButton.onclick = function (ev) {
    backButton.toggleAttribute("hidden");
    document.querySelector("#body").removeAttribute("hidden");
    document.querySelector("#hiddenDungeons").setAttribute("hidden", true);
  };
  backButton.style.left = "0px";
  backButton.style.top = "0px";
  backButton.style.position = "absolute";
  $("#dungeonsImage").click(() => {
    if (expAndLevel.level < 20) {
  
      alert("You are not yet strong enough.");
      return false;
    } else {
  
      document.getElementById("hiddenDungeons").removeAttribute("hidden");
      $.get("/dungeons.html", function (data) {
        document.write(data);
      });
      document.querySelector("#body").setAttribute("hidden", "true");
      $(document.documentElement).append(backButton);
  
    }
    return true;
  });
  $("#back").click(() => {
    window.history.go(-0);
  });
  