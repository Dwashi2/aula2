class CustomPlayer{
    constructor(width,height, message){
        this.width = width;
        this.height= height;
        this.message = message;
    }

    setSources(Sources){
        this.Sources = Sources
    }

    render(MyPlayerId){
        let video = document.createElement("video")

        let source = document.createElement("source");
        source.setAttribute("src", "movie.mp4")

        let text = source = document.createElement("text");
        text.appendChild(document.createTextNode(" Your browser does not support the video tag."))
    }
}


new CustomPlayer();