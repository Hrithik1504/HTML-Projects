const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');

const getRandomPanel = () => {
    const panels = [
        topLeft,
        topRight,
        bottomLeft,
        bottomRight
    ]
    return panels[parseInt(Math.random() * panels.length)];
};

const sequence = [getRandomPanel(),];

const flash = panel => {
    return new Promise((resolve, reject) => {
        panel.className += ' active';
        setTimeout(() => {
            panel.className = panel.className.replace(
            ' active',
            ''
            );
            setTimeout(() => {
                resolve();
            }, 250);
            resolve();
        }, 1000);
    });
};

let canClick = false;

const panelClicked = panel => {
    if (!canClick) return;
    console.log(panel);
};

const main = async () => {
    for (const panel of sequence) {
        await flash(panel);
    }
    canClick = true;
};

main();