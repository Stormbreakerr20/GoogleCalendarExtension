const timezones = [
  { label: "(GMT-12:00) International Date Line West", value: "Etc/GMT+12" },
  { label: "(GMT-11:00) Midway Island, Samoa", value: "Pacific/Midway" },
  { label: "(GMT-10:00) Hawaii", value: "Pacific/Honolulu" },
  { label: "(GMT-09:00) Alaska", value: "US/Alaska" },
  {
    label: "(GMT-08:00) Pacific Time (US & Canada)",
    value: "America/Los_Angeles",
  },
  { label: "(GMT-08:00) Tijuana, Baja California", value: "America/Tijuana" },
  { label: "(GMT-07:00) Arizona", value: "US/Arizona" },
  {
    label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan",
    value: "America/Chihuahua",
  },
  { label: "(GMT-07:00) Mountain Time (US & Canada)", value: "US/Mountain" },
  { label: "(GMT-06:00) Central America", value: "America/Managua" },
  { label: "(GMT-06:00) Central Time (US & Canada)", value: "US/Central" },
  {
    label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey",
    value: "America/Mexico_City",
  },
  { label: "(GMT-06:00) Saskatchewan", value: "Canada/Saskatchewan" },
  {
    label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco",
    value: "America/Bogota",
  },
  { label: "(GMT-05:00) Eastern Time (US & Canada)", value: "US/Eastern" },
  { label: "(GMT-05:00) Indiana (East)", value: "US/East-Indiana" },
  { label: "(GMT-04:00) Atlantic Time (Canada)", value: "Canada/Atlantic" },
  { label: "(GMT-04:00) Caracas, La Paz", value: "America/Caracas" },
  { label: "(GMT-04:00) Manaus", value: "America/Manaus" },
  { label: "(GMT-04:00) Santiago", value: "America/Santiago" },
  { label: "(GMT-03:30) Newfoundland", value: "Canada/Newfoundland" },
  { label: "(GMT-03:00) Brasilia", value: "America/Sao_Paulo" },
  {
    label: "(GMT-03:00) Buenos Aires, Georgetown",
    value: "America/Argentina/Buenos_Aires",
  },
  { label: "(GMT-03:00) Greenland", value: "America/Godthab" },
  { label: "(GMT-03:00) Montevideo", value: "America/Montevideo" },
  { label: "(GMT-02:00) Mid-Atlantic", value: "America/Noronha" },
  { label: "(GMT-01:00) Cape Verde Is.", value: "Atlantic/Cape_Verde" },
  { label: "(GMT-01:00) Azores", value: "Atlantic/Azores" },
  {
    label: "(GMT+00:00) Casablanca, Monrovia, Reykjavik",
    value: "Africa/Casablanca",
  },
  {
    label:
      "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London",
    value: "Etc/Greenwich",
  },
  {
    label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
    value: "Europe/Amsterdam",
  },
  {
    label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
    value: "Europe/Belgrade",
  },
  {
    label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris",
    value: "Europe/Brussels",
  },
  {
    label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
    value: "Europe/Sarajevo",
  },
  { label: "(GMT+01:00) West Central Africa", value: "Africa/Lagos" },
  { label: "(GMT+02:00) Amman", value: "Asia/Amman" },
  { label: "(GMT+02:00) Athens, Bucharest, Istanbul", value: "Europe/Athens" },
  { label: "(GMT+02:00) Beirut", value: "Asia/Beirut" },
  { label: "(GMT+02:00) Cairo", value: "Africa/Cairo" },
  { label: "(GMT+02:00) Harare, Pretoria", value: "Africa/Harare" },
  {
    label: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
    value: "Europe/Helsinki",
  },
  { label: "(GMT+02:00) Jerusalem", value: "Asia/Jerusalem" },
  { label: "(GMT+02:00) Minsk", value: "Europe/Minsk" },
  { label: "(GMT+02:00) Windhoek", value: "Africa/Windhoek" },
  { label: "(GMT+03:00) Kuwait, Riyadh, Baghdad", value: "Asia/Kuwait" },
  {
    label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd",
    value: "Europe/Moscow",
  },
  { label: "(GMT+03:00) Nairobi", value: "Africa/Nairobi" },
  { label: "(GMT+03:00) Tbilisi", value: "Asia/Tbilisi" },
  { label: "(GMT+03:30) Tehran", value: "Asia/Tehran" },
  { label: "(GMT+04:00) Abu Dhabi, Muscat", value: "Asia/Muscat" },
  { label: "(GMT+04:00) Baku", value: "Asia/Baku" },
  { label: "(GMT+04:00) Yerevan", value: "Asia/Yerevan" },
  { label: "(GMT+04:30) Kabul", value: "Asia/Kabul" },
  { label: "(GMT+05:00) Yekaterinburg", value: "Asia/Yekaterinburg" },
  { label: "(GMT+05:00) Islamabad, Karachi, Tashkent", value: "Asia/Karachi" },
  {
    label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi",
    value: "Asia/Calcutta",
  },
  { label: "(GMT+05:30) Sri Jayawardenapura", value: "Asia/Calcutta" },
  { label: "(GMT+05:45) Kathmandu", value: "Asia/Katmandu" },
  { label: "(GMT+06:00) Almaty, Novosibirsk", value: "Asia/Almaty" },
  { label: "(GMT+06:00) Astana, Dhaka", value: "Asia/Dhaka" },
  { label: "(GMT+06:30) Yangon (Rangoon)", value: "Asia/Rangoon" },
  { label: "(GMT+07:00) Bangkok, Hanoi, Jakarta", value: "Asia/Bangkok" },
  { label: "(GMT+07:00) Krasnoyarsk", value: "Asia/Krasnoyarsk" },
  {
    label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
    value: "Asia/Hong_Kong",
  },
  { label: "(GMT+08:00) Kuala Lumpur, Singapore", value: "Asia/Kuala_Lumpur" },
  { label: "(GMT+08:00) Irkutsk, Ulaan Bataar", value: "Asia/Irkutsk" },
  { label: "(GMT+08:00) Perth", value: "Australia/Perth" },
  { label: "(GMT+08:00) Taipei", value: "Asia/Taipei" },
  { label: "(GMT+09:00) Osaka, Sapporo, Tokyo", value: "Asia/Tokyo" },
  { label: "(GMT+09:00) Seoul", value: "Asia/Seoul" },
  { label: "(GMT+09:00) Yakutsk", value: "Asia/Yakutsk" },
  { label: "(GMT+09:30) Adelaide", value: "Australia/Adelaide" },
  { label: "(GMT+09:30) Darwin", value: "Australia/Darwin" },
  { label: "(GMT+10:00) Brisbane", value: "Australia/Brisbane" },
  {
    label: "(GMT+10:00) Canberra, Melbourne, Sydney",
    value: "Australia/Canberra",
  },
  { label: "(GMT+10:00) Hobart", value: "Australia/Hobart" },
  { label: "(GMT+10:00) Guam, Port Moresby", value: "Pacific/Guam" },
  { label: "(GMT+10:00) Vladivostok", value: "Asia/Vladivostok" },
  {
    label: "(GMT+11:00) Magadan, Solomon Is., New Caledonia",
    value: "Asia/Magadan",
  },
  { label: "(GMT+12:00) Auckland, Wellington", value: "Pacific/Auckland" },
  { label: "(GMT+12:00) Fiji, Kamchatka, Marshall Is.", value: "Pacific/Fiji" },
  { label: "(GMT+13:00) Nuku'alofa", value: "Pacific/Tongatapu" },
];

