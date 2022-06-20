export class Contact {
    constructor(name, surname, phone, email, type) {
        this.name = name
        this.surname = surname
        this.phone = phone
        this.email = email
        this.type = type
        this.onShow = false
        this.connected = false
    }
}