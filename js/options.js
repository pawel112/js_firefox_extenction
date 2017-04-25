function getData()
{
	var date = "";
	browser.storage.local.get().then((res) =>
	{
		if (res.optionsUpdateData != undefined)
		{
			document.getElementById("optionsTitle").innerHTML += ("<br/>"+browser.i18n.getMessage("optionsUpdate")+" "+res.optionsUpdateData+".");	
		}
		else
		{
			document.getElementById("optionsTitle").innerHTML += ("<br/>"+browser.i18n.getMessage("optionsUpdate")+" "+browser.i18n.getMessage("optionsIgnoredNone").toLocaleLowerCase()+".");	
		}
		
	});
}

function isValidURL(url)
{
    var RegExp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (RegExp.test(url))
	{
        return true;
    }
	else
	{
        return false;
    }
} 

function saveOptions(e)
{
	var updateFrequencyListValue = 2;
	var lists = new Array();
	var ignoredURL = new Array();
	var ignoredWord = new Array();
	var ignoredCourierCompany = new Array();
	
	for (var i=0; i<document.getElementsByName("lists").length; i++)
	{
		if (isValidURL(document.getElementsByName("lists")[i].value) == true)
		{
			lists.push (document.getElementsByName("lists")[i].value);
		}
	}
	for (var i=0; i<document.getElementsByName("ignoredURL").length; i++)
	{
		if (isValidURL(document.getElementsByName("ignoredURL")[i].value) == true)
		{
			ignoredURL.push (document.getElementsByName("ignoredURL")[i].value);
		}
	}
	for (var i=0; i<document.getElementsByName("ignoredWord").length; i++)
	{
		ignoredWord.push (document.getElementsByName("ignoredWord")[i].value);
	}
	for (var i=0; i<document.getElementsByName("ignoredCourierCompany").length; i++)
	{
		ignoredCourierCompany.push (document.getElementsByName("ignoredCourierCompany")[i].value);
	}
	
	if (document.getElementsByName("optionsUpdateFrequencyListValue")[0].checked == true)
	{
		updateFrequencyListValue = 0;
	}
	else if (document.getElementsByName("optionsUpdateFrequencyListValue")[1].checked == true)
	{
		updateFrequencyListValue = 1;
	}
	
 	browser.storage.local.set
 	({	  
		optionsUpdateFrequencyListValue: updateFrequencyListValue,
		optionsLists: lists,
		optionsIgnoredURL: ignoredURL,
		optionsIgnoredWord: ignoredWord,
		optionsIgnoredCourierCompany: ignoredCourierCompany
	});
	updateData();
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
		
		if ((res.optionsLists != undefined) && (res.optionsLists.length != 0))
		{
			for (var i=0; i<res.optionsLists.length; i++)
			{
				addNewFieldList();
			}
			for (var i=0; i<res.optionsLists.length; i++)
			{
				document.getElementsByName("lists")[i].value = res.optionsLists[i];
			}
		}
		else
		{
			document.getElementById("optionsLists").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsLists = "";
			browser.storage.local.set
			({	  
				optionsLists: new Array()
			});
		}
		
		if ((res.optionsIgnoredURL != undefined) && (res.optionsIgnoredURL.length != 0))
		{
			for (var i=0; i<res.optionsIgnoredURL.length; i++)
			{
				addNewFieldURL();
			}
			for (var i=0; i<res.optionsIgnoredURL.length; i++)
			{
				document.getElementsByName("ignoredURL")[i].value = res.optionsIgnoredURL[i];
			}
		}
		else
		{
			document.getElementById("optionsIgnoredURL").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredURL = "";
			browser.storage.local.set
			({	  
				optionsIgnoredURL: new Array()
			});
		}
		
		if ((res.optionoptionsIgnoredWordsLists != undefined) && (res.optionsIgnoredWord.length != 0))
		{
			for (var i=0; i<res.optionsIgnoredWord.length; i++)
			{
				addNewFieldWord();
			}
			for (var i=0; i<res.optionsIgnoredWord.length; i++)
			{
				document.getElementsByName("ignoredWord")[i].value = res.optionsIgnoredWord[i];
			}
		}
		else
		{
			document.getElementById("optionsIgnoredWord").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredWord = "";
			browser.storage.local.set
			({	  
				optionsIgnoredWord: new Array()
			});
		}
		
		if ((res.optionsIgnoredCourierCompany != undefined) && (res.optionsIgnoredCourierCompany.length != 0))
		{
			for (var i=0; i<res.optionsIgnoredCourierCompany.length; i++)
			{
				addNewFieldCourierCompany();
			}
			for (var i=0; i<res.optionsIgnoredCourierCompany.length; i++)
			{
				document.getElementsByName("ignoredCourierCompany")[i].value = res.optionsIgnoredCourierCompany[i];
			}
		}
		else
		{
			document.getElementById("optionsIgnoredCourierCompany").innerHTML += "<br/>"+browser.i18n.getMessage("optionsIgnoredNone");	
			res.optionsIgnoredCourierCompany = "";
			browser.storage.local.set
			({	  
				optionsIgnoredCourierCompany: new Array()
			});
		}
	});
}

function removeLists(number)
{
	console.log (number);
	
	var temp = new Array();
	browser.storage.local.get().then((res) =>
	{
		temp = res.optionsLists;
		temp.splice (number, 1);

		browser.storage.local.set
		({	  
			optionsLists: temp
		});

		location.reload();
	});
}

function removeURL(number)
{
	var temp = new Array();
	browser.storage.local.get().then((res) =>
	{
		temp = res.optionsIgnoredURL;
		temp.splice (number, 1);

		browser.storage.local.set
		({	  
			optionsIgnoredURL: temp
		});

		location.reload();
	});
}