let defaultTimezone = "Etc/GMT+12";
let defaultGmt = "GMT-12";

let savedTimezone = null;
let savedGmt = null;

let observer = new MutationObserver(updateTimezone);

function updateTimezone() {
  //check if custom timezone already exists
  if (document.getElementById("customTimezone")) {
    return;
  } else {
    chrome.storage.sync.get("saved", (res) => {
      console.log("continue...");
      let timezone;
      let gmt;
      if (res.saved.remove) {
        return;
      } else if (res.saved) {
        timezone = res.saved.timezone;
        gmt = res.saved.gmt;
      } else {
        timezone = defaultTimezone;
        gmt = defaultGmt;
      }

      console.log(timezone);
      //calculate time offsets
      function calcHourOffset(hour) {
        let userTime = new Date();
        userTime.setHours(hour);
        userTime.setMinutes(0);
        userTime.setSeconds(0);
        userTime.setMilliseconds(0);

        let displayTime = userTime.toLocaleTimeString("en-US", {
          hour12: true,
          timeZone: timezone,
        });

        if (
          displayTime.endsWith(":00:00 AM") ||
          displayTime.endsWith(":00:00 PM")
        ) {
          displayTime = displayTime.replace(":00:00", "");
        } else if (
          displayTime.endsWith(":30:00 AM") ||
          displayTime.endsWith(":30:00 PM")
        ) {
          displayTime = displayTime.replace(":00", "");
          displayTime = displayTime.replace(" AM", "am").replace(" PM", "pm");
        }

        return displayTime;
      }

      //add GMT header
      let gmtContainer = document.getElementsByClassName("SrADx")[0];

      let gmtSlot = document.createElement("div");
      gmtSlot.classList.add("sS0sZd");
      gmtSlot.setAttribute("id", "customTimezone");

      let gmtText = document.createElement("div");
      gmtText.classList.add("H4QSac");
      gmtText.classList.add("ouBNcf");
      gmtText.innerHTML = gmt;

      gmtSlot.appendChild(gmtText);
      gmtContainer.appendChild(gmtSlot);

      //add GMT spacer
      let gmtSpacer = document.getElementsByClassName("kL3bhb")[0];
      let gmtSpacerSlot = document.createElement("div");
      gmtSpacerSlot.classList.add("JMX7ge");
      gmtSpacerSlot.classList.add("Xc6hQ");
      gmtSpacerSlot.classList.add("TzA9Ye");
      gmtSpacerSlot.setAttribute("id", "customSpacer");

      let gmtSpacerFill = document.createElement("div");
      gmtSpacerFill.classList.add("gpQ66b");
      gmtSpacerFill.classList.add("ouBNcf");
      gmtSpacerFill.innerHTML = gmt;

      gmtSpacerSlot.style.marginRight = "4px";
      gmtSpacerSlot.appendChild(gmtSpacerFill);
      gmtSpacer.appendChild(gmtSpacerSlot);

      //add new times list
      let timesListContainer = document.getElementsByClassName("lqYlwe")[0];

      let timesList = document.createElement("div");
      timesList.classList.add("R6TFwe");
      timesList.setAttribute("id", "customTimesList");

      let marginMore = false;

      for (let i = 0; i < 24; i++) {
        let timeSlot = document.createElement("div");
        timeSlot.classList.add("XsRa1c");

        let timeText = document.createElement("span");
        timeText.classList.add("wO6pL");
        timeText.classList.add("iHNmdb");
        const time = calcHourOffset(i);
        if (time.includes("AM") || time.includes("PM")) {
          marginMore = true;
        }
        timeText.innerHTML = time;
        timeSlot.appendChild(timeText);
        timesList.appendChild(timeSlot);
      }
      timesList.style.marginLeft = marginMore ? "25px" : "5px";

      timesListContainer.appendChild(timesList);
    });
  }
}

