let scene = new Stage(0xDDDDFF);
let titre = new Frame("titre", scene, 0, 0, 100, 40, 0x9999FF);
titre.setCss("width", "100%");
titre.setBorder(3, LineStyle.DASHED, 0x000099);
titre.setTextFormat("Calibri", 20, 0x000066, TextAlign.RIGHT);
titre.fmt.marginRight = 10;
titre.text = "Éditeur de fenêtres actives ©HSH 2018";
let vue = new Frame("vue", scene, 15, 60, 200, 400, 0x99CC99);
vue.setBorder(1, LineStyle.SOLID, 0x669966, 0.8, 8);
// vue.background.setGradient([0xFFFFFF, 0x99FF99, 0x339933],[0.8, 1, 1],[0, 16, 90],180);
vue.movable = vue.closable = vue.resizable = true;
vue.text = "Je suis une 'Frame' déplaçable, refermable et redimensionnable.";
vue.fmt.align = TextAlign.RIGHT;
vue.fmt.marginRight = 10;
vue.fmt.leading = 3.5; // espacement vertical
let fenetre = new Win("fenêtre", scene, 300, 150, 400, 300, 0xFF6666, 0x000000, 1);
scene.addChild(fenetre);
fenetre.title.text = "Fenêtre toutes options";
fenetre.setWindowOptions(true, true, true);
let menu = new Form("Menu", scene, 0, 0, 200, 450, 0x999999, 0xFFFFFF, 1);
menu.setWindowOptions(false, false, true); // ni fermable ni déplaçable !
menu.title.text = "Créer une fenêtre";
menu.title.background.color = 0x666666;
menu.right = 2;
menu.bottom = 2;
menu.callback = (i, e) => {
    let num = parseInt(i.input.value, 10);
    let hex = parseInt(i.input.value, 16);
    switch (i.id) {
        case "Gauche":
            vue.left = num;
            break;
        case "Haut":
            vue.top = num;
            break;
        case "Largeur":
            vue.width = num;
            break;
        case "Hauteur":
            vue.height = num;
            break;
        case "Arrondi":
            vue.border.radius = num;
            break;
        case "Déplacer":
            vue.movable = i.checked;
            break;
        case "Fermer":
            vue.closable = i.checked;
            break;
        case "Tailler":
            vue.resizable = i.checked;
            break;
        case "Couleur fond":
            vue.background.color = hex;
            break;
        case "Couleur bord":
            vue.border.color = hex;
            break;
        default:
            vue.text = i.id + "<br/>" + i.input.value;
    }
    vue.text = "Je suis une 'Frame' " +
        (menu.input("Déplacer").checked ? "déplaçable, " : "immobile, ") +
        (menu.input("Fermer").checked ? "refermable et " : "fixe et ") +
        (menu.input("Tailler").checked ? "redimensionnable." : "de taille fixe.");
};
menu.setStartPos(5, 30, 30);
menu.addRange("Gauche", 120, vue.left, 0, 800);
menu.addRange("Haut", 120, vue.top, 0, 600);
menu.addRange("Largeur", 120, vue.width, 50, 1024);
menu.addRange("Hauteur", 120, vue.height, 20, 800);
menu.addRange("Arrondi", 120, vue.border.radius, 0, 100);
menu.addCheck("Déplacer", 120, true);
menu.addCheck("Fermer", 120, true);
menu.addCheck("Tailler", 120, true);
menu.addColor("Couleur fond", 120, "FFFF00");
menu.addColor("Couleur bord", 120, "FF00FF");
menu.addText("Titre", 60, 120, "_sansTitre_");
menu.addButton("Créer la fenêtre !");
vue.bringToFront();
let watcher = new Proxy(vue, surModifVue);
function surModifVue() {
}
//# sourceMappingURL=renderer.js.map