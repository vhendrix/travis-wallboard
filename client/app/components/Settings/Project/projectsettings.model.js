export class ProjectSettings {
    name = "";
    enabled = true;

    constructor(name:string, enabled:boolean) {
        this.name = name;
        this.enabled = enabled;
    }

    getName() {
        return this.name;
    }

   isEnabled() {
       return this.enabled;
   }
}
