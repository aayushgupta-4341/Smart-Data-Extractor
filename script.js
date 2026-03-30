function processData() {
  let input = document.getElementById("input").value;

  // Emails
  let emails =
    input.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/gi) || [];

  // Phone Numbers (India)
  let phones = input.match(/(\+91[\-\s]?|0)?[6-9]\d{9}\b/g) || [];

  // URLs
  let urls = input.match(/https?:\/\/[^\s]+|www\.[^\s]+/g) || [];

  // Numbers
  let numbers = input.match(/\b\d+\b/g) || [];

  // Words
  let words = input.match(/\b[a-zA-Z]+\b/g) || [];

  // ALL VALUES
  let all = input.split(/[\s,]+/).filter((e) => e);

  let map = {};
  let duplicates = [];
  let unique = [];

  // count
  all.forEach((item) => {
    map[item] = (map[item] || 0) + 1;
  });

  for (let key in map) {
    if (map[key] > 1) {
      duplicates.push(key);
    } else {
      unique.push(key);
    }
  }

  // DISPLAY
  document.getElementById("emails").innerText =
    emails.join(", ") || "No emails";
  document.getElementById("phones").innerText =
    phones.join(", ") || "No phone numbers";
  document.getElementById("urls").innerText = urls.join(", ") || "No URLs";
  document.getElementById("numbers").innerText =
    numbers.join(", ") || "No numbers";
  document.getElementById("words").innerText = words.join(", ") || "No words";
  document.getElementById("duplicates").innerText =
    duplicates.join(", ") || "No duplicates";
  document.getElementById("unique").innerText =
    unique.join(", ") || "No unique";
}

// COPY
function copyText(id) {
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
