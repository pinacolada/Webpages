let fond = new Frame("fond", 0, 0, 1600, 800, 0xDDDDFF, 1);
fond.parent = document.body;
let titre = new Frame("titre", 15, 15, 700, 40, 0x9999FF);
fond.addChild(titre);
titre.setBorder(2, LineStyle.DASHED, 0x000000);
titre.setTextFormat("Calibri", 20, 0xFFFFFF, TextAlign.CENTER);
titre.fmt.underline = true;
titre.text = "Je suis venu te dire que je m'en vais";
titre.movable(true).resizable(true).closable(true);
let menu = new Frame("menu", 15, 60, 200, 400, 0x99CC99);
menu.setBorder(3, LineStyle.RIDGE, 0x000000, 1.0);
fond.addChild(menu);
menu.movable(true).resizable(true).closable(true);
let fen1 = new Win("fen1", 300, 150, 400, 300, 0xFF6666, 0x000000, 1);
fen1.title.text = "Ma fenêtre";
fen1.setOptions(true, true, true);
fond.addChild(fen1);
//# sourceMappingURL=renderer.js.map