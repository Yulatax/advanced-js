// Вывести в консоль иерархическую структуру документа, так, как это показано на практической части.
// Реализовать 3 функции, выполняющие это разными способами

function displayNode (node, deep = 0) {
    console.log('  '.repeat(deep), node.nodeType, node.nodeName, showTextNodeValue(node));
    let item = node.firstChild;
    while (item) {
        displayNode(item, deep + 1);
        item = item.nextSibling;
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

displayNode(document.documentElement);