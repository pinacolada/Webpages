let fond = new Frame("stage", 0, 0, 100, 100, 0xDDDDFF, 1);
fond.parent = document.body;
fond.setCss("width", "100%", "height", "100%");
let titre = new Frame("titre", 0, 0, 100, 40, 0x9999FF);
fond.addChild(titre);
titre.setCss("width", "100%");
titre.setBorder(2, LineStyle.DASHED, 0x000000);
titre.setTextFormat("Calibri", 20, 0xFFFFFF, TextAlign.CENTER);
titre.fmt.underline = true;
titre.text = "Je suis venu te dire que je m'en vais";
let menu = new Frame("menu", 15, 60, 200, 400, 0x99CC99);
menu.setBorder(3, LineStyle.RIDGE, 0x000000, 1.0);
fond.addChild(menu);
menu.movable(true).resizable(true).closable(true);
let fen1 = new Win("fen1", 300, 150, 400, 300, 0xFF6666, 0x000000, 1);
fen1.title.text = "Fenêtre toutes options";
fen1.setOptions(true, true, true);
fond.addChild(fen1);
let fen2 = new Win("Menu", 0, 0, 200, 450, 0x999999, 0xFFFFFF, 1);
fen2.title.text = "Menu bas-droite";
fen2.title.background.color = 0x666666;
fen2.right = 2;
fen2.bottom = 2;
fen2.setOptions(false, false, true); // ni fermable ni déplaçable !
fond.addChild(fen2);
//# sourceMappingURL=renderer.js.map