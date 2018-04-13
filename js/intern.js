var role_desc = {
  op1: {title: "Regional Director Intern",
        desc: "<p>Responsible for all activities in a particular city or area in India.</p>\
               <p>Time Commitment: 12 hours/week.</p>\
               <p><i>Required skills:</i></p>\
               <ul>\
                <li>Excellent communication and organization skills\
                <li>A cross-functional influencer with ability to build strong relationships\
                <li>Mobilize ground operational teams in your city that will consist of Volunteer Instructors, Instructors as well as any other support staff that you may need.\
                <li>Get a prospective list of schools in your city that will be interested in running paid DSI programs.\
                <li>Nominate at least two or three students who will qualify as excellent instructors and help DSI out with recruitment via social media.\
                <li>Be an independent thinker and learner. Constantly seek to improve the quality of DSI programs being run in your city.\
                <li>Communicate daily with DSI through Slack. You should not be AWOL at any point, and reply in under 24 hours to important communication from DSI executives.\
                <li>Produce weekly reports of progress in addition to short bi-weekly updates about what everyone in your team is working on.\
              </ul>\
               ",
        display: 0
      },
    op2: {title: "Data Science for India Instructor Intern",
          desc: "<p>Teaches the DSI Scholars program to all DSI affiliated schools.</p>\
                 <p>Time Commitment: 8 hours/week</p>\
                 <p><i>Required skills:</i></p>\
                 <ul>\
                  <li>Basic level of mathematical and statistical literacy\
                  <li>Demonstrated interest in teaching and pedagogy\
                  <li>Commitment to program, including undergoing all training sessions\
                  <li>Ability to convert curriculum into interactive, engaging lesson plan\
                  <li>Ability to grade student homework\
                  <li>Make content and program recommendations\
                </ul>\
                 ",
          display: 0
        },
    op3: {title: "Finance and Sponsorship Intern",
          desc: "<p>Manage DSI’s finances- and sponsorship-related work. </p>\
                 <p>Time Commitment: 4-5 hours/week</p>\
                 <p><i>Required skills:</i></p>\
                 <ul>\
                  <li>Strong organizational and time management skills\
                  <li>Flexibility and resourcefulness in response to changing priorities and needs\
                  <li>Professionalism in communicating with potential sponsors\
                  <li>Proficiency in Microsoft Excel, and a track record of accounting/finance is a plus\
                  <li>Experience forecasting budgets and optimizing day-to-day expenditure\
                  <li>Integrity and commitment to the DSI mission\
                </ul>\
                 ",
          display: 0
        },
    c1: {title: "Curriculum Development Intern",
          desc: "<p>Dedicated to creating and improving DSI instructional materials</p>\
                 <p>Time Commitment: 3-5 hrs/week</p>\
                 <p><i>Required skills:</i></p>\
                 <ul>\
                  <li>Passion for using data science in particular domain areas (ie computational biology) and/or the intersection of technical disciplines like computer science and statistics\
                  <li>Strong communication skills, especially when related to technical topics\
                  <li>Basic college-level coursework in math, statistics, computer programming. or relevant experience through independent projects\
                  <li>Knowledge of Python and the command line\
                </ul>\
                <p><i>Preferred skills:</i></p>\
                <ul>\
                 <li>Teaching experience\
                 <li>More advanced coursework in computing/inference\
                 <li>Experience conducting data science-related projects (either through coursework or independently)\
                 <li>Familiarity with Python data science libraries like Pandas, Matplotlib, Scikit-learn, etc.\
               </ul>\
                 ",
          display: 0
        },
    c2: {title: "User Research Intern",
          desc: "<p>Learn more about the people accessing DSI services and ensure that the core team receives real-time feedback on DSI material</p>\
                 <p>Time Commitment: 3-5 hrs/week</p>\
                 <p><i>Required skills:</i></p>\
                 <ul>\
                  <li>Strong interpersonal communication skills\
                  <li>Basic knowledge of data analysis and visualization (Google Sheets/Excel)\
                  <li>Passion for learning about the impact of educational programs in India/South Asia\
                  <li>Understanding of challenges (linguistic, technical, et al.) in the delivery of DSI material to different audiences and possible solutions\
                </ul>\
                 ",
          display: 0
        },
    c3: {title: "Research Scientist Intern",
          desc: "<p>Completes a data science project on a topic of their choice which will be used as a part of DSI’s curriculum.</p>\
                 <p>Time Commitment: flexible</p>\
                 ",
          display: 0
        },
    os1: {title: "Communications Intern",
          desc: "<p>Time Commitment: 4-6 hrs/week</p>\</p>\
                 <p><i>Responsibilities:</i></p>\
                <ul>\
                 <li>Coordinate communication with Regional Directors in various Indian cities\
                 <li>Collect, edit, and schedule blog posts from Regional Directors and Volunteer Instructors\
                 <li>Work with the Finance and Sponsorship Intern to reach out to Indian tech companies and businesses to build partnerships\
                 <li>	Collect documentation in the form of pictures and video recordings from DSI Programs in Indian cities\
                 </ul>\
                  ",
          display: 0
        },
    os2: {title: "Media & Marketing Intern",
          desc: "<p>Time Commitment: 4-6 hrs/week</p>\</p>\
                 <p><i>Responsibilities:</i></p>\
                <ul>\
                 <li>Design banners and flyers for DSI Programming throughout the summer\
                 <li>Work with the Communications Intern to design bi-monthly newsletters including blog posts and opportunities for audience involvement\
                 <li>Work with the Finance and Sponsorship Intern to reach out to Indian tech companies and businesses to build partnerships\
                 <li>Work with the Website Development Intern to align our online presence with our branding guidelines\
                 </ul>\
                  ",
          display: 0
        },
    os3: {title: "Software Engineering Intern",
          desc: "<p>Time Commitment: 8 hrs/week</p>\</p>\
                 <p>Help maintain the DSI website and develop tools and services to ensure DSI provides a more comprehensive platform for students, educators, and industry professionals.</p>\
                 <p><i>Required Skills:</i></p>\
                 <ul>\
                   <li>Proficiency with Python, HTML/CSS/Javascript\
                   <li>Familiarity with Git or other version control software\
                   <li>Experience with writing tests for software\
                 </ul>\
                 <p><i>Preferred Skills:</i></p>\
                 <ul>\
                   <li>Knowledge of cloud services/DevOps such as AWS, Google Cloud Platform, etc.\
                 </ul>\
                  ",
          display: 0
        }
}

function toggleDescription(id) {
  if (role_desc[id]["display"] == 0) {
    $('#'+id).append("<div id='desc'>" + role_desc[id]["desc"] + "</div>");
    role_desc[id]["display"] = 1;
  } else {
    document.getElementById("desc").outerHTML = "";
    role_desc[id]["display"] = 0;
  }
}
