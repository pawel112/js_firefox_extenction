function saveOptions(e) {
  browser.storage.local.set({
    colour: document.querySelector("#colour").value
  });
  e.preventDefault();
}

function restoreOptions() {
  //var gettingItem = browser.storage.local.get('colour');
  //gettingItem.then((res) => {
    //document.querySelector("#colour").value = res.colour || 'Firefox red';
  //});
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

document.getElementById("optionsLists").innerHTML += browser.i18n.getMessage("optionsLists");
document.getElementById("optionsUpdateFrequencyList").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyList");
document.getElementById("optionsUpdateFrequencyListDaily").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyListDaily");
document.getElementById("optionsUpdateFrequencyListTwiceWeekly").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyListTwiceWeekly");
document.getElementById("optionsUpdateFrequencyListOnceWeek").innerHTML += browser.i18n.getMessage("optionsUpdateFrequencyListOnceWeek");
document.getElementById("optionsTitle").innerHTML += browser.i18n.getMessage("optionsTitle");
document.getElementById("optionsIgnoredURL").innerHTML += browser.i18n.getMessage("optionsIgnoredURL");
document.getElementById("optionsIgnoredWord").innerHTML += browser.i18n.getMessage("optionsIgnoredWord");
document.getElementById("optionsIgnoredCourierCompany").innerHTML += browser.i18n.getMessage("optionsIgnoredCourierCompany");
document.getElementById("optionsTitle").innerHTML = browser.i18n.getMessage("optionsTitle");
document.getElementById("optionsSave").innerHTML += browser.i18n.getMessage("optionsSave");