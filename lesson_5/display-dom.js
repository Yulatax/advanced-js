// Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
// Реализовать 3 функции, выполняющие это разными способами

function showDomTree(node, deep = 0) {
    if (node.childNodes.length === 0) {
        consoleNode(node,deep);
        showDomTree(node.nextSibling, deep);
    } else {
        deep++;
        for (let child of node.childNodes) {
            consoleNode(child,deep);
            if (child.childNodes.length > 0) {
                showDomTree(child, deep)
            }
        }
    }
}

function showTextNodeValue(node) {
    if (node.nodeType !== 3) {
        return null;
    } else {
        const textContent = node.nodeValue.replace(/\n/g, '\\n');
        return `"${textContent}"`;
    }
}

function consoleNode(node, deep) {
    const type = node.nodeType;
    const name = node.nodeName;
    const value = showTextNodeValue(node);
    const spaces = '-'.repeat(deep);
    console.log(`${spaces}${type} ${name} ${value}`);
}

showDomTree(document.documentElement);