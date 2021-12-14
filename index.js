// data

const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self-Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];


// Variables
let active = "daily";

let timeframes = $('.timeframe');

$(".timeframe").click(function(e) {

  let newTimeframe = e.target.innerHTML;

  timeframes.removeClass('active');
  $(this).addClass('active');

  active = newTimeframe.toLowerCase();

  changeAll();

});

$(".single-timeframe").click(function(e) {

  let title = e.currentTarget.classList[1];

  title = toTitleCase(title);

  let newTimeframe = e.target.innerHTML;

  let singleActive = newTimeframe.toLowerCase();

 changeTimeframe(title, singleActive);


});


$(".tracker-body").mouseenter(function(e) {

  $(this).css("background-color", "#34397b");
  $(this).css("cursor", "pointer");

});

$(".tracker-body").mouseleave(function(e) {

  $(this).css("background-color", "#1c1f4a");

});

changeAll();

function changeTimeframe(title, active) {
  let currentValue = $(".current." + title.toLowerCase());
  let prevValue = $(".previous." + title.toLowerCase());

  let found = data.find(o => o.title === title);

  let newCurrent = found.timeframes[active].current;
  let newPrevValue = found.timeframes[active].previous;

  let previousString = {
    daily: "Yesterday - ",
    weekly: "Last Week - ",
    monthly: "Last Month - ",
  }

  currentValue.html(newCurrent + "hrs");
  prevValue.html(previousString[active] + " " + newPrevValue + "hrs");
};

function changeAll() {

  changeTimeframe("Work", active);
  changeTimeframe("Play", active);
  changeTimeframe("Study", active);
  changeTimeframe("Exercise", active);
  changeTimeframe("Social", active);
  changeTimeframe("Self-Care", active);

};

function toTitleCase(str) {
  return str.replace(
    /([^\W_]+[^\s-]*) */g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
