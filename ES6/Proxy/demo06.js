const dom = new Proxy({}, {
    get(target, label) {
        return function (attrs = {}, ...children) {
            children;
            const el = document.createElement(label);
            for (let prop of Object.keys(attrs)) {
                el.setAttribute(prop, attrs[prop]);
            }
            for (let child of children) {
                if (typeof child === 'string') {
                    child = document.createTextNode(child)
                }
                el.appendChild(child);
            }
            return el;
        }
    }
});
const el = dom.div({},
    'Hello, my name is ',
    dom.a({
        href: '//example.com'
    }, 'Mark'),
    '. I like:',
    dom.ul({},
        dom.li({}, 'The web'),
        dom.li({}, 'Food'),
        dom.li({}, '…actually that\'s it')
    )
);
document.body.appendChild(el);