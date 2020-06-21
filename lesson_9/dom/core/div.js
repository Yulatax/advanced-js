const DIV_NAME = 'div';

class Div extends HtmlElement{

    static get tagName() {
        return DIV_NAME;
    }

    constructor() {
        super(Div.tagName);
    }

    set onClick(fn){
        this._elem.addEventListener('click', fn)
    }
}