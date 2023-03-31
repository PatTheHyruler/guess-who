export class Person {
    name: string;
    imagePath: string | null;

    constructor(name: string, imagePath: string | null = null) {
        this.name = name;
        this.imagePath = imagePath;
    }
}