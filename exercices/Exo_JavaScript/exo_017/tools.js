export const AjoutModificationStatus = Object.freeze({
    AJOUT: "AJOUT",
    MODIFICATION: "MODIFICATION"
});

export const TaskStatus = Object.freeze({
    A_FAIRE: "A_FAIRE",
    EN_COURS: "EN_COURS",
    TERMINE: "TERMINE"
});

function* createIdIterator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}

const idIterator = createIdIterator();

export class Task {
    constructor(title, status, isUrgent) {
        this.id = idIterator.next().value;
        this.title = title;
        this.status = status;
        this.isUrgent = isUrgent;
    }
}
