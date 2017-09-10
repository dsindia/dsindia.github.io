var core_info = [
	{
		name: "Pancham Yadav",
		pos: 'Founder',
		school: "UC Berkeley",
		img: "images/Pancham_Yadav.png",
	},
	{
		name: "Sathvik Nair",
		pos: "Founder",
		school: "UC Berkeley", 
		img: "images/Sathvik_Nair.png"
	},
	{
		name: "Janaki Vivrekar",
		pos: "Director of Curriculum",
		school: "UC Berkeley",
		img: 'images/Janaki_Vivrekar.png',
	},
	{
		name: "Suraj Rampure",
		pos: "Director of Curriculum",
		school: "UC Berkeley",
		img: "images/Suraj_Rampure.png",
	},
	{
		name: 'Rohit Shylakumar',
		pos: 'Curriculum Developer, Bangalore Lead',
		school: 'City University of Hong Kong',
		img: 'images/Rohit_Shylakumar.jpg',
	},
	{
		name: "Anoushka Bose",
		pos: "Curriculum Developer",
		school: "MIT",
		img: 'images/Anoushka_Bose.png',
	},
	{
		name: "Yajushi Mattegunta", 
		pos: "Curriculum Developer",
		school: "UC Berkeley",
		img: "images/yaju.png",
	},
	{
		name: "Shreyan Jain",
		pos: "Curriculum Developer",
		school: "MIT",
		img: 'images/Shreyan_Jain.png',
	},
	{
		name: "Yuvraj Khetan",
		pos: "Curriculum Developer",
		school: "London School of Economics",
		img: "images/Yuvraj_Khetan.png",
	},
	{
		name: "Batool Naqvi",
		pos: "Curriculum Developer",
		school: "UC Berkeley",
		img: "images/Batool_Naqvi.png",
	},
	{
		name: "Ameet Rahane",
		pos: "Curriculum Developer",
		school: "UC Berkeley",
		img: 'images/Ameet_Rahane.png',
	},
	{
		name: "Kairavi Sarup",
		pos: "Corporate Outreach Director",
		school: "Tufts University",
		img: "images/Kairaiv_Sarup.png",
	},
	{
		name: "Pranav Garg",
		pos: "Finance and Operations Officer",
		school: 'UC Berkeley',
		img: "images/Pranav_Garg.png",
	},
	{
		name: "Namita Verma",
		pos: "Corporate Outreach Officer",
		school: "UC Berkeley",
		img: "images/Namita_Verma.png",
	},
	{
		name: "Shyamsunder Sriram",
		pos: "Finance Officer",
		school: "University of Chicago",
		img: "images/Shyamsunder_Sriram.png",
	},
	{
		name: "Priyanshi Bareja",
		pos: "Graphic Designer",
		school: "Rhode Island School of Design",
		img: 'images/Priyanshi_Bareja.png',
	},
	{
		name: "Annie Tang",
		pos: "Graphic Designer",
		school: "UC Berkeley",
		img: 'images/annie.png',
	},
	{
		name: "Vinit Jain",
		pos: "Web Developer",
		school: "Jain University 2017",
		img: 'images/Vinit_Jain.png',
	}]

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
	generatePics(core_info, 'core');
	//generatePics(advisors_info);
	generatePics(volunteer_info, 'vols');
});
function generatePics(json, id) {
	for (var i = 0; i < json.length; i++) {
		if (i % 4 == 0) {
			$('#' + id + '-col-' + 0 ).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p>" + json[i].name + "</p>" +
	         '<p>' + json[i].pos + "</p>" + 
	          "<p>" + json[i].school + "</p></div>"
	          )
		} else if (i % 4 == 1) {
			$('#' + id + '-col-' + 1).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p>" + json[i].name + "</p>" +
	         '<p>' + json[i].pos + "</p>" + 
	          "<p>" + json[i].school + "</p></div>"
	          )
		} else if (i % 4 == 2) {
			$('#' + id + '-col-' + 2).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p>" + json[i].name + "</p>" +
	         '<p>' + json[i].pos + "</p>" + 
	          "<p>" + json[i].school + "</p></div>"
	          )
		} else {
			$('#' + id + '-col-' + 3).append("<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ json[i].img + "'/></div>" +
	         "<p>" + json[i].name + "</p>" +
	         "<p>" + json[i].pos + '</p>' + 
 	          "<p>" + json[i].school + "</p></div>"
	          )
		}
	}
}