setTimeout(() => {
  updateTimezone();
  observer.observe(document.getElementById("YPCqFe"), {
    childList: true,
    subtree: true,
  });
}, 4000);

chrome.runtime.onMessage.addListener(function (req) {
  if (req.getEmail) {
    let emails = extractHovercardId();
    console.log(emails);

    if (emails.length > 0) {
      alert("Emails found: " + emails.join(", "));
    } else {
      alert("No emails found.");
    }
    return;
  }

  if (document.getElementById("customTimezone")) {
    document.getElementById("customTimezone").remove();
    document.getElementById("customSpacer").remove();
    document.getElementById("customTimesList").remove();
  }
  const gmt = timezones.find((timezone) => timezone.value === req.timezone);
  const gmtTextFull = gmt.label.slice(1, 10);
  let gmtTextFormatted;
  if (gmtTextFull.slice(7) === "00") {
    // GMT-12:00 ==> GMT-12
    gmtTextFormatted = gmtTextFull.slice(0, 6);
  } else {
    gmtTextFormatted = gmtTextFull;
  }
  chrome.storage.sync.set({
    saved: {
      timezone: req.timezone,
      gmt: gmtTextFormatted,
      remove: req.remove,
    },
  });
});

// Function to extract the data-hovercard-id from the specified div
function extractHovercardId() {
  let emails = [];
  // Select the parent element with the specified class
  console.log("here1");
  var parentElement = document.querySelector(".Rzij1d");

  // Check if the parent element exists
  if (parentElement) {
    // Select the target div within the parent element
    var targetDiv = parentElement.querySelectorAll(
      ".toUqff.DbpAnb.mARxl.AL18ce.HRaT6d"
    );

    // Check if the target div exists
    if (targetDiv) {
      // Extract the data-hovercard-id attribute value

      for (let i = 0; i < targetDiv.length; i++) {
        var hovercardId = targetDiv[i].getAttribute("data-hovercard-id");
        emails.push(hovercardId);
      }

      return emails;
    } else {
      console.log("Target div not found.");
    }
  } else {
    console.log("Parent element not found.");
  }

  return [];
}
