let scene = new Stage(0xDDDDFF);
let titre = new Frame("titre", scene, 0, 0, 100, 40, 0x9999FF);
titre.setCss("width", "100%");
titre.setBorder(2, LineStyle.DASHED, 0x000000);
titre.setTextFormat("Calibri", 20, 0xFFFFFF, TextAlign.RIGHT, false, false, true);
titre.text = "Je suis venu te dire que je m'en vais";
let vue = new Frame("vue", scene, 15, 60, 200, 400, 0x99CC99);
vue.setBorder(3, LineStyle.RIDGE, 0x000000, 1.0);
vue.movable(true).resizable(true).closable(true);
vue.text = "Je suis déplaçable, redimensionnable et refermable";
vue.fmt.align = TextAlign.RIGHT;
vue.fmt.marginRight = 10;
vue.fmt.leading = 3.5; // espacement vertical
let fenetre = new Win("fenêtre", scene, 300, 150, 400, 300, 0xFF6666, 0x000000, 1);
scene.addChild(fenetre);
fenetre.title.text = "Fenêtre toutes options";
fenetre.setWindowOptions(true, true, true);
let menu = new Win("Menu", scene, 0, 0, 300, 450, 0x999999, 0xFFFFFF, 1);
menu.setWindowOptions(false, false, true); // ni fermable ni déplaçable !
menu.title.text = "Créer une fenêtre";
menu.title.background.color = 0x666666;
menu.right = 2;
menu.bottom = 2;
menu.callback = (i, e) => {
    vue.text = i.id + ":" + i.input.value;
};
new InputText("Gauche", menu, 5, 40, 130, 50, "250");
new InputText("Haut", menu, 5, 70, 130, 50, "50");
new InputText("Largeur", menu, 5, 100, 130, 50, "400");
new InputText("Hauteur", menu, 5, 130, 130, 50, "300");
new InputText("Couleur fond", menu, 5, 160, 130, 70, "0xFFFF00");
new InputText("Couleur bord", menu, 5, 190, 130, 70, "0xFF00FF");
new InputText("Couleur deco", menu, 5, 220, 130, 70, "0x0000FF");
new Checkbox("Déplaçable", menu, 5, 250, 130, true);
new Checkbox("Fermable", menu, 5, 280, 130, true);
new Checkbox("Redimensionable", menu, 5, 310, 130, true);
new InputText("Titre", menu, 5, 340, 80, 200, "_sans_titre_");
new Button("Créer la fenêtre !", menu, 100, 390);
//# sourceMappingURL=renderer.js.map