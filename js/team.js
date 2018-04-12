var dsi_berkeley = [
	{
		name: "Pancham Yadav",
		pos: "Founder, Director of Strategy & Operations",
		school: "UC Berkeley",
		img: "images/Pancham_Yadav.png",
	},
	{
		name: "Sathvik Nair",
		pos: "Founder, Director of Curriculum & Content Development",
		school: "UC Berkeley",
		img: "images/Sathvik_Nair.png"
	},
	{
		name: "Janaki Vivrekar",
		pos: "Director of Outreach",
		school: "UC Berkeley",
		img: 'images/Janaki_Vivrekar.png',
	},
	{
		name: "Pranav Bhasin",
		pos: "Executive Coordinator",
		school: "UC Berkeley",
		img: "images/Pranav_Bhasin.png",
	},
	{
		name: "Vini Madapoosi",
		pos: "Program Development Coordinator",
		school: "UC Berkeley",
		img: "images/Vinithra_Madapoosi.png",
	},
	{
		name: "Pranav Garg",
		pos: "Fundraising & Sponsorship Coordinator",
		school: "UC Berkeley",
		img: "images/Pranav_Garg.png",
	},
	{
		name: "Jason Kang",
		pos: "Fundraising & Sponsorship Coordinator",
		school: "UC Berkeley",
		img: "images/Jason_kang.jpg",
	},
	{
		name: "Yajushi Mattegunta",
		pos: "Curriculum Development Coordinator",
		school: "UC Berkeley",
		img: "images/yaju.png",
	},
	{
		name: "Batool Naqvi",
		pos: "Curriculum Development Coordinator",
		school: "UC Berkeley",
		img: "images/Batool_Naqvi.png",
	},
	{
		name: "Somya Jain",
		pos: "Curriculum Development Coordinator",
		school: "UC Berkeley",
		img: 'images/icon.png',
	},
	{
		name: "Chloe Kang",
		pos: "Curriculum Development Coordinator",
		school: 'UC Berkeley',
		img: "images/icon.png",
	},
	{
		name: "Sierra Tsang",
		pos: "Media & Marketing Coordinator",
		school: "UC Berkeley",
		img: 'images/icon.png',
	},
	{
		name: "Vaishnavi Yandapalli",
		pos: "Media & Marketing Coordinator",
		school: "UC Berkeley",
		img: 'images/icon.png',
	},
	{
		name: "Anish Saha",
		pos: "Web Development Coordinator",
		school: "UC Berkeley",
		img: 'images/icon.png',
	},
	{
		name: "Paras Dave",
		pos: "Web Development Coordinator",
		school: "UC Berkeley",
		img: 'images/icon.png',
	},
	{
		name: "Akhilesh Jhunjhunwala",
		pos: "Accelerated Leadership Program Member",
		school: "UC Berkeley",
		img: 'images/icon.png',
	},]

