// function enrollCourse(name){
//     let c=JSON.parse(localStorage.getItem("enrolled"))||[];
//     if(!c.includes(name)){
//         c.push(name);
//         localStorage.setItem("enrolled",JSON.stringify(c))
//     }
// }
function enrollCourse(name) {
    let enrolled = JSON.parse(localStorage.getItem("enrolled")) || [];
    let progressMap = JSON.parse(localStorage.getItem("progressMap")) || {};

    if (!enrolled.includes(name)) {
        enrolled.push(name);
        progressMap[name] = 0; // start progress at 0%
    }

    localStorage.setItem("enrolled", JSON.stringify(enrolled));
    localStorage.setItem("progressMap", JSON.stringify(progressMap));
}

// function loadCourse(){
//     const courseData = {
//         "Web Development": {
//             img: "webdev.jpg",
//             desc: "Learn HTML, CSS, and JavaScript to build responsive websites.",
//             progress: 0
//         },
//         "Python": {
//             img: "python.jpg",
//             desc: "Master Python with hands-on coding and real-world problems.",
//             progress: 0
//         },
//         "ui/ux": {
//             img: "uiux.jpg",
//             desc: "Design user-friendly interfaces with modern tools and techniques.",
//             progress: 0
//         },
//         "java": {
//             img: "java.png",
//             desc: "Learn object-oriented programming with Java from scratch.",
//             progress: 0
//         },
//         "data science": {
//             img: "datasci.jpg",
//             desc: "Analyze data, build models, and visualize insights with Python.",
//             progress: 0
//         },
//         "machine learning": {
//             img: "ml.jpg",
//             desc: "Build predictive models and understand machine learning algorithms.",
//             progress: 0
//         },
//         "cloud computing": {
//             img: "cloud.jpg",
//             desc: "Understand the basics of AWS, Azure, and cloud services.",
//             progress: 0
//         },
//         "cyber security": {
//             img: "cyber.jpg",
//             desc: "Protect systems and networks with fundamental cybersecurity skills.",
//             progress: 0
//         },
//         "react.js": {
//             img: "react.jpg",
//             desc: "Build fast, interactive UIs using React and modern frontend tools.",
//             progress: 0
//         },
//         "node.js": {
//             img: "node.jpg",
//             desc: "Create scalable backend apps with Node.js and Express framework.",
//             progress: 0
//         },
//         "ai": {
//             img: "ai.jpg",
//             desc: "Discover AI concepts, applications, and how machines learn.",
//             progress: 0
//         },
//         "sql": {
//             img: "sql.jpg",
//             desc: "Query databases using SQL and manage relational data effectively.",
//             progress: 0
//         },
//         "digital marketing": {
//             img: "digimark.jpg",
//             desc: "Master SEO, social media, and content strategies to grow online.",
//             progress: 0
//         },
//         "javascript": {
//             img: "js.png",
//             desc: "Learn core JavaScript concepts and build dynamic, interactive websites.",
//             progress: 0
//         },
//         "C programming": {
//             img: "cpgm.jpg",
//             desc: "Master the fundamentals of C programming, from variables to pointers.",
//             progress: 0
//         }
//     };

// const container = document.getElementById("my-courses");
//     container.innerHTML = ""; // clear old content

//     const enrolled = JSON.parse(localStorage.getItem("enrolled")) || [];

//     if (enrolled.length === 0) {
//         container.innerHTML = "<p>You haven’t enrolled in any courses yet.</p>";
//         return;
//     }

//     enrolled.forEach(courseName => {
//         const data = courseData[courseName];
//         if (data) {
//             container.innerHTML += `
//                 <div class="course-item">
//                     <img src="${data.img}" alt="${courseName}">
//                     <h3>${courseName}</h3>
//                     <p>${data.desc}</p>
//                     <div class="progress-container">
//                         <div class="progress-bar" style="width: ${data.progress}%"></div>
//                         <span>${data.progress}% completed</span>
//                     </div>
//                 </div>
//             `;
//         }
//     });
    
// }
function loadCourse() {
    const courseData = {
        "Web Development": {
            img: "webdev.jpg",
            desc: "Learn HTML, CSS, and JavaScript to build responsive websites."
        },
        "Python": {
            img: "python.jpg",
            desc: "Master Python with hands-on coding and real-world problems."
        },
        "ui/ux": {
            img: "uiux.jpg",
            desc: "Design user-friendly interfaces with modern tools and techniques."
        },
        "java": {
            img: "java.png",
            desc: "Learn object-oriented programming with Java from scratch."
        },
        "data science": {
            img: "datasci.jpg",
            desc: "Analyze data, build models, and visualize insights with Python."
        },
        "machine learning": {
            img: "ml.jpg",
            desc: "Build predictive models and understand machine learning algorithms."
        },
        "cloud computing": {
            img: "cloud.jpg",
            desc: "Understand the basics of AWS, Azure, and cloud services."
        },
        "cyber security": {
            img: "cyber.jpg",
            desc: "Protect systems and networks with fundamental cybersecurity skills."
        },
        "react.js": {
            img: "react.jpg",
            desc: "Build fast, interactive UIs using React and modern frontend tools."
        },
        "node.js": {
            img: "node.jpg",
            desc: "Create scalable backend apps with Node.js and Express framework."
        },
        "ai": {
            img: "ai.jpg",
            desc: "Discover AI concepts, applications, and how machines learn."
        },
        "sql": {
            img: "sql.jpg",
            desc: "Query databases using SQL and manage relational data effectively."
        },
        "digital marketing": {
            img: "digimark.jpg",
            desc: "Master SEO, social media, and content strategies to grow online."
        },
        "javascript": {
            img: "js.png",
            desc: "Learn core JavaScript concepts and build dynamic, interactive websites."
        },
        "C programming": {
            img: "cpgm.jpg",
            desc: "Master the fundamentals of C programming, from variables to pointers."
        }
    };

    const container = document.getElementById("my-courses");
    container.innerHTML = "";

    const enrolled = JSON.parse(localStorage.getItem("enrolled")) || [];
    const progressMap = JSON.parse(localStorage.getItem("progressMap")) || {};

    if (enrolled.length === 0) {
        container.innerHTML = "<p>You haven’t enrolled in any courses yet.</p>";
        return;
    }

    enrolled.forEach(courseName => {
        const data = courseData[courseName];
        const progress = progressMap[courseName] || 0;

        if (data) {
            container.innerHTML += `
                <div class="course-item" style="margin-bottom: 20px;">
        <img src="${data.img}" alt="${courseName}" style="width: 100%; max-width: 200px;">
        <h3>${courseName}</h3>
        <p>${data.desc}</p>
        
        <div class="progress-container" style="margin-bottom: 10px;">
            <div class="progress-bar" style="width: ${progress}%; background-color: green; height: 10px;"></div>
        </div>
        <span style="display: inline-block; margin-bottom: 5px;">${progress}% completed</span>

        ${progress < 100 
            ? `<button onclick="increaseProgress('${courseName}')">+10%</button>` 
            : `<p style="color: green; font-weight: bold; margin-top: 5px;">✅ Completed</p>`
        }
    </div>
            `;
        }
    });
}
function increaseProgress(courseName) {
    let progressMap = JSON.parse(localStorage.getItem("progressMap")) || {};

    progressMap[courseName] = Math.min((progressMap[courseName] || 0) + 10, 100);

    localStorage.setItem("progressMap", JSON.stringify(progressMap));
    loadCourse(); // refresh UI
}