function removeWord(number)
{
	var temp = new Array();
	browser.storage.local.get().then((res) =>
	{
		temp = res.optionsIgnoredWord;
		temp.splice (number, 1);

		browser.storage.local.set
		({	  
			optionsIgnoredWord: temp
		});

		location.reload();
	});
}

function removeCourierCompany(number)
{
	var temp = new Array();
	browser.storage.local.get().then((res) =>
	{
		temp = res.optionsIgnoredCourierCompany;
		temp.splice (e.id, 1);

		browser.storage.local.set
		({	  
			optionsIgnoredCourierCompany: temp
		});

		location.reload();
	});
}

function addNewFieldList()
{
	if (document.getElementById("optionsLists").innerHTML.search ("<br>"+browser.i18n.getMessage("optionsIgnoredNone")) != -1)
	{
		document.getElementById("optionsLists").innerHTML = document.getElementById("optionsLists").innerHTML.replace ("<br>"+browser.i18n.getMessage("optionsIgnoredNone"), "");
	}
	
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("lists").length; i++)
	{
		temp.push (document.getElementsByName("lists")[i].value);
	}
	
	document.getElementById("optionsLists").innerHTML += "<br/><textarea name=\"lists\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button name=\"optionsRemoveLists\">"+browser.i18n.getMessage("optionsRemoveFromList")+"</button>";
	
	for (var i=0; i<document.getElementsByName("optionsRemoveLists").length; i++)
	{
		document.getElementsByName("optionsRemoveLists")[i].onclick = function () { removeLists(i); };
	}
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("lists")[i].value = temp[i];
	}
}

function addNewFieldURL()
{
	if (document.getElementById("optionsIgnoredURL").innerHTML.search ("<br>"+browser.i18n.getMessage("optionsIgnoredNone")) != -1)
	{
		document.getElementById("optionsIgnoredURL").innerHTML = document.getElementById("optionsIgnoredURL").innerHTML.replace ("<br>"+browser.i18n.getMessage("optionsIgnoredNone"), "");
	}
	
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("ignoredURL").length; i++)
	{
		temp.push (document.getElementsByName("ignoredURL")[i].value);
	}
	
	document.getElementById("optionsIgnoredURL").innerHTML += "<br/><textarea name=\"ignoredURL\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button name=\"optionsRemoveURL\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<document.getElementsByName("optionsRemoveURL").length; i++)
	{
		document.getElementsByName("optionsRemoveURL")[i].onclick = function () { removeURL(i); };
	}
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("ignoredURL")[i].value = temp[i];
	}
}

function addNewFieldWord()
{
	if (document.getElementById("optionsIgnoredWord").innerHTML.search ("<br>"+browser.i18n.getMessage("optionsIgnoredNone")) != -1)
	{
		document.getElementById("optionsIgnoredWord").innerHTML = document.getElementById("optionsIgnoredWord").innerHTML.replace ("<br>"+browser.i18n.getMessage("optionsIgnoredNone"), "");
	}
	
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("ignoredWord").length; i++)
	{
		temp.push (document.getElementsByName("ignoredWord")[i].value);
	}
	
	document.getElementById("optionsIgnoredWord").innerHTML += "<br/><textarea name=\"ignoredWord\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button name=\"optionsRemoveWord\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<document.getElementsByName("optionsRemoveWord").length; i++)
	{
		document.getElementsByName("optionsRemoveWord")[i].onclick = function () { removeWord(i); };
	}
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("ignoredWord")[i].value = temp[i];
	}
}

function addNewFieldCourierCompany()
{
	if (document.getElementById("optionsIgnoredCourierCompany").innerHTML.search ("<br>"+browser.i18n.getMessage("optionsIgnoredNone")) != -1)
	{
		document.getElementById("optionsIgnoredCourierCompany").innerHTML = document.getElementById("optionsIgnoredCourierCompany").innerHTML.replace ("<br>"+browser.i18n.getMessage("optionsIgnoredNone"), "");
	}
	
	var temp = new Array();
	for (var i=0; i<document.getElementsByName("ignoredCourierCompany").length; i++)
	{
		temp.push (document.getElementsByName("ignoredCourierCompany")[i].value);
	}
	
	document.getElementById("optionsIgnoredCourierCompany").innerHTML += "<br/><textarea name=\"ignoredCourierCompany\" cols=\"100\" rows=\"1\" style=\"width: 400px; height: 15px;\"></textarea><button id=\""+temp.length+"\" name=\"optionsRemoveCourierCompany\">"+browser.i18n.getMessage("optionsIgnoredRemove")+"</button>";
	
	for (var i=0; i<temp.length; i++)
	{
		document.getElementsByName("ignoredCourierCompany")[i].value = temp[i];
	}
	
	for (var i=0; i<document.getElementsByName("ignoredCourierCompany").length; i++)
	{
		document.getElementsByName("optionsRemoveCourierCompany")[i].onclick = function () { removeCourierCompany(parseInt(document.getElementsByName("optionsRemoveCourierCompany")[i].id)); };	
	}
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
document.getElementById('optionsAddList').addEventListener("click", addNewFieldList);
document.getElementById('optionsAddURL').addEventListener("click", addNewFieldURL);
document.getElementById('optionsAddWord').addEventListener("click", addNewFieldWord);
document.getElementById('optionsAddCourierCompany').addEventListener("click", addNewFieldCourierCompany);

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
getData();

for (var i=0; i<document.getElementsByName("ignoredCourierCompany").length; i++)
{
	document.getElementsByName("optionsRemoveCourierCompany")[i].onclick = function () { removeCourierCompany(parseInt(document.getElementsByName("optionsRemoveCourierCompany")[i].id)); };	
}