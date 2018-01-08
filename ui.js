//============================================================================================================================================================
//      C O L O R (r, g, b, rgb, rgba)
//============================================================================================================================================================
class Color {
    constructor(value, alpha = 1.0) {
        this.value = value;
        this.alpha = alpha;
    }
    get r() {
        return this.value >> 16 & 0xFF;
    }
    get g() {
        return this.value >> 8 & 0xFF;
    }
    get b() {
        return this.value & 0xFF;
    }
    get rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
    get rgba() {
        return `rgba(${this.r},${this.g},${this.b},${this.alpha.toFixed(1)})`;
    }
}
//============================================================================================================================================================
//      C U R S O R (enum des différents types de curseurs)
//============================================================================================================================================================
var Cursor;
(function (Cursor) {
    Cursor["alias"] = "alias";
    Cursor["all_scroll"] = "all-scroll";
    Cursor["auto"] = "auto";
    Cursor["cell"] = "cell";
    Cursor["context_menu"] = "context-menu";
    Cursor["col_resize"] = "col-resize";
    Cursor["copy"] = "copy";
    Cursor["crosshair"] = "crosshair";
    Cursor["default"] = "default";
    Cursor["e_resize"] = "e-resize";
    Cursor["ew_resize"] = "ew-resize";
    Cursor["grab"] = "grab";
    Cursor["grabbing"] = "grabbing";
    Cursor["help"] = "help";
    Cursor["move"] = "move";
    Cursor["n_resize"] = "n-resize";
    Cursor["ne_resize"] = "ne-resize";
    Cursor["nesw_resize"] = "nesw-resize";
    Cursor["ns_resize"] = "ns-resize";
    Cursor["nw_resize"] = "nw-resize";
    Cursor["nwse_resize"] = "nwse-resize";
    Cursor["no_drop"] = "no-drop";
    Cursor["none"] = "none";
    Cursor["not_allowed"] = "not-allowed";
    Cursor["pointer"] = "pointer";
    Cursor["progress"] = "progress";
    Cursor["row_resize"] = "row-resize";
    Cursor["s_resize"] = "s-resize";
    Cursor["se_resize"] = "se-resize";
    Cursor["sw_resize"] = "sw-resize";
    Cursor["text"] = "text";
    Cursor["url"] = "url()";
    Cursor["w_resize"] = "w-resize";
    Cursor["wait"] = "wait";
    Cursor["zoom_in"] = "zoom-in";
    Cursor["zoom_out"] = "zoom-out";
})(Cursor || (Cursor = {}));
//============================================================================================================================================================
//      T E X T  A L I G N (enum) left|right|center|justify|initial|inherit
//============================================================================================================================================================
var TextAlign;
(function (TextAlign) {
    TextAlign["LEFT"] = "left";
    TextAlign["CENTER"] = "center";
    TextAlign["RIGHT"] = "right";
    TextAlign["JUSTIFY"] = "justify";
    TextAlign["INITIAL"] = "initial";
    TextAlign["INHERIT"] = "inherit";
})(TextAlign || (TextAlign = {}));
//============================================================================================================================================================
//      L I N E  S T Y L E (enum) none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit
//============================================================================================================================================================
var LineStyle;
(function (LineStyle) {
    /** Pas de  bordure */
    LineStyle["NONE"] = "none";
    /** bordure masquée */
    LineStyle["HIDDEN"] = "hidden";
    /** Avec des pointillés */
    LineStyle["DOTTED"] = "dotted";
    /** Avec des tirets */
    LineStyle["DASHED"] = "dashed";
    /** Pleine */
    LineStyle["SOLID"] = "solid";
    LineStyle["DOUBLE"] = "double";
    /** en creux */
    LineStyle["GROOVE"] = "groove";
    /** 3D enfoncé */
    LineStyle["INSET"] = "inset";
    /** 3D relâché */
    LineStyle["OUTSET"] = "outset";
    /** en relief */
    LineStyle["RIDGE"] = "ridge";
    /** Valeur de base */
    LineStyle["INITIAL"] = "initial";
    /** Valeur du parent */
    LineStyle["INHERIT"] = "inherit";
})(LineStyle || (LineStyle = {}));
//============================================================================================================================================================
//      B A C K G R O U N D (color, alpha)
//============================================================================================================================================================
class Background {
    constructor(css, colorVal, alphaVal = 1) {
        this.css = css;
        this.col = new Color(colorVal, alphaVal);
        this.setValues(colorVal, alphaVal);
    }
    setValues(colorVal, alphaVal = 1) {
        this.color = colorVal;
        this.alpha = alphaVal;
    }
    get alpha() {
        return this.col.alpha;
    }
    set alpha(value) {
        this.col.alpha = value < 0 ? 0 : value > 1 ? 1 : value;
        this.css.backgroundColor = this.col.rgba;
    }
    get color() {
        return this.col.value;
    }
    set color(value) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.backgroundColor = this.col.rgba;
    }
}
//============================================================================================================================================================
//      B O R D E R (color, alpha, radius, lineStyle, thickness)
//============================================================================================================================================================
class Border {
    constructor(css, thickness, style, colorVal, alphaVal = 1.0, radiusVal = 0) {
        this.css = css;
        this.col = new Color(colorVal, alphaVal);
        this.setValues(thickness, style, colorVal, alphaVal, radiusVal);
    }
    setValues(thickness, style, colorVal, alphaVal = 1.0, radiusVal = 0) {
        this.thickness = thickness;
        this.line = style;
        this.color = colorVal;
        this.alpha = alphaVal;
        this.radius = radiusVal;
    }
    get alpha() {
        return this.col.alpha;
    }
    set alpha(value) {
        let v = value < 0 ? 0 : value > 1 ? 1 : value;
        this.col.alpha = value;
        this.css.borderColor = this.col.rgba;
    }
    get color() {
        return this.col.value;
    }
    set color(value) {
        this.col.value = value < 0 ? 0 : value > 0xFFFFFF ? 0xFFFFFF : value;
        this.css.borderColor = this.col.rgba;
    }
    get radius() {
        return parseInt(this.css.borderRadius);
    }
    set radius(value) {
        this.css.borderRadius = value + "px";
    }
    get line() {
        return LineStyle[this.css.borderStyle];
    }
    set line(value) {
        this.css.borderStyle = value;
    }
    get thickness() {
        return parseFloat(this.css.borderWidth);
    }
    set thickness(value) {
        this.css.borderWidth = value + "px";
    }
}
//============================================================================================================================================================
//      R E C T
//============================================================================================================================================================
class Rect {
    constructor(css, px, py, w = 0, h = 0) {
        this.css = css;
        this.values = [0, 0, 0, 0];
        this.setPos(px, py);
        this.setSize(w, h);
    }
    setPos(px, py) {
        this.x = px;
        this.y = py;
    }
    setSize(w, h) {
        this.width = w;
        this.height = h;
    }
    get x() {
        return this.values[0];
    }
    set x(value) {
        this.values[0] = value;
        this.css.left = `${value}px`;
    }
    get y() {
        return this.values[1];
    }
    set y(value) {
        this.values[1] = value;
        this.css.top = `${value}px`;
    }
    get width() {
        return this.values[2];
    }
    set width(value) {
        this.values[2] = value;
        this.css.width = `${value}px`;
    }
    get height() {
        return this.values[3];
    }
    set height(value) {
        this.values[3] = value;
        this.css.height = `${value}px`;
    }
    toString() {
        return `(x=${this.x}, y=${this.y})-(w=${this.width}, h=${this.height})`;
    }
}
//============================================================================================================================================================
//      T E X T F O R M A T
//============================================================================================================================================================
class TextFormat {
    constructor(frame, fontName, fontSize, textColor, textAlign) {
        this.css = frame.div.style;
        this.spanCss = frame.span.style;
        this.col = new Color(textColor, 1.0);
        this.setBaseValues(fontName, fontSize, textColor, textAlign);
    }
    /**
     * Format général
     * @param fontName Nom de police
     * @param fontSize Taille de caractère
     * @param textColor Couleur du texte
     * @param textAlign alignement du texte (constante)
     */
    setBaseValues(fontName, fontSize, textColor, textAlign) {
        this.font = fontName;
        this.size = fontSize;
        this.color = textColor;
        this.align = textAlign;
        return this;
    }
    /**
     * Présentation du texte
     * @param b bold (gras)
     * @param i italic (en italiques)
     * @param u underline (souligné)
     * @param s strike-thru (barré)
     */
    setStyleValues(b = false, i = false, u = false, s = false) {
        this.bold = b;
        this.italic = i;
        this.underline = u;
        this.strikeThrough = s;
        return this;
    }
    get font() {
        return this.css.fontFamily;
    }
    set font(value) {
        this.css.fontFamily = value;
    }
    get size() {
        return parseInt(this.spanCss.fontSize);
    }
    set size(value) {
        this.spanCss.fontSize = `${value}pt`;
    }
    get alpha() {
        return this.col.alpha;
    }
    set alpha(value) {
        this.col.alpha = value;
        this.css.color = this.col.rgba;
    }
    get color() {
        return this.col.value;
    }
    set color(value) {
        this.col.value = value;
        this.css.color = this.col.rgba;
    }
    get bold() {
        return this.css.fontWeight == "bold";
    }
    set bold(value) {
        this.css.fontWeight = value ? "bold" : "";
    }
    get italic() {
        return this.css.fontStyle == "italic";
    }
    set italic(value) {
        this.css.fontSize = value ? "italic" : "";
    }
    get underline() {
        return this.css.textDecoration == "underline";
    }
    set underline(value) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "underline" : prev;
    }
    get strikeThrough() {
        return this.css.textDecoration == "line-through";
    }
    set strikeThrough(value) {
        let prev = this.css.textDecoration.length ? this.css.textDecoration : "";
        this.css.textDecoration = value ? "line-through" : prev;
    }
    get align() {
        return TextAlign[this.css.textAlign];
    }
    set align(value) {
        this.css.textAlign = value;
    }
    get marginLeft() {
        return parseInt(this.css.paddingLeft);
    }
    set marginLeft(value) {
        this.css.paddingLeft = `${value}px`;
    }
    get marginRight() {
        return parseInt(this.css.paddingRight);
    }
    set marginRight(value) {
        this.css.paddingRight = `${value}px`;
    }
    get letterSpacing() {
        return parseInt(this.css.letterSpacing);
    }
    set letterSpacing(value) {
        this.css.letterSpacing = `${value}px`;
    }
}
//============================================================================================================================================================
//      E V E N T  L I S T E N E R 
//============================================================================================================================================================
class Listener {
    constructor(f, type, callback) {
        this.f = f;
        this.type = type;
        this.callback = callback;
        this.listen();
    }
    isListening(type, callback) {
        return this.type === type && this.callback === callback;
    }
    listen() {
        let fx = e => this.callback(this.f, e);
        this.f.div.addEventListener(this.type, fx);
    }
    dispose() {
        let fx = e => this.callback(this.f, e);
        this.f.div.removeEventListener(this.type, fx);
        this.f = null;
        this.type = undefined;
        this.callback = null;
    }
}
//============================================================================================================================================================
//      F R A M E
//============================================================================================================================================================
class Frame {
    /**
     * Zone d'affichage rectangulaire
     * @param idFrame Crée une zone visuelle
     * @param x gauche
     * @param y haut
     * @param w largeur
     * @param h hauteur
     * @param colorVal couleur de fond
     * @param alphaVal transparence du fond
     */
    constructor(idFrame, x, y, w, h, colorVal, alphaVal = 1.0) {
        this.children = [];
        this.listeners = [];
        this.div = document.createElement("div");
        this.span = document.createElement("span");
        this.div.appendChild(this.span);
        this.css = this.div.style;
        this.rect = new Rect(this.css, x, y, w, h);
        this.fmt = new TextFormat(this, "verdana", 12, 0x000000, TextAlign.LEFT);
        this.background = new Background(this.css, colorVal, alphaVal);
        this.border = new Border(this.css, 1, LineStyle.SOLID, colorVal, alphaVal);
        this.id = idFrame;
        this.setCss("position", "absolute", "box-sizing", "border-box", "overflow", "hidden");
        this.selectable = false;
    }
    /**
     * Ajoute une zone visuelle enfant de cette zone
     * @param f zone à ajouter
     */
    addChild(f) {
        if (f.parentFrame != null) {
            f = f.parentFrame.removeChild(f);
        }
        this.div.appendChild(f.div);
        this.children.push(f);
        f.parentFrame = this;
        return f;
    }
    /**
     * Insère une zone avant une autre zone enfant
     * @param index index de la zone à insérer
     * @param f zone à insérer entre deux zones de la liste
     */
    addChildAt(index, f) {
        f = this.addChild(f);
        index = Math.min(index, this.children.length - 1);
        if (index < 0 || index == this.childIndex(f)) {
            return f;
        }
        let prev = this.children[index];
        if (prev instanceof Frame) {
            this.div.insertBefore(f.div, prev.div);
            this.children[index] = f;
            this.children[index + 1] = prev;
        }
    }
    /**
     * Définit la réaction à un événement
     * @param type type de l'événement à écouter (click, mousemove, mouseleave...)
     * @param callback réaction(frame, event) à cet événement
     */
    addEventListener(type, callback) {
        for (let l of this.listeners) {
            if (l.isListening(type, callback)) {
                return;
            }
        }
        this.listeners.push(new Listener(this, type, callback));
    }
    /**
     * Renvoie l'index d'une zone enfant
     * @param f Enfant dont on veut l'index
     */
    childIndex(f) {
        return this.children.indexOf(f);
    }
    /**
     * Rend fermable la zone (affiche et active une croix de fermeture)
     * @param ok rendre fermable ?
     */
    closable(ok) {
        let dh = this.getChildByName("d_h"); // droite haut = bouton de fermeture
        if (ok) {
            if (dh != null)
                return; // déjà fermable
            dh = new Frame("d_h", 0, 0, 15, 15, 0xFFFFFF, 0.2);
            this.addChild(dh);
            dh.setTextFormat("verdana", 12, 0xFF0000, TextAlign.CENTER, true);
            dh.setCss("line-height", "9px");
            dh.right = 0;
            dh.text = "x";
            dh.addEventListener("mouseover", () => { dh.background.alpha = 1.0; });
            dh.addEventListener("mouseout", () => { dh.background.alpha = 0.2; });
            dh.addEventListener("click", (f, e) => f.parentFrame.dispose());
            dh.cursor = Cursor.pointer;
            dh.setAttrs("title", "Fermer");
        }
        else {
            if (dh != null)
                dh.dispose();
        }
        return this;
    }
    /**
     * Détruit la zone (enlève ses enfants, ses écouteurs, son parent)
     */
    dispose() {
        this.removeChildren();
        this.removeListeners();
        this.parent = null;
    }
    /**
     * Renvoie une zone enfant retrouvée par son index
     * @param index index de l'enfant désiré
     */
    getChild(index) {
        if (index < 0 || index > this.children.length - 1) {
            throw new RangeError("Pas d'enfant à l'index " + index);
        }
        return this.children[index];
    }
    /**
     * Renvoie unz zone enfant retrouvée par son nom
     * @param idChild identifiant de l'enfant désiré
     */
    getChildByName(idChild) {
        for (let f of this.children) {
            if (f.id === idChild)
                return f;
        }
        return null;
    }
    /**
     * Zone déplaçable ?
     * @param ok Faut-il rendre la zone déplaçable ?
     */
    movable(ok) {
        let gh = this.getChildByName("g_h");
        ;
        if (ok) {
            if (gh != null)
                return; // dééjà déplaçable
            gh = new Frame("g_h", -6, -6, 14, 14, 0x009999, 0.4);
            this.addChild(gh);
            gh.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            gh.addEventListener("mousedown", Frame.FrameMove);
            gh.cursor = Cursor.grab;
            gh.setAttrs("title", "Déplacer le cadre");
        }
        else {
            if (gh != null)
                gh.dispose();
        }
        return this;
    }
    /**
     * Supprime et détruit tous les enfants
     */
    removeChildren() {
        while (this.children.length) {
            this.children.pop().dispose();
        }
        return this;
    }
    /**
     * Supprime et détruit tous les écouteurs
     */
    removeListeners() {
        while (this.listeners.length) {
            this.listeners.pop().dispose();
        }
        return this;
    }
    /**
     * Supprime un écouteur d'événement
     * @param type type de l'événement à ne plus surveiller
     * @param callback fonction à ne plus appeler
     */
    removeEventListener(type, callback) {
        let l;
        for (var i = 0; i < this.listeners.length; i++) {
            l = this.listeners[i];
            if (l.isListening(type, callback)) {
                this.listeners.splice(i, 1)[0].dispose();
                return;
            }
        }
    }
    /**
     * Intégrer ceci à Movable !
     * @param bille
     * @param e
     */
    static FrameMove(bille, e) {
        let f = bille.parentFrame;
        if (f == null)
            return;
        bille.cursor = Cursor.grabbing;
        function moveParent(e) {
            f.rect.x += e.movementX;
            f.rect.y += e.movementY;
        }
        function releaseParent(e) {
            window.removeEventListener("mousemove", moveParent);
            window.removeEventListener("mouseup", releaseParent);
            bille.cursor = Cursor.grab;
        }
        window.addEventListener("mouseup", releaseParent);
        window.addEventListener("mousemove", moveParent);
        return f;
    }
    /**
     * Intégrer ceci à resizable !
     * @param bille
     * @param e
     */
    static FrameResize(bille, e) {
        let f = bille.parentFrame;
        if (f == null)
            return;
        function resizeParent(e) {
            f.width += e.movementX;
            f.height += e.movementY;
            bille.setPos(f.width - 14, f.height - 14);
        }
        function releaseParent(e) {
            window.removeEventListener("mousemove", resizeParent);
            window.removeEventListener("mouseup", releaseParent);
        }
        window.addEventListener("mouseup", releaseParent);
        window.addEventListener("mousemove", resizeParent);
        return f;
    }
    /**
     * Enlève une zone enfant (sans la détruire)
     * @param f zone enfant à enlever
     */
    removeChild(f) {
        let index = this.children.indexOf(f);
        if (index > -1) {
            this.div.removeChild(f.div);
            this.children.splice(index, 1);
            f.parentFrame = null;
            return f;
        }
        return null;
    }
    /**
     * Rend la zone redimensionnable par une poignée en bas à droite
     * @param ok Faut-il rendre la zone redimensionnable ?
     */
    resizable(ok) {
        let db = this.getChildByName("b_d");
        if (ok) {
            if (db != null)
                return;
            db = new Frame("d_b", this.width - 14, this.height - 14, 14, 14, 0xFF00FF, 0.5);
            this.addChild(db);
            db.setBorder(1, LineStyle.SOLID, 0x000000, 0.5, 8);
            db.addEventListener("mousedown", Frame.FrameResize);
            db.cursor = Cursor.nwse_resize;
            db.setAttrs("title", "Redimensionner le cadre");
        }
        else {
            if (db != null)
                db.dispose();
        }
        return this;
    }
    /**
     * Définit les attributs de la div sous-jascente
     * @param propVals Suite alternant des noms et des valeurs d'attributs
     */
    setAttrs(...propVals) {
        for (let i = 0; i < propVals.length; i += 2) {
            this.div.setAttribute(propVals[i], propVals[i + 1]);
        }
        return this;
    }
    /**
     * Définit le style du fond de la zone
     * @param colorVal couleur du fond
     * @param alphaVal transparence du fond
     */
    setBackground(colorVal, alphaVal) {
        this.background.setValues(colorVal, alphaVal);
        return this;
    }
    /**
     *
     * @param thickness
     * @param style
     * @param colorVal
     * @param alphaVal
     * @param radiusVal
     */
    setBorder(thickness, style, colorVal, alphaVal = 1, radiusVal = 0) {
        this.border.setValues(thickness, style, colorVal, alphaVal, radiusVal);
        return this;
    }
    /**
     *
     * @param propVals
     */
    setCss(...propVals) {
        if (this.css != null) {
            for (let i = 0; i < propVals.length; i += 2) {
                this.css[propVals[i]] = propVals[i + 1];
            }
        }
        return this;
    }
    /**
     *
     * @param fontName
     * @param fontSize
     * @param textColor
     * @param textAlign
     * @param bold
     * @param italic
     * @param underline
     * @param strikeThru
     */
    setTextFormat(fontName, fontSize, textColor, textAlign, bold = false, italic = false, underline = false, strikeThru = false) {
        this.fmt.setBaseValues(fontName, fontSize, textColor, textAlign);
        this.fmt.setStyleValues(bold, italic, underline, strikeThru);
        return this;
    }
    /**
     *
     * @param bold
     * @param italic
     * @param underline
     * @param strikeThru
     */
    setTextStyle(bold = false, italic = false, underline = false, strikeThru = false) {
        this.fmt.setStyleValues(bold, italic, underline, strikeThru);
        return this;
    }
    /**
     *
     * @param px
     * @param py
     */
    setPos(px, py) {
        this.rect.setPos(px, py);
        return this;
    }
    /**
     *
     * @param width
     * @param height
     */
    setSize(width, height) {
        this.rect.setSize(width, height);
        return this;
    }
    /**
     *
     */
    get cursor() {
        return this.css.cursor;
    }
    set cursor(value) {
        this.setCss("cursor", value);
    }
    /**
     *
     */
    get id() {
        return this.div.id;
    }
    set id(value) {
        this.div.id = value;
    }
    /**
     *
     */
    get parent() {
        return this.div.parentElement;
    }
    set parent(value) {
        if (value == null) {
            this.div.remove();
            this.parentFrame = null;
            this.removeListeners();
        }
        else {
            value.appendChild(this.div);
        }
    }
    /**
     *
     */
    get selectable() {
        return (this.css.userSelect == "text");
    }
    set selectable(value) {
        let v = value ? "normal" : "none";
        this.setCss("user-select", v, "-moz-user-select", v, "-webkit-user-select", v);
    }
    /**
     *
     */
    get text() {
        return this.span.innerHTML;
    }
    set text(value) {
        this.span.innerHTML = value;
    }
    /**
     *
     */
    get left() {
        return this.rect.x;
    }
    set left(value) {
        this.rect.x = value;
    }
    /**
     *
     */
    get top() {
        return this.rect.y;
    }
    set top(value) {
        this.rect.y = value;
    }
    /**
     * Définit la position à droite (en annulant la position à gauche)
     */
    set right(value) {
        this.setCss("left", "", "right", value + "px");
    }
    /**
     * Définit la position du bas (en annulant la position du haut)
     */
    set bottom(value) {
        this.setCss("top", "", "bottom", value + "px");
    }
    /**
     *
     */
    get width() {
        return this.rect.width;
    }
    set width(value) {
        this.rect.width = value;
    }
    /**
     *
     */
    get height() {
        return this.rect.height;
    }
    set height(value) {
        this.rect.height = value;
    }
}
//============================================================================================================================================================
//      W I N  : fenêtre avec titre, options de fermeture, déplacement, rediensionnement  
//============================================================================================================================================================
class Win extends Frame {
    constructor(idFrame, x, y, w, h, bgColor, borderColor, alphaVal = 1.0) {
        super(idFrame, x, y, w, h, bgColor, alphaVal);
        this.setBorder(1, LineStyle.OUTSET, borderColor, alphaVal);
        let title = new Frame("title", 0, 0, 10, 24, 0x0000FF, 1.0);
        this.addChild(title);
        title.setTextFormat("Calibri", 12, 0xFFFFFF, TextAlign.CENTER);
        title.setBorder(2, LineStyle.OUTSET, 0xFFFFFF);
        title.setCss("width", "100%");
        this.title = title;
    }
    /**
     * Définit les options d'affichage et d'utilisation (plus jolies que closable/resizable)
     * @param mov La fenêtre peut-elle être déplacée ?
     * @param clos la fenêtre peut-elle être fermée ?
     * @param siz la fenêtre peut-elle être redimensionnée ?
     */
    setOptions(mov = true, clos = true, siz = true) {
        let title = this.title;
        if (mov) {
            title.cursor = Cursor.grab;
            title.addEventListener("mousedown", (titl, e) => {
                const previousTitle = titl.text;
                let fen = titl.parentFrame;
                titl.cursor = Cursor.grabbing;
                window.addEventListener("mouseup", endDragWindow);
                window.addEventListener("mousemove", dragWindow);
                function dragWindow(e) {
                    fen.setPos(fen.left + e.movementX, fen.top + e.movementY);
                    titl.text = `x:${fen.left} y:${fen.top}`;
                }
                function endDragWindow(e) {
                    window.removeEventListener("mouseup", endDragWindow);
                    window.removeEventListener("mousemove", dragWindow);
                    title.cursor = Cursor.grab;
                    titl.text = previousTitle;
                }
            });
        }
        if (clos) {
            let closer = new Frame("close", 0, 0, 20, 20, 0xFFFFFF, 0.3);
            closer.text = "x";
            closer.setTextFormat("calibri", 13, 0xFFFFFF, TextAlign.CENTER, true);
            closer.setCss("line-height", "14px");
            title.addChild(closer);
            closer.right = 0;
            closer.cursor = Cursor.pointer;
            closer.addEventListener("mouseover", (c) => { c.fmt.color = 0xFF0000; });
            closer.addEventListener("mouseout", (c) => { c.fmt.color = 0xFFFFFF; });
            closer.addEventListener("click", (c) => { c.parentFrame.parentFrame.dispose(); });
            this.closer = closer;
        }
        if (siz) {
            let sizer = new Frame("sizer", 0, 0, 14, 14, 0x000000, 0.2);
            this.addChild(sizer);
            sizer.right = 0; // reste collé à droite... Eh oui :)
            sizer.bottom = 0; // reste collé en bas... Facile non ?
            sizer.cursor = Cursor.nwse_resize;
            sizer.addEventListener("mouseover", (s) => { s.background.alpha = 0.5; });
            sizer.addEventListener("mouseout", (s) => { s.background.alpha = 0.2; });
            this.sizer = sizer;
            sizer.addEventListener("mousedown", (sz, e) => {
                let fen = sz.parentFrame;
                let titl = fen.getChildByName("title");
                const previousTitle = titl.text;
                window.addEventListener("mouseup", onEndResize);
                window.addEventListener("mousemove", onResize);
                function onResize(e) {
                    fen.setSize(fen.width + e.movementX, fen.height + e.movementY);
                    if (fen.width < 100)
                        fen.width = 100;
                    if (fen.height < 50)
                        fen.height = 50;
                    titl.text = `${fen.width} x ${fen.height}`;
                }
                function onEndResize(e) {
                    window.removeEventListener("mouseup", onEndResize);
                    window.removeEventListener("mousemove", onResize);
                    titl.text = previousTitle;
                }
            });
        }
        return this;
    }
}
//# sourceMappingURL=ui.js.map