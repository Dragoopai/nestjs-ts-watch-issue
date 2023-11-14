export class Service {
    getItems() {
        return this.getMessages()
    }
    private getMessages = () =>
        [
            "1",
            "2"
        ];
}