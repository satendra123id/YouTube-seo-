function generate(){

let idea = document.getElementById("idea").value;

let title = "🔥 "+idea+" | Full Guide 2026";

let desc = "Is video me hum "+idea+" ke bare me detail me batayenge.";

let tags = idea+", youtube tips, viral video";

let hashtags = "#youtube #viralvideo #"+idea.replace(/ /g,"");

let keywords = idea+", youtube seo, video growth";

document.getElementById("title").innerHTML = title;
document.getElementById("desc").innerHTML = desc;
document.getElementById("tags").innerHTML = tags;
document.getElementById("hashtags").innerHTML = hashtags;
document.getElementById("keywords").innerHTML = keywords;

}
