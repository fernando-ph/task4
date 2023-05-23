// // let namaSiswa1 = "Tamaro";
// // let namaSiswa2 = "Robby";
// // let namaSiswa3 = "Puja";

// // console.log(namaSiswa1);
// // console.log(namaSiswa2);
// // console.log(namaSiswa3);

// // array
// // let namaSiswa = ["Tamaro", "Robby", "Puja", "Rendi"];
// // console.log(namaSiswa);
// // console.log(namaSiswa[0]);
// // console.log(namaSiswa[2]);

// // object
// // let nama = "Badriana";
// // let alamat = "Tangerang Selatan";
// // let umur = 24;

// // console.log(nama);
// // console.log(alamat);
// // console.log(umur);

// // let dataPersonal1 = {
// //   nama: "Badriana",
// //   alamat: "Tangerang Selatan",
// //   umur: 24,
// // };

// // let dataPersonal2 = {
// //   nama: "Puan Maharani",
// //   alamat: "Jakarta Barat",
// //   umur: 48,
// // };

// // let dataPersonal3 = {
// //   nama: "Joko Widodo",
// //   alamat: "Solo",
// //   umur: 53,
// // };

// // let dataPersonal4 = {
// //   nama: "Megawati Soekarnoputri",
// //   alamat: "Jakarta Timur",
// //   umur: 65,
// // };

// // console.log(dataPersonal1);
// // console.log(dataPersonal2);
// // console.log(dataPersonal3);
// // console.log(dataPersonal4);
// // console.log(dataPersonal2.nama);

// // array of object
// // let dataCaleg = [
// //   { nama: "Joko Widodo", alamat: "Solo" },
// //   { nama: "Puan Maharani", alamat: "Jakarta Barat" },
// //   { nama: "Prabowo S", alamat: "Semarang" },
// // ];

// // console.log(dataCaleg);
// // console.log(dataCaleg[1].nama);

// let dataBlog = [];
// function addBlog(event) {
//   event.preventDefault();

//   let title = document.getElementById("input-blog-title").value;
//   let content = document.getElementById("input-blog-content").value;
//   let image = document.getElementById("input-blog-image").files;

//   // untuk membuat url gambar, agar tampil
//   image = URL.createObjectURL(image[0]);
//   console.log(image);

//   let blog = {
//     title,
//     content,
//     image,
//     postAt: new Date(),
//     author: "Abel Dustin",
//   };

//   dataBlog.push(blog);
//   console.log(dataBlog);

//   renderBlog();
// }

// function renderBlog() {
//   document.getElementById("contents").innerHTML = "";

//   //   for (let index = 0; index < dataBlog.length; index++) {
//   //     console.log(index);
//   //   }

//   for (let index = 0; index < dataBlog.length; index++) {
//     document.getElementById("contents").innerHTML += `
//         <div class="blog-list-item">
//             <div class="blog-image">
//                 <img src="${dataBlog[index].image}" alt="blog_img" />
//             </div>
//             <div class="blog-content">
//             <div class="btn-group">
//                 <button class="btn-edit">Edit Post</button>
//                 <button class="btn-delete">Delete Post</button>
//             </div>
//             <h1>
//                 <a href="blog-detail.html" target="_blank"
//                 >${dataBlog[index].title}</a
//                 >
//             </h1>
//             <div class="detail-blog-content">
//                 ${getFullTime(dataBlog[index].postAt)} | ${
//       dataBlog[index].author
//     }
//             </div>
//               <p>
//                   ${dataBlog[index].content}
//               </p>
//               <div style="float: right; margin: 10px">
//                 <p style="font-size: 15px; color: grey">${getDistanceTime(
//                   dataBlog[index].postAt
//                 )}</p>
//               </div>
//             </div>

//         </div>
//     `;
//   }
// }

// function getFullTime(time) {
//   // console.log("get full time");
//   // let time = new Date();
//   // console.log(time);

//   let monthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   // console.log(monthName[8]);

//   let date = time.getDate();
//   // console.log(date);

//   let monthIndex = time.getMonth();
//   // console.log(monthIndex);

//   let year = time.getFullYear();
//   // console.log(year);

//   let hours = time.getHours();
//   let minutes = time.getMinutes();
//   // console.log(minutes);

//   if (hours <= 9) {
//     hours = "0" + hours;
//   } else if (minutes <= 9) {
//     minutes = "0" + minutes;
//   }

//   return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
// }

// function getDistanceTime(time) {
//   let timeNow = new Date();
//   let timePost = time;

//   // waktu sekarang - waktu post
//   let distance = timeNow - timePost; // hasilnya milidetik
//   console.log(distance);

//   let milisecond = 1000; // milisecond
//   let secondInHours = 3600; // 1 jam 3600 detik
//   let hoursInDays = 24; // 1 hari 24 jam

//   let distanceDay = Math.floor(
//     distance / (milisecond * secondInHours * hoursInDays)
//   ); // 1/86400000
//   let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
//   let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
//   let distanceSeconds = Math.floor(distance / milisecond); // 1/1000

//   if (distanceDay > 0) {
//     return `${distanceDay} Day Ago`;
//   } else if (distanceHours > 0) {
//     return `${distanceHours} Hours Ago`;
//   } else if (distanceMinutes > 0) {
//     return `${distanceMinutes} Minutes Ago`;
//   } else {
//     return `${distanceSeconds} Seconds Ago`;
//   }
// }

