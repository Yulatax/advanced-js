// Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
// Реализовать 3 функции, выполняющие это разными способами

function displayNode (node, deep = 0) {
    let str = `${' '.repeat(deep)} ${node.nodeType} ${node.nodeName} ${showTextNodeValue(node)}\n`;
    if (node.hasChildNodes()) {
        for (let child of node.childNodes) {
            str += displayNode(child, deep + 1);
        }
    }
    return str;
}

function showTextNodeValue(node) {
    if (node.nodeType !== 3) {
        return null;
    } else {
        const textContent = node.nodeValue.replace(/\n/g, '\\n');
        return `"${textContent}"`;
    }
}

console.log(displayNode(document.documentElement));