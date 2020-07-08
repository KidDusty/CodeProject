const ol = document.querySelector("ol");
const movies =[
    {
        Movie: "6 Underground",
        Actor: "Ryan Reynolds",
        Year: "2019",
        Director: "Michael Bay",
        Picture: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/6-underground-featured.jpg"
    },
    {
        Movie: "HomeFront",
        Actor: "Jason Statham",
        Year: "2013",
        Director: "David Leitch",
        Picture: "https://www.wallpaperbetter.com/wallpaper/499/320/1001/jason-statham-homefront-2K-wallpaper.jpg"
    },
    {
        Movie: "Hobbs And Shaw",
        Actor: "Jason Statham",
        Year: "2019",
        Director: "Michael Bay",
        Picture: "https://i.pinimg.com/originals/c1/fb/7e/c1fb7efb6b6ec0f53d22cb42575836a1.jpg"
    },
    {
        Movie: "Taken",
        Actor: "Liam Neeson",
        Year: "2008",
        Director: "Pierre Morel",
        Picture: "https://images.squarespace-cdn.com/content/594970e91b631b3571be12e2/1532981701449-FP7PM1Y9YWDU210G0MS2/ECPAT-USA_Taken_MoviePoster.jpg?content-type=image%2Fjpeg"
    },
    {
        Movie: "The Mechanic: Resurrection",
        Actor: "Jason Statham",
        Year: "2016",
        Director: "Dennis Gansel", 
        Picture: "https://fullplot.info/wp-content/uploads/2019/05/mechanic_resurrection.jpg"
    }
];

const template = movies.map(movies =>`
<li>
    <p>Movie: ${movies.Movie}</p>
    <p>Actor: ${movies.Actor}</p>
    <p>Year: ${movies.Year}</p>
    <p>Director: ${movies.Director}</p>
    <p>Picture: ${movies.Picture}</p>
</li>
`);
ol.innerHTML = template.join('');
