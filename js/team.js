core_info = [
	{
		name_pos: "Pancham Yadav, Founder",
		profile: "UC Berkeley 2020, Computer Science, Cognitive Science",
		img: "images/pancham.png",
	},
	{
		name_pos: "Sathvik Nair, Founder",
		profile: "UC Berkeley 2020, Computer Science, Statistics", 
		img: "images/sathvik.png"
	},
	{
		name_pos: "Janaki Vivrekar, Director of Curriculum Development",
		profile: "UC Berkeley 2020, Computer Science, Math",
		img: 'images/janaki.png',
	},
	{
		name_pos: "Suraj Rampure, Director of Curriculum Development",
		profile: "UC Berkeley 2020, Electrical Engineering and Computer Science, Engineering Math and Statistics",
		img: "images/suraj.png",
	},
	{
		name_pos: 'Rohit Shylakumar, Curriculum Developer and Bangalore Organizing Lead',
		profile: 'City University of Hong Kong 2021, Computer Science, Creative Media',
		img: 'images/rohit.png',
	},
	{
		name_pos: "Anoushka Bose, Curriculum Developer",
		profile: "MIT 2020, Nuclear Science and Engineering",
		img: 'images/anoushka.png',
	},
	{
		name_pos: "Yajushi Mattegunta, Curriculum Developer",
		profile: "UC Berkeley 2020, Electrical Engineering and Computer Science",
		img: "images/yaju.png",
	},
	{
		name_pos: "Shreyan Jain, Curriculum Developer",
		profile: "MIT 2020, Computer Science, Math",
		img: 'images/shreyan.png',
	},
	{
		name_pos: "Yuvraj Khetan, Curriculum Developer",
		profile: "London School of Economics and Political Science 2019, Economics, Statistics"
	}
	{
		name_pos: "Batool Naqvi, Curriculum Developer",
		profile: "UC Berkeley 2020, Computer Science",
		img: "images/batool.png",
	},
	{
		name_pos: "Ameet Rahane, Curriculum Developer",
		profile: "UC Berkeley 2020, Computer Science, Cognitive Science",
		img: 'images/ameet.png',
	},
	{
		name_pos: "Kairavi Sarup, Director of Corporate Outreach",
		profile: "Tufts University 2020, International Relations, Archaeology",
		img: "images/kai.png",
	},
	{
		name_pos: "Pranav Garg, Finance and Operations Officer",
		profile: 'UC Berkley 2021, Business Administration',
		img: "images/pranavg.png",
	},
	{
		name_pos: "Namita Verma, Corporate Outreach Officer",
		profile: "UC Berkeley 2019, Economics, Psychology",
		img: "images/namita.png",
	}
	{
		name_pos: "Shyamsunder Sriram, Finance Officer",
		profile: "University of Chicago 2020, Applied Math",
		img: "images/shyam.png",
	},
	{
		name_pos: "Priyanshi Bareja, Graphic Designer",
		profile: "Rhode Island School of Design 2020, Industrial Design",
		img: 'images/priyanshi.png',
	},
	{
		name_pos: "Annie Tang, Graphic Designer",
		profile: "UC Berkeley 2020, Computer Science, Cognitive Science",
		img: 'images/annie.png',
	},
	{
		name_pos: "Vinit Jain, Web Developer",
		profile: "",
		img: 'images/vinit.png',
	},
	{
		name_pos: "Konrad Cheng, Web Developer",
		profile: "University of Southern California 2021, Computer Science, Business Administration",
		img: 'images/konrad.png',
	},
	{
		name_pos: 'Siddharth Verma, Web Developer',
		profile: "UC Berkeley 2021, Music, Computer Science",
		img: 'images/siddharth.png',
	}
]

volunteer_info = [
	{
		name_pos: "Hariharan Srinivasulu, Chennai Organizing Lead",
		profile: "Swarthmore College",
		img: 'images/hari.png',	
	},
	{
		name_pos: "Keshav Prasanna, Chennai Volunteer Instructor",
		profile: "UCLA",
		img: "images/keshav.png",
	},
	{
		name_pos: "Tarun Narayanan, Chennai Volunteer Instructor",
		profile: "High School",
		img: 'images/tarun.png',
	},
	{
		name_pos: "Guru Nicketan, Chennai Volunteer Instructor",
		profile: "",
		img: 'images/guru.png',
	},
	{
		name_pos: "Sairandri Sathyanarayanan, Chennai Volunteer Instructor",
		profile: "University of Washington",
		img: 'images/sairandri.png',
	},
	{
		name_pos: "Yogesh Saravanan, Chennai Volunteer Instructor",
		profile: "",
		img: "images/yogesh.png",
	},
	{
		name_pos: "Pranav Bhasin, Gurgaon and Delhi Organizing Lead",
		profile: "UC Berkeley",
		img: "images/pranavb.png",
	},
	{
		name_pos: "Sathya Sahay, Gurgaon Volunteer Instructor",
		profile: "Ashoka University",
		img: "images/sathya.png",
	},
	{
		name_pos: "Mehul Rastogi, Gurgaon Volunteer Instructor",
		profile: "BITS Pilani, Goa",
		img: "images/mehul.png",
	},
	{
		name_pos: "Damini Mehta, Gurgaon Volunteer Instructor",
		profile: "Delhi University",
		img: "images/damini.png",
	},
	{
		name_pos: "Abhay Singh, Gurgaon Volunteer Instructor",
		profile: "High School",
		img: "images/abhay.png",
	},
	{
		name_pos: "Joshua Sabherwal, Gurgaon Volunteer Instructor",
		profile: "High School",
		img: "images/joshua.png",
	},
	{
		name_pos: "Ameek Singh, Delhi Volunteer Instructor",
		profile: "High School",
		img: "images/ameek.png",
	},
	{
		name_pos: "Sidhant Bhavnani, Delhi Volunteer Instructor, Web Developer",
		profile: "High School",
		img: "images/sidhant.png",
	},
	{
		name_pos: "Navin Muralidharan, Bangalore Volunteer Instructor",
		profile: "City University of Hong Kong",
		img: "images/navin.png",
	},
	{
		name_pos: "Soujanyo Ray Chaudhuri, Bangalore Volunteer Instructor",
		profile: "City University of Hong Kong",
		img: "images/soujanyo.png",
	},
	{
		name_pos: "Sumukh Swamy, Bangalore Volunteer Instructor",
		profile: "",
		img: "images/sumukh.png",
	}
]

$(document).ready(function() {
	for (var i = 0; i < core_info.length; i++){
	    $('#core').append(
	    	"<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ core_info[i].img + "'/></div>" +
	         "<p>" + core_info[i].name_pos + "</p>")
	          "<p>" + core_info[i].profile + "</p></div>"
	    )
	}
	for (var j = 0; j < volunteer_info.length; j++) {
		$('#instructors').append(
		 	"<div class='profile'><div class='img-wrapper'>"+
	              "<img src='"+ volunteer_info[j].img + "'/></div>" +
	         "<p>" + volunteer_info[j].name_pos + "</p>" +
	          "<p>" + volunteer_info[j].profile + "</p></div>"
	    )
	}
});