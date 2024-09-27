interface IUserForm {
    name: string;
    age: number;
}

interface IUser extends IUserForm {
    id: number;
}

class UserServices {
    public static readonly _UserKey = 'users'

    public static _getAll(): IUser[] {
        return JSON.parse(localStorage.getItem(this._UserKey));
    }

    private  static _setToStorage(data: IUser[]): void {
        localStorage.setItem(this._UserKey, JSON.stringify(data))
    }

    static create(data: IUserForm): void {
        const users = this._getAll();
        const id = users.length ? users.slice(-1)[0].id + 1 : 1;
        users.push({id: id, ...data})
        this._setToStorage(users)
    }

    static showHtml():void {
        const userContainer = document.querySelector('#userContainer') as HTMLDivElement;
        userContainer.innerHTML = '';

        const users = this._getAll()

        const usersHtmlContent = users.map(user => {

            const itemDiv = document.createElement('div')
            const button = document.createElement('button')

            button.innerText = 'delete'
            button.onclick = () => {
                this._deleteById(user.id)
            }

            itemDiv.innerText = `${user.id} -- ${user.name} -- ${user.age}`
            itemDiv.appendChild(button)
            return itemDiv
        })

        if(usersHtmlContent.length) {
            userContainer.append(...usersHtmlContent)
        } else {
            userContainer.innerText = 'users does not exists'
        }
    }

    private static _deleteById(id: number): void {
        const users = this._getAll();
        const index = users.findIndex(user => user.id == id);
        users.splice(index, 1);
        this._setToStorage(users);
        this.showHtml();
    }
}

UserServices.showHtml();

const form = document.forms['userForm'] as HTMLFormElement;

interface IForm {
    name: HTMLInputElement,
    age: HTMLInputElement
}

form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const {name: inputName, age: inputAge} = form as any as IForm;
    UserServices.create({name: inputName.value, age: +inputAge.value})
    form.reset()
    UserServices.showHtml();
}
