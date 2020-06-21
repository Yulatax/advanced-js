const INPUT_NAME = 'input';

class Input extends HtmlElement{

    static get tagName() {
        return INPUT_NAME;
    }

    constructor() {
        super(Input.tagName);
    }

    set onInput(fn){
        this._elem.addEventListener('input', fn)
    }

    set onFocus(fn){
        this._elem.addEventListener('focus', fn)
    }
}