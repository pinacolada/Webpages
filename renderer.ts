let scene = new Stage(0xDDDDFF);

let titre = new Frame("titre", scene, 0, 0, 100, 40, 0x9999FF);
titre.setCss("width","100%");
titre.setBorder(2, LineStyle.DASHED, 0x000000);
titre.setTextFormat("Calibri", 20, 0xFFFFFF, TextAlign.RIGHT);
titre.fmt.marginRight = 10;
titre.text = "Je suis venu te dire que je m'en vais";

let vue = new Frame("vue",scene, 15, 60, 200, 400, 0x99CC99);
vue.setBorder(1,LineStyle.SOLID, 0x669966, 0.8, 8);
vue.background.setGradient([0xFFFFFF, 0x99FF99, 0x339933],[0.8, 1, 1],[0, 16, 90],180);
vue.movable(true).resizable(true).closable(true);
vue.text = "Je suis déplaçable, redimensionnable et refermable";
vue.fmt.align = TextAlign.RIGHT;
vue.fmt.marginRight = 10;
vue.fmt.leading = 3.5;// espacement vertical

let fenetre = new Win("fenêtre", scene, 300, 150, 400, 300, 0xFF6666, 0x000000, 1);
scene.addChild(fenetre);
fenetre.title.text = "Fenêtre toutes options";

fenetre.setWindowOptions(true, true, true);

let menu = new Form("Menu", scene, 0, 0, 300, 450, 0x999999, 0xFFFFFF, 1);
menu.setWindowOptions(false, false, true);// ni fermable ni déplaçable !
menu.title.text = "Créer une fenêtre";
menu.title.background.color = 0x666666;
menu.right = 2;
menu.bottom = 2;
menu.callback = (i:Input, e:Event) => {
    let num:number =  parseInt(i.input.value);
    
    switch(i.id) {
        case "Gauche": vue.left = num;          break;
        case "Haut": vue.top = num;             break;
        case "Largeur": vue.width = num;        break;
        case "Hauteur": vue.height = num;       break;
        case "Arrondi": vue.border.radius = num;break;
        case "Déplaçable": vue.movable(i.input.checked); break;
        case "Fermable": vue.closable(i.input.checked); break;
        case "Redimensionnable": vue.resizable(i.input.checked); break;
        default:
        vue.text = i.id + "<br/>" + i.input.value;
    }
}
menu.addRange("Gauche", 5, 40, 120, vue.left, 0, 800);
menu.addRange("Haut", 5, 70, 120, vue.top, 0, 600);
menu.addRange("Largeur", 5, 100, 120, vue.width, 50, 1024);
menu.addRange("Hauteur", 5, 130, 120, vue.height, 20, 800);
menu.addRange("Arrondi", 5, 160, 120, vue.border.radius, 0, 100);
/*
menu.inputColor("Fond", 5, 160, 130, 70, "0xFFFF00");
menu.inputColor("Bord", 5, 190, 130, 70, "0xFF00FF");
menu.inputColor("Decor", 5, 220, 130, 70, "0x0000FF");
*/
menu.addCheck("Déplaçable", 5, 250, 130, true);
menu.addCheck("Fermable", 5, 280, 130,  true);
menu.addCheck("Redimensionable", 5, 310, 130, true);
menu.addText("Titre", 5, 340, 80, 200, "_sans_titre_");
menu.addButton("Créer", 150, 390);