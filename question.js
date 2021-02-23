class Question{
    constructor(){
        this.input=createInput("Name please");
        this.greeting=createElement("h2");
    }
    
    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("Question-What starts and ends with letter E but only has one letter?");
        this.question.position(150,80);
        this.option1.html("1:Everyone");
        this.option1.position(150,100);
        this.option2.html("2:Envolope");
        this.option2.position(150,120);

        this.input.position(150,230);
    }



    hide(){
        this.input.hide();
        this.greeting.hide();
    }
}