export class Service {
    getItems() {
        this.getMessages()
            .forEach((it) => console.log(it));
    }
    private getMessages = () =>
        [
            "1",
            "2"
        ];
}