volunteer_info = [
	{
		name: "Hariharan Srinivasulu",
		pos: "Chennai Lead",
		school: "Swarthmore College",
		img: 'images/Harihan_S.png',
	},
	{
		name: "Kesav Prasanna",
		pos: "Chennai Instructor",
		school: "UCLA",
		img: "images/Keshav_Prasanna.png",
	},
	{
		name: "Tarun Narayanan",
		pos: "Chennai Instructor",
		school: "High School",
		img: 'images/Tarun_N.png',
	},
	{
		name: "Guru Nicketan",
		pos: "Chennai Instructor",
		school: "High School",
		img: 'images/Guru_N.png',
	},
	{
		name: "Sairandri Sathyanarayanan",
		pos: "Chennai Instructor",
		school: "University of Washington",
		img: 'images/Sairandri_S.png',
	},
	{
		name: "Yogesh Saravanan",
		pos: "Chennai Instructor",
		school: "IISER Kolkata",
		img: "images/Yogesh_S.png",
	},
	{
		name: "Pranav Bhasin",
		pos: "Gurgaon and Delhi Lead",
		school: "UC Berkeley",
		img: "images/Pranav_Bhasin.png",
	},
	{
		name: "Sathya Sahay",
		pos: "Gurgaon Instructor",
		school: "Ashoka University",
		img: "images/Sathya_S.png",
	},
	{
		name: "Mehul Rastogi",
		pos: "Gurgaon Instructor",
		school: "BITS Pilani, Goa",
		img: "images/Mehul_R.png",
	},
	{
		name: "Damini Mehta",
		pos: "Gurgaon Instructor",
		school: "Delhi University",
		img: "images/Damini_M.png",
	},
	{
		name: "Abhay Singh",
		pos: "Gurgaon Instructor",
		school: "High School",
		img: "images/Abhay_Singh.png",
	},
	{
		name: "Joshua Sabherwal",
		pos: "Gurgaon Instructor",
		school: "High School",
		img: "images/Joshua_S.png",
	},
	{
		name: "Ameek Singh",
		pos: "Delhi Instructor",
		school: "High School",
		img: "images/Ameek_Singh.png",
	},
	{
		name: "Sidhant Bhavnani",
		pos: "Delhi Instructor, Web Developer",
		school: "High School",
		img: "images/Sidhant_B.png",
	},
	{
		name: "Navin Muralidharan",
		pos: "Bangalore Instructor",
		school: "Hong Kong University",
		img: "images/Navin_M.png",
	},
	{
		name: "Soujanyo Ray Chaudhuri",
		pos: "Bangalore Instructor",
		school: "City University of Hong Kong",
		img: "images/Soujanyo.jpg",
	},
	{
		name: "Sumukh Swamy",
		pos: "Bangalore Instructor",
		school: "PESU Bangalore",
		img: "images/Sumukh_S.jpg",
	}
]

$(document).ready(function() {
	generateChapterPics(dsi_berkeley, 'berkeley');
	//generatePics(advisors_info);
	generatePics(volunteer_info, 'vols');
});
function generateChapterPics(json, id) {
	for (var i = 0; i < json.length; i++) {
		if (i % 4 == 0) {
			$(' #' + id + '-col-' + 0 ).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p class='pName'>" + json[i].name + "</p>" +
	         '<p class="pPos">' + json[i].pos + "</p>"
	          )
		} else if (i % 4 == 1) {
			$('#' + id + '-col-' + 1).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         '<p class="pName">' + json[i].name + "</p>" +
	         '<p class="pPos">' + json[i].pos + "</p>"
	          )
		} else if (i % 4 == 2) {
			$('#' + id + '-col-' + 2).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p class='pName'>" + json[i].name + "</p>" +
	         '<p class="pPos">' + json[i].pos + "</p>"
	          )
		} else {
			$('#' + id + '-col-' + 3).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p class='pName'>" + json[i].name + "</p>" +
	         "<p class='pPos'>" + json[i].pos + '</p>'
	          )
		}
	}
}
function generatePics(json, id) {
	for (var i = 0; i < json.length; i++) {
		if (i % 4 == 0) {
			$('#' + id + '-col-' + 0 ).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p class='pName'>" + json[i].name + "</p>" +
	         '<p class="pPos">' + json[i].pos + "</p>" +
	          "<p class='pSchool'>" + json[i].school + "</p></div>"
	          )
		} else if (i % 4 == 1) {
			$('#' + id + '-col-' + 1).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         '<p class="pName">' + json[i].name + "</p>" +
	         '<p class="pPos">' + json[i].pos + "</p>" +
	          "<p class='pSchool'>" + json[i].school + "</p></div>"
	          )
		} else if (i % 4 == 2) {
			$('#' + id + '-col-' + 2).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p class='pName'>" + json[i].name + "</p>" +
	         '<p class="pPos">' + json[i].pos + "</p>" +
	          "<p class='pSchool'>" + json[i].school + "</p></div>"
	          )
		} else {
			$('#' + id + '-col-' + 3).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p class='pName'>" + json[i].name + "</p>" +
	         "<p class='pPos'>" + json[i].pos + '</p>' +
 	          "<p class='pSchool'>" + json[i].school + "</p></div>"
	          )
		}
	}
}
