class HtmlElement {

    _target = null;
    _template = '';
    _variables = {};
    _styles = {};

    static isDOMObject(el) {
        return el instanceof Element;
    }

    constructor(tagName) {
        this._elem = document.createElement(tagName);
    }

    set target(el) {
        if(!HtmlElement.isDOMObject(el)) {
            throw new Error('Element is not a DOM Object!')
        }
        this._target = el;
    }

    set template(str) {
        this._template = str;
        this._update();
    }

    set variables(vars) {
        this._variables = Object.keys(vars).reduce((acc, key) => {
            const val = vars[key];
            if (typeof val !== 'string' && typeof val !== 'function') {
                throw new Error('Incorrect type of value');
            }
            (val instanceof Function) ? acc[key] = val() : acc[key] = val;
            return acc;
        }, {});
        this._applyVariables();
    }

    set styles(styles) {
        this._styles = Object.assign(this._styles, styles);
        console.log(this._styles);
        this._applyStyles();
    }

    render() {
        this._render();
    }

    unrender() {
        this._unrender();
    }

    _render() {
        this._target.append(this._elem);
    }

    _unrender() {
        this._elem.remove();
    }

    _update() {
        this._elem = new DOMParser().parseFromString(this._template, 'text/html').body.firstChild;
    }

    _applyVariables() {
        Object.entries(this._variables).forEach(entry => {
            const[key, val] = entry;
            const pattern = new RegExp(`{{${key}}}`, "g");
            this._template = this._template.replace(pattern, val);
        });
        this._update();
    }

    _applyStyles() {
        Object.entries(this._styles).forEach(entry => {
            const[key, val] = entry;
            this._elem.style[key] = val;
        })
    }
}