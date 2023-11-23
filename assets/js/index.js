var Typer = {
  text: "",
  accessCountimer: null,
  index: 0,
  speed: 2,
  file: "",
  accessCount: 0,
  deniedCount: 0,
  init: function () {
    accessCountimer = setInterval(function () {
      Typer.updLstChr();
    }, 500);
    $.get(Typer.file, function (data) {
      Typer.text = data;
      Typer.text = Typer.text.slice(0, Typer.text.length - 1);
    });
  },

  content: function () {
    return $("#console").html();
  },

  write: function (str) {
    $("#console").append(str);
    return false;
  },

  addText: function (key) {
    if (key.keyCode == 18) {
      Typer.accessCount++;

      if (Typer.accessCount >= 3) {
        Typer.makeAccess();
      }
    } else if (key.keyCode == 20) {
      Typer.deniedCount++;

      if (Typer.deniedCount >= 3) {
        Typer.makeDenied();
      }
    } else if (key.keyCode == 27) {
      Typer.hidepop();
    } else if (Typer.text) {
      var cont = Typer.content();
      if (cont.substring(cont.length - 1, cont.length) == "|")
        $("#console").html(
          $("#console")
            .html()
            .substring(0, cont.length - 1)
        );
      if (key.keyCode != 8) {
        Typer.index += Typer.speed;
      } else {
        if (Typer.index > 0) Typer.index -= Typer.speed;
      }
      var text = Typer.text.substring(0, Typer.index);
      var rtn = new RegExp("\n", "g");

      $("#console").html(text.replace(rtn, "<br/>"));
      window.scrollBy(0, 50);
    }

    if (key.preventDefault && key.keyCode != 122) {
      key.preventDefault();
    }

    if (key.keyCode != 122) {
      // otherway prevent keys default behavior
      key.returnValue = false;
    }
  },

  updLstChr: function () {
    var cont = this.content();

    if (cont.substring(cont.length - 1, cont.length) == "|")
      $("#console").html(
        $("#console")
          .html()
          .substring(0, cont.length - 1)
      );
    else this.write("|"); // else write it
  },
};

function replaceUrls(text) {
  var http = text.indexOf("http://");
  var space = text.indexOf(".me ", http);

  if (space != -1) {
    var url = text.slice(http, space - 1);
    return text.replace(url, '<a href="' + url + '">' + url + "</a>");
  } else {
    return text;
  }
}

Typer.speed = 3;
Typer.file = "test.html";
Typer.init();

var timer = setInterval("t();", 30);
function t() {
  Typer.addText({ keyCode: 123748 });

  if (Typer.index > Typer.text.length) {
    clearInterval(timer);
  }
}


$(document).ready(function() {
    // Show the terminal loading bar
    $('#terminalLoadingBar').show();

    // Initialize progress variables
    var progress = 0;
    var interval = 30; // Interval in milliseconds to update the progress bar
    var totalDuration = 3000; // Total duration of 3 seconds for the progress bar to fill
    var updateStep = (interval / totalDuration) * 100; // How much to increase progress on each update

    // Start the interval to fill the progress bar
    var progressInterval = setInterval(function() {
        // Update progress
        progress += updateStep;
        if (progress >= 100) {
            progress = 100; // Cap the progress at 100%
            clearInterval(progressInterval); // Stop the interval
            $('#loadingText').show(); // Show the loading text after progress bar is full
        }

        // Update the progress bar and text
        $('#progressBlocks').text('█'.repeat(progress / 10));
        $('#progressPercentage').text('[ ' + progress.toFixed(0) + '%]');
    }, interval);
});