// setInterval(function () {
//   renderBlog();
// }, 10000);


function emptyFormAlert() {
  let projectName = document.getElementById("project-name-input").value;
  let startDate = document.getElementById("start-date-input").value;
  let finishDate = document.getElementById("finish-date-input").value;
  let description = document.getElementById("description-input").value;
  let multiInput = document.querySelectorAll(".multi-input:checked");
  let image = document.getElementById("image-input").value;
  
  if(projectName == "") {
      return alert("Please input your project name or title");
  } else if(startDate == "") {
      return alert("When did you start this project?");
  } else if(finishDate == "") {
      return alert("When did you finish this project?");
  } else if(description == "") {
      return alert("Please describe this project.");
  } else if(multiInput.length === 0) {
      return alert("Choose your technologies.");
  } else if(image == "") {
      return alert("Please attach an image of your project.");
  };
};

let projectData = [];

function postProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("project-name-input").value;
  let startDate = document.getElementById("start-date-input").value;
  let finishDate = document.getElementById("finish-date-input").value;
  let description = document.getElementById("description-input").value;
  let image = document.getElementById("image-input").files;

  let today = new Date().toISOString().split("T")[0];
  if (finishDate > today) {
      return alert("Time travel is not yet invented.");
  };

  const jsIcon = '<i class="fa-brands fa-square-js fa-xl fa-fw"></i>';
  const bootstrapIcon = '<i class="fa-brands fa-bootstrap fa-xl fa-fw"></i>';
  const goIcon = '<i class="fa-brands fa-golang fa-xl fa-fw"></i>';
  const reactIcon = '<i class="fa-brands fa-react fa-xl fa-fw"></i>';

  let multiInput = document.querySelectorAll(".multi-input:checked");
  if(multiInput.length === 0) {
      return alert("Select at least one technology used.");
  };

  let jsIconDecide = document.getElementById("js-check").checked ? jsIcon : "";
  let bootstrapIconDecide = document.getElementById("bootstrap-check").checked ? bootstrapIcon : "";
  let goIconDecide = document.getElementById("go-check").checked ? goIcon : "";
  let reactIconDecide = document.getElementById("react-check").checked ? reactIcon : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  const sDvalidation = new Date(startDate);
  const fDvalidation = new Date(finishDate);
  if (sDvalidation > fDvalidation) {
      return alert("Please input your dates correctly.");
  };

  let projectPreviewCard = {
      projectName,
      startDate,
      finishDate,
      description,
      jsIconDecide,
      bootstrapIconDecide,
      goIconDecide,
      reactIconDecide,
      image,
  };

  projectData.push(projectPreviewCard);
  console.log(projectData);

  renderPpc();

  document.getElementById("project-name-input").value = "";
  document.getElementById("start-date-input").value = "";
  document.getElementById("finish-date-input").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("js-check").checked = false;
  document.getElementById("bootstrap-check").checked = false;
  document.getElementById("go-check").checked = false;
  document.getElementById("react-check").checked = false;
  document.getElementById("image-input").value = "";

  document.getElementById("project-form").reset();
};

const textarea = document.getElementById("description-input");
textarea.addEventListener("input", function() {
  const minChar = 80;
  const inputLength = this.value.length;

  if (inputLength < minChar) {
      textarea.setCustomValidity("Minimum " + minChar + " characters required.")
  } else {
      textarea.setCustomValidity("");
  }
});

function showFileName() {
  document.getElementById("image-file-name").innerHTML = document.getElementById("image-input").value;
};

function renderPpc() {
  document.getElementById("wrap-up-the-cards").innerHTML = "";

  for (let index = 0; index < projectData.length; index++) {
      const startDate = new Date(projectData[index].startDate);
      const finishDate = new Date(projectData[index].finishDate);
      const remainder = finishDate - startDate;
      const timeUnits = [
          {value: 365.25 * 24 * 60 * 60 * 1000, label: "year(s)"},
          {value: 30 * 24 * 60 * 60 * 1000, label: "month(s)"},
          {value: 7 * 24 * 60 * 60 * 1000, label: "week(s)"},
          {value: 24 * 60 * 60 * 1000, label: "day(s)"},
      ];

      let resultOfDuration = "";
      for (let calculation = 0; calculation < timeUnits.length; calculation++) {
          const {value, label} = timeUnits[calculation];
          const calculate = Math.floor(remainder / value);
          if (calculate > 0) {
              resultOfDuration = `${calculate} ${label}`;
              break;
          };
      };

      if (resultOfDuration === "") {
          resultOfDuration = "Less than a day";
      };

      document.getElementById("wrap-up-the-cards").innerHTML += `
      <div class="project-preview-card">
          <img src="${projectData[index].image}" alt="User Image"/>
          <a href="#">
              <h4>${projectData[index].projectName}</h4>
          </a>
          <p class="duration">${resultOfDuration}</p>
          <p class="description">${projectData[index].description}</p>
          <div class="tech-icons">
              ${projectData[index].jsIconDecide}
              ${projectData[index].bootstrapIconDecide}
              ${projectData[index].goIconDecide}
              ${projectData[index].reactIconDecide}
          </div>
          <div class="card-buttons">
              <button class="edit-button">Edit</button>
              <button class="delete-button">Delete</button>
          </div>
      </div>
      `;
  };

  document.getElementById("wrap-up-the-scroll").scrollIntoView({behavior: 'smooth'});
};