class UserServices {
    static _getAll() {
        return JSON.parse(localStorage.getItem(this._UserKey)) || [
            { name: 'Max', age: 15, id: 5 }
        ];
    }
    static _setToStorage(data) {
        localStorage.setItem(this._UserKey, JSON.stringify(data));
    }
    static create(data) {
        const users = this._getAll();
        const id = users.length ? users.slice(-1)[0].id + 1 : 1;
        users.push(Object.assign({ id: id }, data));
        this._setToStorage(users);
    }
    static showHtml() {
        const userContainer = document.querySelector('#userContainer');
        userContainer.innerHTML = '';
        const users = this._getAll();
        const usersHtmlContent = users.map(user => {
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.innerText = 'delete';
            button.onclick = () => {
                this._deleteById(user.id);
            };
            itemDiv.innerText = `${user.id} -- ${user.name} -- ${user.age}`;
            itemDiv.appendChild(button);
            return itemDiv;
        });
        if (usersHtmlContent.length) {
            userContainer.append(...usersHtmlContent);
        }
        else {
            userContainer.innerText = 'users does not exists';
        }
    }
    static _deleteById(id) {
        const users = this._getAll();
        const index = users.findIndex(user => user.id == id);
        users.splice(index, 1);
        this._setToStorage(users);
        this.showHtml();
    }
}
UserServices._UserKey = 'users';
UserServices.showHtml();
const form = document.forms['userForm'];
form.onsubmit = (e) => {
    e.preventDefault();
    const { name: inputName, age: inputAge } = form;
    UserServices.create({ name: inputName.value, age: +inputAge.value });
    form.reset();
    UserServices.showHtml();
};
