var bio = {
	"name" : "Manjil Shamsher Thapa",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "+45-42155183",
		"email" : "manjilthapa@gmail.com",
		"address" : "Kagsa Kollegiet 110, Soborg, Denmark"
	},
	"welcomeMessage" : "I am a full time Master Student in Software Development - Advanced Computing",
	"skills" : [
		"Java Programming", "HTML5 and CSS3", "Javascript/jQuery", "Database", "C#", "Algorithm"
	],
	"bioPic": "images/manjil.png"
}


var education = {
	"schools" : [
		{
			"name" : "Santi Sudha Secondary School Pvt Ltd.",
			"address" : "Ghorahi",
			"city" : "Dang",
			"country" : "Nepal",
			"dates" : 2003,
			"url" : "http://example.com"
		},
		{
			"name" : "Capital College and Research Center",
			"address" : "Kalimati",
			"city" : "Kathmandu",
			"country": "Nepal",
			"dates" : 2005,
			"ulr" : "http://example.com"
		}
	],
	"university" : [
		{
			"name" : "South Zealand business School",
			"address" : "Naestved",
			"city" : "Naestved",
			"country" : "Denmark",
			"dates" : 2008,
			"url" : "http://example.com"
		}
	],
	"onlineCourses":[
		{
			"title" : "JavaScript Crash Course",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com"
		}
	]
}

var works = {
	"jobs" : [
		{
			"employer " : "Com4tzone",
			"title" : "Front-End Developer",
			"dates" : "May 2015 - Present",
			"description" : "I have to work with responsible desgin of the website."
 		},
		{
			"employer" : "WakeUp Copenhagen Hotel",
			"title" : "Cook in morning breakfast",
			"date" : "August 2010 - present",
			"description" : "I have to prepare for the morning breakfast. I warm the bread and eggs, cut the cold food like salami, cucumbers, ham."
		}
	]
}

//var name = "Manjil Thapa";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//console.log(bio.contact.mobile);
var formattedContactMobile = HTMLcontactMobile.replace("%data%", bio.contact.mobile);
var formattedContactEmail = HTMLcontactEmail.replace("%data%", bio.contact.email);
var formattedContactAddress = HTMLcontactAddress.replace("%data%", bio.contact.address);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#topContact").prepend(formattedContactAddress);
$("#topContact").prepend(formattedContactEmail);
$("#topContact").prepend(formattedContactMobile);

$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);

$("#header").append(HTMLskillsStart);
for(skill in bio.skills){
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills:last").append(formattedSkills);
}



for(job in works.jobs){
	$("#workExerience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", works.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", works.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}




