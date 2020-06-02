// Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
// Реализовать 3 функции, выполняющие это разными способами

function displayNode (node, deep = 0) {
    console.log('  '.repeat(deep), node.nodeType, node.nodeName, showTextNodeValue(node));
    for (let item = node.firstChild; item; item = item.nextSibling)
        displayNode(item, deep + 1);
}

function showTextNodeValue(node) {
    if (node.nodeType !== 3) {
        return null;
    } else {
        const textContent = node.nodeValue.replace(/\n/g, '\\n');
        return `"${textContent}"`;
    }
}

displayNode(document.documentElement);