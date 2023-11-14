export class Service {
    log() {
        this.getMessages()
            .forEach((it) => console.log(it));
    }
    private getMessages = () =>
        [
            "1",
            "2"
        ];
}