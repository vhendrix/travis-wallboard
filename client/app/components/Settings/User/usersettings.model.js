export class UserSettings {
    name = "";
    img = "";

    constructor(name:string, img:string) {
        this.name = name;
        this.img = img;
    }

    getName() {
        return this.name;
    }

   getImg() {
       return this.img;
   }
}
