export class requestbook{
    id:number;
    image:string;
    BookName:string;
    Author:string;
    Date:Date;
    constructor(id:number,BookName:string,Author:string ,  Date:Date){
        this.id=id;
        this.BookName=BookName;
        this.Author=Author;
        this.Date=Date;

    }
}



