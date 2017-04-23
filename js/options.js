function saveOptions(e)
{
	//TODO
	//SPRAWDZANIE PÓL
	
	var UpdateFrequencyListValue = null;
	if (document.getElementsByName("optionsUpdateFrequencyListValue")[0].checked == true)
	{
		UpdateFrequencyListValue = 0;
	}
	else if (document.getElementsByName("optionsUpdateFrequencyListValue")[1].checked == true)
	{
		UpdateFrequencyListValue = 1;
	}
	else
	{
		UpdateFrequencyListValue = 2;
	}
	
 	browser.storage.local.set
 	({	  
		optionsUpdateFrequencyListValue: UpdateFrequencyListValue
	});
	e.preventDefault();
}

function restoreOptions()
{
	browser.storage.local.get().then((res) =>
	{
		if (!((res.optionsUpdateFrequencyListValue == 0) || (res.optionsUpdateFrequencyListValue == 1) || (res.optionsUpdateFrequencyListValue == 2)))
		{
			res.optionsUpdateFrequencyListValue = 0;
			browser.storage.local.set
			({	  
				optionsUpdateFrequencyListValue: 0
			});
		}
		document.getElementsByName("optionsUpdateFrequencyListValue")[res.optionsUpdateFrequencyListValue].checked = true;
		
		if (!((res.optionsLists == "") || (res.optionsLists == null) || (res.optionsLists == undefined)))
		{
			//TODO
			//ZAPIS DO PÓL
		}
		else
		{
			document.getElementById("optionsLists").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsLists = "";
			browser.storage.local.set
			({	  
				optionsLists: ""
			});
		}
		
		if (!((res.optionsIgnoredURL == "") || (res.optionsIgnoredURL == null) || (res.optionsIgnoredURL == undefined)))
		{
			//TODO
			//ZAPIS DO PÓL
		}
		else
		{
			document.getElementById("optionsIgnoredURL").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredURL = "";
			browser.storage.local.set
			({	  
				optionsIgnoredURL: ""
			});
		}
		
		if (!((res.optionsIgnoredWord == "") || (res.optionsIgnoredWord == null) || (res.optionsIgnoredWord == undefined)))
		{
			//TODO
			//ZAPIS DO PÓL
		}
		else
		{
			document.getElementById("optionsIgnoredWord").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredWord = "";
			browser.storage.local.set
			({	  
				optionsIgnoredWord: ""
			});
		}
		
		if (!((res.optionsIgnoredCourierCompany == "") || (res.optionsIgnoredCourierCompany == null) || (res.optionsIgnoredCourierCompany == undefined)))
		{
			//TODO
			//ZAPIS DO PÓL
		}
		else
		{
			document.getElementById("optionsIgnoredCourierCompany").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredCourierCompany = "";
			browser.storage.local.set
			({	  
				optionsIgnoredCourierCompany: ""
			});
		}
		
	});
}

function addNewFieldList()
{
	//TODO
	//DODAĆ POJAWIANIE SIĘ POLA PUSTEGO
}

function addNewFieldURL()
{
	
}

function addNewFieldWord()
{
	
}

function addNewFieldCourierCompany()
{
	
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.getElementById("optionsAddList").addEventListener("submit", addNewFieldList);
document.getElementById("optionsAddURL").addEventListener("submit", addNewFieldURL);
document.getElementById("optionsAddWord").addEventListener("submit", addNewFieldWord);
document.getElementById("optionsAddCourierCompany").addEventListener("submit", addNewFieldCourierCompany);

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
document.getElementById("optionsAddList").innerHTML += browser.i18n.getMessage("optionsAddToList");
document.getElementById("optionsAddURL").innerHTML = browser.i18n.getMessage("optionsAddToList");
document.getElementById("optionsAddWord").innerHTML += browser.i18n.getMessage("optionsAddToList");
document.getElementById("optionsAddCourierCompany").innerHTML += browser.i18n.getMessage("optionsAddToList");